var SCRIPT_VERSION = 'gs.2.9';

function doPost(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    var payload = JSON.parse(e.postData.contents);
    lock.waitLock(30000);
    locked = true;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var requestedName = String(payload.sheet || payload.contest || '');

    if (payload.mode === 'clear') {
      return jsonOutput({"status": "error", "message": "Cloud contests cannot be erased.", "script_version": SCRIPT_VERSION});
    }

    if (payload.mode === 'create') {
      var newName = validateSheetName(requestedName);
      var names = validateNames(payload.names);
      if (ss.getSheetByName(newName)) {
        return jsonOutput({"status": "error", "message": "That sheet name is already in use.", "script_version": SCRIPT_VERSION});
      }
      var newSheet = ss.insertSheet(newName);
      setSheetSize(newSheet, 501, 3);
      newSheet.getRange(1, 1, 1, 3).setValues([['Date', names[0], names[1]]]);
      return jsonOutput({"status": "success", "created": true, "names": names, "script_version": SCRIPT_VERSION});
    }

    if (payload.mode && payload.mode !== 'append') {
      return jsonOutput({"status": "error", "message": "Unsupported cloud operation.", "script_version": SCRIPT_VERSION});
    }
    var names = validateNames(payload.names);
    if (!requestedName) throw new Error("sheet is required");
    var validName = validateSheetName(requestedName);
    var sheet = ss.getSheetByName(validName);
    if (!sheet) throw new Error("Sheet not found");
    if (!sheetNamesMatch(sheet, names)) throw new Error("Player names do not match this sheet");

    var tz = ss.getSpreadsheetTimeZone();
    var values = sheet.getDataRange().getValues();
    var rows = Array.isArray(payload.games) ? payload.games : [payload];
    if (!rows.length) throw new Error("At least one score is required");

    var gamesByTimestamp = Object.create(null);
    var duplicates = 0;
    var conflicts = 0;
    var additions = [];
    for (var i = 1; i < values.length; i++) {
      var existingDate = gameDateKey(values[i][0], tz);
      if (!existingDate) continue;
      gamesByTimestamp[existingDate] = [Number(values[i][1]), Number(values[i][2])];
    }

    for (var j = 0; j < rows.length; j++) {
      var game = rows[j];
      if (!game) throw new Error("Invalid score record");
      var key = gameDateKey(game.date, tz);
      var p1 = Number(game.p1_score);
      var p2 = Number(game.p2_score);
      if (!key || !isFinite(p1) || !isFinite(p2)) throw new Error("Each score needs a valid date and two numeric scores");
      var current = gamesByTimestamp[key];
      if (current) {
        if (current[0] === p1 && current[1] === p2) {
          duplicates++;
        } else {
          conflicts++;
        }
      } else {
        gamesByTimestamp[key] = [p1, p2];
        additions.push([key, p1, p2]);
      }
    }

    if (additions.length) {
      var firstRow = sheet.getLastRow() + 1;
      ensureRowCapacity(sheet, firstRow + additions.length - 1);
      sheet.getRange(firstRow, 1, additions.length, 3).setValues(additions);
    }
    return jsonOutput({
      "status": "success",
      "added": additions.length,
      "duplicates": duplicates,
      "conflicts": conflicts,
      "script_version": SCRIPT_VERSION
    });
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString(), "script_version": SCRIPT_VERSION});
  } finally {
    if (locked) lock.releaseLock();
  }
}

function gameDateKey(value, tz) {
  var date = timestampKey(formatRowDate(value, tz));
  var legacy = date.match(/^(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{2}) (\d{4}) (\d{2}):(\d{2}):\d{2} GMT[+-]\d{4}(?: \([^)]*\))?$/);
  if (legacy && !isNaN(Date.parse(date))) {
    var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(legacy[1]) + 1;
    date = legacy[3] + '-' + ('0' + month).slice(-2) + '-' + legacy[2] + 'T' + legacy[4] + ':' + legacy[5];
  }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(date) || isNaN(Date.parse(date))) return "";
  return date;
}

