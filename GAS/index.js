// GAS プロジェクトID: 1lypDLAiWi7CWGSy2s7PZiRk1qNgrV6-pi_uZ1XWRuIeEFF4q_aHSbK1W

function doPost(e) {
  const clickCount = JSON.parse(e.postData.contents).clickCount;

  const spreadsheetId = '12CRckT6MXpqTiDUr5U-naHLS0OImGto4_BXwWcB2RsU';
  const sheetName = 'dev';
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow(['Timestamp', 'いいね', 'トータル']);
  }

  const timestamp = new Date();
  const lastRow = sheet.getLastRow();
  const lastTotal = lastRow > 1 ? sheet.getRange(lastRow, 3).getValue() : 0;

  sheet.appendRow([timestamp, 'いいねが送られました', lastTotal + clickCount]);

  return ContentService.createTextOutput(JSON.stringify({ result: "Post done" }));
}
