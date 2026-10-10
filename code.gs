var SCRIPT_VERSION = 'gs.2.4';

function doPost(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    var payload = JSON.parse(e.postData.contents);
    lock.waitLock(30000);
    locked = true;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var name = sheetName(payload.contest);
    var sheet = ss.getSheetByName(name);
    var names = Array.isArray(payload.names) ? payload.names : [];

    if (payload.mode === 'clear') {
      if (sheet) {
        try {
          ss.deleteSheet(sheet);
        } catch (e) {
          sheet.clearContents();
        }
      }
      return jsonOutput({"status": "success", "cleared": true, "script_version": SCRIPT_VERSION});
    }

    sheet = sheet || ss.insertSheet(name);
    ensureHeader(sheet, names);
    var tz = ss.getSpreadsheetTimeZone();
    var values = sheet.getDataRange().getValues();
    var rows = Array.isArray(payload.games) ? payload.games : [payload];
    var gamesByTimestamp = {};
    var added = 0;
    var replaced = 0;
    var duplicates = 0;
    for (var i = 1; i < values.length; i++) {
      var existingDate = formatRowDate(values[i][0], tz);
      if (!existingDate) continue;
      var existingKey = timestampKey(existingDate);
      if (!gamesByTimestamp[existingKey]) {
        gamesByTimestamp[existingKey] = [existingDate, Number(values[i][1]), Number(values[i][2])];
      }
    }
    for (var j = 0; j < rows.length; j++) {
      var game = rows[j];
      var date = formatRowDate(game.date, tz);
      var p1 = Number(game.p1_score);
      var p2 = Number(game.p2_score);
      if (!date || !isFinite(p1) || !isFinite(p2)) continue;
      var key = timestampKey(date);
      var current = gamesByTimestamp[key];
      if (!current) {
        added++;
      } else if (Number(current[1]) === p1 && Number(current[2]) === p2) {
        duplicates++;
        continue;
      } else {
        replaced++;
      }
      gamesByTimestamp[key] = [key, p1, p2];
    }
    var canonicalGames = Object.keys(gamesByTimestamp).sort(compareDateStrings).map(function(key) {
      var game = gamesByTimestamp[key];
      return [key, Number(game[1]), Number(game[2])];
    });
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) sheet.getRange(2, 1, lastRow - 1, 3).clearContent();
    if (canonicalGames.length) sheet.getRange(2, 1, canonicalGames.length, 3).setValues(canonicalGames);
    return jsonOutput({"status": "success", "added": added, "replaced": replaced, "duplicates": duplicates, "script_version": SCRIPT_VERSION});
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString()});
  } finally {
    if (locked) lock.releaseLock();
  }
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
