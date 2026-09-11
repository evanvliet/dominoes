function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var sheet = getContestSheet(payload.contest);

    ensureHeader(sheet);
    var values = sheet.getDataRange().getValues();
    for (var i = 1; i < values.length; i++) {
      if (String(values[i][0]) === String(payload.date) &&
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
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName(requestedContest));
    if (!sheet) return jsonOutput({"status": "success", "games": []});
    var values = sheet.getDataRange().getValues();
    var games = [];
    for (var i = 1; i < values.length; i++) {
      var row = values[i];
      if (!row[0]) continue;
      games.push({
        date: row[0],
        p1_score: Number(row[1]),
        p2_score: Number(row[2])
      });
    }
    return jsonOutput({"status": "success", "games": games});
  } catch(error) {
    return jsonOutput({"status": "error", "message": error.toString()});
  }
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

function ensureHeader(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["date", "p1_score", "p2_score"]);
  }
}

function jsonOutput(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
