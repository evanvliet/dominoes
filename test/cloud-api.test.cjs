const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function createApi(rows) {
  const sheet = {
    getRange() {
      return {
        getValues: () => [rows[0]],
        setValues: values => rows.push(...values)
      };
    },
    getDataRange: () => ({ getValues: () => rows }),
    getLastRow: () => rows.length,
    getMaxRows: () => 501
  };
  const context = {
    Date,
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    SpreadsheetApp: {
      getActiveSpreadsheet: () => ({
        getSheetByName: name => name === 'test-sheet' ? sheet : null,
        getSpreadsheetTimeZone: () => 'UTC'
      })
    },
    Utilities: { formatDate: date => date.toISOString().slice(0, 16) },
    ContentService: {
      MimeType: { JSON: 'json' },
      createTextOutput: text => ({ setMimeType: () => text })
    }
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../code.gs'), 'utf8'), context);
  return context;
}

test('download reads legacy text dates alongside ISO and spreadsheet dates', () => {
  const api = createApi([
    ['Date', 'One', 'Two'],
    ['Wed Jan 04 1978 07:17:00 GMT-0800 (Pacific Standard Time)', 50, 49],
    ['1978-01-07T13:53', 54, 31],
    [new Date('1978-01-10T20:29:00Z'), 30, 53]
  ]);
  const result = JSON.parse(api.doGet({ parameter: { sheet: 'test-sheet', p1: 'One', p2: 'Two' } }));
  assert.equal(result.status, 'success');
  assert.deepEqual(result.games, [
    { date: '1978-01-04T07:17', p1_score: 50, p2_score: 49 },
    { date: '1978-01-07T13:53', p1_score: 54, p2_score: 31 },
    { date: '1978-01-10T20:29', p1_score: 30, p2_score: 53 }
  ]);
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
});