function timestampKey(date) {
  var value = String(date || '').trim();
  var match = value.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})/);
  return match ? match[1] : value;
}

function compareDateStrings(a, b) {
  var aNum = Date.parse(String(a));
  var bNum = Date.parse(String(b));
  if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
  return String(a).localeCompare(String(b));
}

function validateNames(names) {
  if (!Array.isArray(names) || names.length !== 2) throw new Error("Both player names are required");
  var result = names.map(function(name) { return String(name || '').trim(); });
  if (!result[0] || !result[1]) throw new Error("Both player names are required");
  return result;
}

function validateSheetName(value) {
  var name = String(value || '');
  if (!name || name !== name.trim()) throw new Error("Enter a sheet name without leading or trailing spaces");
  if (name.length > 100) throw new Error("Sheet names must be 100 characters or fewer");
  if (/[\\\/?*\[\]:]/.test(name)) throw new Error("Sheet names cannot contain / \\ ? * [ ] or :");
  return name;
}

function sheetNamesMatch(sheet, names) {
  var header = sheet.getRange(1, 1, 1, 3).getValues()[0];
  return String(header[0] || '').trim().toLowerCase() === 'date' &&
    String(header[1] || '').trim() === names[0] &&
    String(header[2] || '').trim() === names[1];
}

function setSheetSize(sheet, rows, columns) {
  var currentColumns = sheet.getMaxColumns();
  if (currentColumns > columns) sheet.deleteColumns(columns + 1, currentColumns - columns);
  if (currentColumns < columns) sheet.insertColumnsAfter(currentColumns, columns - currentColumns);

  var currentRows = sheet.getMaxRows();
  if (currentRows > rows) sheet.deleteRows(rows + 1, currentRows - rows);
  if (currentRows < rows) sheet.insertRowsAfter(currentRows, rows - currentRows);
}

function ensureRowCapacity(sheet, requiredRows) {
  var currentRows = sheet.getMaxRows();
  if (requiredRows > currentRows) sheet.insertRowsAfter(currentRows, requiredRows - currentRows);
}

function doGet(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    if (e && e.parameter && e.parameter.check === 'version') {
      return jsonOutput({"status": "success", "api_version": 3, "script_version": SCRIPT_VERSION});
    }
    lock.waitLock(30000);
    locked = true;
    var params = e && e.parameter ? e.parameter : {};
    var requestedName = String(params.sheet || params.contest || '');
    if (!requestedName) throw new Error("sheet is required");
    requestedName = validateSheetName(requestedName);
    var names = validateNames([params.p1, params.p2]);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(requestedName);
    if (!sheet) throw new Error("Sheet not found");
    if (!sheetNamesMatch(sheet, names)) throw new Error("Player names do not match this sheet");
    var tz = ss.getSpreadsheetTimeZone();
    var values = sheet.getDataRange().getValues();
    var games = [];

    for (var i = 1; i < values.length; i++) {
      var row = values[i];
      if (!row[0]) continue;
      var date = gameDateKey(row[0], tz);
      if (!date || !isFinite(Number(row[1])) || !isFinite(Number(row[2]))) continue;
      games.push({
        date: date,
        p1_score: Number(row[1]),
        p2_score: Number(row[2])
      });
    }
    games.sort(function(a, b) { return compareDateStrings(a.date, b.date); });
    return jsonOutput({"status": "success", "games": games, "names": names, "api_version": 3, "script_version": SCRIPT_VERSION});
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString(), "script_version": SCRIPT_VERSION});
  } finally {
    if (locked) lock.releaseLock();
  }
}

function formatRowDate(val, tz) {
  if (!val) return "";
  if (val instanceof Date) {
    return Utilities.formatDate(val, tz, "yyyy-MM-dd'T'HH:mm");
  }
  return String(val).trim();
}

function jsonOutput(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
