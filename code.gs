function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var sheet = getContestSheet(payload.contest);
    var names = Array.isArray(payload.names) ? payload.names : [];

    if (payload.mode === 'replace') {
      sheet.clearContents();
      ensureHeader(sheet, names);
      var rows = Array.isArray(payload.games) ? payload.games : [];
      for (var i = 0; i < rows.length; i++) {
        sheet.appendRow([rows[i].date, Number(rows[i].p1_score || 0), Number(rows[i].p2_score || 0)]);
      }
      return jsonOutput({"status": "success", "replaced": true, "count": rows.length});
    }

    ensureHeader(sheet, names);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tz = ss.getSpreadsheetTimeZone();
    var values = sheet.getDataRange().getValues();
    var payloadDate = formatRowDate(payload.date, tz);
    for (var i = 1; i < values.length; i++) {
      var rowDate = formatRowDate(values[i][0], tz);
      if (rowDate === payloadDate &&
          Number(values[i][1]) === Number(payload.p1_score) &&
          Number(values[i][2]) === Number(payload.p2_score)) {
        return jsonOutput({"status": "success", "duplicate": true});
      }
    }
    sheet.appendRow([payload.date, payload.p1_score, payload.p2_score]);

    return jsonOutput({"status": "success"});
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString()});
  }
}

function doGet(e) {
  try {
    var requestedContest = e && e.parameter ? e.parameter.contest : "";
    if (!requestedContest) return jsonOutput({"status": "error", "message": "contest is required"});
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName(requestedContest));
    if (!sheet) return jsonOutput({"status": "success", "games": []});
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
    return jsonOutput({"status": "success", "games": games});
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString()});
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
  var name = String(contest || "Contest").replace(/[\\\/?*\[\]:]/g, "-").trim();
  return (name || "Contest").substring(0, 100);
}

function ensureHeader(sheet, names) {
  var values = sheet.getDataRange().getValues();
  var firstRow = values.length ? (values[0] || []) : [];
  var hasDateHeader = firstRow.length >= 3 && String(firstRow[0] || '').trim().toLowerCase() === 'date';

  if (sheet.getLastRow() === 0 || !hasDateHeader) {
    var left = Array.isArray(names) && names.length >= 2 ? String(names[0] || 'Player 1') : 'Player 1';
    var right = Array.isArray(names) && names.length >= 2 ? String(names[1] || 'Player 2') : 'Player 2';
    sheet.getRange(1, 1, 1, 3).setValues([['date', left, right]]);
  }
}

function jsonOutput(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
