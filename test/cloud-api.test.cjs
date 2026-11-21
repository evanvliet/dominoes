const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function createApi(rows) {
  const sheets = {};
  const createSheet = sheetRows => ({
    getRange(row = 1, column = 1, rowCount = 1, columnCount = 1) {
      return {
        getValues: () => Array.from({ length: rowCount }, (_, rowOffset) =>
          Array.from({ length: columnCount }, (_, columnOffset) =>
            sheetRows[row + rowOffset - 1]?.[column + columnOffset - 1] ?? ''
          )
        ),
        setValues: values => values.forEach((valueRow, rowOffset) => {
          const targetRow = row + rowOffset - 1;
          while (sheetRows.length <= targetRow) sheetRows.push([]);
          valueRow.forEach((value, columnOffset) => {
            sheetRows[targetRow][column + columnOffset - 1] = value;
          });
        }),
        setValue: value => {
          while (sheetRows.length < row) sheetRows.push([]);
          sheetRows[row - 1][column - 1] = value;
        }
      };
    },
    getDataRange: () => ({ getValues: () => sheetRows }),
    getLastRow: () => sheetRows.length,
    getMaxRows: () => 501,
    getMaxColumns: () => Math.max(3, ...sheetRows.map(row => row.length)),
    insertColumnAfter: column => sheetRows.forEach(row => row.splice(column, 0, '')),
    insertColumnsAfter: (column, count) => sheetRows.forEach(row => {
      for (let i = 0; i < count; i++) row.splice(column + i, 0, '');
    })
  });
  const sheet = createSheet(rows);
  sheets['test-sheet'] = sheet;
  const context = {
    Date,
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    SpreadsheetApp: {
      getActiveSpreadsheet: () => ({
        getSheetByName: name => sheets[name] || null,
        insertSheet: name => {
          const sheetRows = [];
          const newSheet = createSheet(sheetRows);
          sheets[name] = newSheet;
          return newSheet;
        },
        getSpreadsheetTimeZone: () => 'UTC'
      })
    },
    Utilities: { formatDate: date => date.toISOString().slice(0, 16) },
    ContentService: {
      MimeType: { JSON: 'json' },
      createTextOutput: text => ({ setMimeType: () => text })
    }
  };
  context.testSheets = sheets;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../code.gs'), 'utf8'), context);
  return context;
}

test('download reads sheet names and legacy dates without requiring player-name parameters', () => {
  const api = createApi([
    ['Date', 'One', 'Two'],
    ['Wed Jan 04 1978 07:17:00 GMT-0800 (Pacific Standard Time)', 50, 49],
    ['1978-01-07T13:53', 54, 31],
    [new Date('1978-01-10T20:29:00Z'), 30, 53]
  ]);
  const result = JSON.parse(api.doGet({ parameter: { sheet: 'test-sheet' } }));
  assert.equal(result.status, 'success');
  assert.deepEqual(result.names, ['One', 'Two']);
  assert.deepEqual(result.games, [
    { date: '1978-01-04T07:17', p1_score: 50, p2_score: 49, scorekeeper: 'One' },
    { date: '1978-01-07T13:53', p1_score: 54, p2_score: 31, scorekeeper: 'One' },
    { date: '1978-01-10T20:29', p1_score: 30, p2_score: 53, scorekeeper: 'One' }
  ]);
});

test('create includes the scorekeeper column', () => {
  const api = createApi([]);
  const result = JSON.parse(api.doPost({
    postData: { contents: JSON.stringify({ mode: 'create', sheet: 'fresh-sheet', names: ['One', 'Two'] }) }
  }));
  assert.equal(result.status, 'success');
  assert.deepEqual(api.testSheets['fresh-sheet'].getDataRange().getValues()[0], ['Date', 'One', 'Two', 'Scorekeeper']);
});

test('append recognizes a legacy date as the same timestamp and preserves server scores', () => {
  const rows = [
    ['Date', 'One', 'Two'],
    ['Wed Jan 04 1978 07:17:00 GMT-0800 (Pacific Standard Time)', 50, 49]
  ];
  const api = createApi(rows);
  const payload = {
    mode: 'append', sheet: 'test-sheet', names: ['One', 'Two'],
    games: [
      { date: '1978-01-04T07:17', p1_score: 50, p2_score: 49 },
      { date: '1978-01-04T07:17', p1_score: 51, p2_score: 49 }
    ]
  };
  const result = JSON.parse(api.doPost({ postData: { contents: JSON.stringify(payload) } }));
  assert.equal(result.duplicates, 1);
  assert.equal(result.conflicts, 1);
  assert.equal(rows.length, 2);
  assert.equal(rows[0][3], 'Scorekeeper');
});

test('append writes scorekeeper and defaults a blank value to the first player', () => {
  const rows = [
    ['Date', 'One', 'Two', 'Scorekeeper']
  ];
  const api = createApi(rows);
  const payload = {
    mode: 'append', sheet: 'test-sheet', names: ['One', 'Two'],
    games: [
      { date: '1978-01-04T07:17', p1_score: 50, p2_score: 49, scorekeeper: 'Alex' },
      { date: '1978-01-04T07:18', p1_score: 54, p2_score: 31, scorekeeper: '' }
    ]
  };
  const result = JSON.parse(api.doPost({ postData: { contents: JSON.stringify(payload) } }));
  assert.equal(result.added, 2);
  assert.deepEqual(rows.slice(1), [
    ['1978-01-04T07:17', 50, 49, 'Alex'],
    ['1978-01-04T07:18', 54, 31, 'One']
  ]);
  const downloaded = JSON.parse(api.doGet({ parameter: { sheet: 'test-sheet' } }));
  assert.deepEqual(downloaded.games.map(game => game.scorekeeper), ['Alex', 'One']);
});
