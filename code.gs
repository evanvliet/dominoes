var SCRIPT_VERSION = 'gs.2.3';

function doPost(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    var payload = JSON.parse(e.postData.contents);
    lock.waitLock(30000);
    locked = true;
    var sheet = getContestSheet(payload.contest);
    var names = Array.isArray(payload.names) ? payload.names : [];

    if (payload.mode === 'clear') {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        try {
          ss.deleteSheet(sheet);
        } catch (e) {
          sheet.clearContents();
          ensureHeader(sheet, names);
        }
      }
      return jsonOutput({"status": "success", "cleared": true, "script_version": SCRIPT_VERSION});
    }

    ensureHeader(sheet, names);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tz = ss.getSpreadsheetTimeZone();
    var values = sheet.getDataRange().getValues();
    var rows = Array.isArray(payload.games) ? payload.games : [payload];
    var seen = {};
    var added = 0;
    for (var i = 1; i < values.length; i++) {
      seen[gameKey(formatRowDate(values[i][0], tz), values[i][1], values[i][2])] = true;
    }
    for (var j = 0; j < rows.length; j++) {
      var game = rows[j];
      var date = formatRowDate(game.date, tz);
      var p1 = Number(game.p1_score);
      var p2 = Number(game.p2_score);
      if (!date || !isFinite(p1) || !isFinite(p2)) continue;
      var key = gameKey(date, p1, p2);
      if (seen[key]) continue;
      sheet.appendRow([date, p1, p2]);
      seen[key] = true;
      added++;
    }
    sortContestSheet(sheet);
    return jsonOutput({"status": "success", "added": added, "duplicates": rows.length - added, "script_version": SCRIPT_VERSION});
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString()});
  } finally {
    if (locked) lock.releaseLock();
  }
}

function gameKey(date, p1, p2) {
  return String(date) + '|' + Number(p1) + '|' + Number(p2);
}

function compareDateStrings(a, b) {
  var aNum = Date.parse(String(a));
  var bNum = Date.parse(String(b));
  if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
  return String(a).localeCompare(String(b));
}

function sortContestSheet(sheet) {
  var values = sheet.getDataRange().getValues();
  if (!values || values.length <= 1) return;
  var rows = [];
  for (var i = 1; i < values.length; i++) {
    if (!values[i] || values[i].length < 3 || !values[i][0]) continue;
    rows.push([String(values[i][0]), Number(values[i][1]) || 0, Number(values[i][2]) || 0]);
  }
  if (!rows.length) return;
  rows.sort(function(a, b) {
    return compareDateStrings(a[0], b[0]);
  });
  sheet.getRange(2, 1, sheet.getLastRow() - 1, 3).clearContent();
  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, 3).setValues(rows);
  }
}

function doGet(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    if (e && e.parameter && e.parameter.check === 'version') {
      return jsonOutput({"status": "success", "api_version": 2, "script_version": SCRIPT_VERSION});
    }
    lock.waitLock(30000);
    locked = true;
    var requestedContest = e && e.parameter ? e.parameter.contest : "";
    if (!requestedContest) return jsonOutput({"status": "error", "message": "contest is required", "script_version": SCRIPT_VERSION});
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName(requestedContest));
    if (!sheet) return jsonOutput({"status": "success", "games": [], "api_version": 2});
    var tz = ss.getSpreadsheetTimeZone();
    var values = sheet.getDataRange().getValues();
    var games = [];
    var startIndex = 1;

    if (values.length > 0) {
      var firstRow = values[0] || [];
      var firstCell = String(firstRow[0] || '').trim().toLowerCase();
      if (firstCell === 'date') {
        startIndex = 1;
      } else {
        startIndex = 0;
      }
    }

    for (var i = startIndex; i < values.length; i++) {
      var row = values[i];
      if (!row[0]) continue;
      if (row.length < 3) continue;
      games.push({
        date: formatRowDate(row[0], tz),
        p1_score: Number(row[1]),
        p2_score: Number(row[2])
      });
    }
    games.sort(function(a, b) {
      return compareDateStrings(a.date, b.date);
    });
    return jsonOutput({"status": "success", "games": games, "api_version": 2, "script_version": SCRIPT_VERSION});
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString()});
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

function getContestSheet(contest) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var name = sheetName(contest);
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function sheetName(contest) {
  var name = String(contest || "Contest")
    .replace(/\|+/g, " vs ")
    .replace(/!+/g, " vs ")
    .replace(/[\\\/?*\[\]:]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  return (name || "Contest").substring(0, 100);
}

function ensureHeader(sheet, names) {
  var values = sheet.getDataRange().getValues();
  var firstRow = values.length ? (values[0] || []) : [];
  var hasDateHeader = firstRow.length >= 3 && String(firstRow[0] || '').trim().toLowerCase() === 'date';
  var hasLegacyScoreHeaders = firstRow.length >= 3 && (
    String(firstRow[1] || '').trim().toLowerCase() === 'p1_score' ||
    String(firstRow[2] || '').trim().toLowerCase() === 'p2_score'
  );

  if (sheet.getLastRow() === 0 || !hasDateHeader || hasLegacyScoreHeaders) {
    var left = Array.isArray(names) && names.length >= 2 ? String(names[0] || 'Player 1') : 'Player 1';
    var right = Array.isArray(names) && names.length >= 2 ? String(names[1] || 'Player 2') : 'Player 2';
    sheet.getRange(1, 1, 1, 3).setValues([['Date', left, right]]);
  }
}

function jsonOutput(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
