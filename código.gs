function doGet(e){
  var tpl = HtmlService.createTemplateFromFile("page.html");
  tpl.data = e.parameters;
  tpl.data.id = SpreadsheetApp.getActiveSpreadsheet().getId();
  return tpl.evaluate();
}

function checkin(userid, control){
  if(userid && control){
    var now = new Date();
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registro").appendRow([userid,control,now]);
    return now.toLocaleString();
  }
}

