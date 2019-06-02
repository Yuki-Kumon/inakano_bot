var SlackFunc = new Object();


SlackFunc.getdate = function(getmessage, name) {
  //メッセージを継ぎ足す
  var message = getmessage.message;

  //時刻オブジェクトを生成
  var date = new Date();

  //曜日を取得
  var day_num = date.getDay();
  var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][day_num] ;
  //時刻を取得
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();

  //午前か午後かを判別
  //曜日及び午前午後のメッセージ
  if (hour >= 12) {
    var isafternoon = 1;
    message += "こんばんは。" + name + "です！\n今日は" + year + "年" + month + "月" + day + "日、" + dayOfWeekStr + "曜日です。\n";
  } else {
    var isafternoon = 0;
    message += "おはようございます。" + name + "です！\n今日は" + year + "年" + month + "月" + day + "日、" + dayOfWeekStr + "曜日です。\n";
  }

  var obj = new Object();
  obj.message = message;
  obj.isafternoon = isafternoon;
  obj.day_num = day_num;
  obj.dayOfWeekStr = dayOfWeekStr;
  obj.date = date;
  obj.hour = hour;
  return obj;
}


SlackFunc.countdown = function(getmessage, name, date) {
  //メッセージを継ぎ足す
  var message = getmessage.message;
  /*
  //スプレッドシートに接続
  var ss = SpreadsheetApp.openByUrl(PropertiesService.getScriptProperties().getProperty('SHEET_INSHI'));
  var sheet = ss.getSheets()[0];
  var inshi_date = new Date(sheet.getSheetValues(2,2,1,1));
  var year = inshi_date.getFullYear();
  var month = inshi_date.getMonth() + 1;
  var day = inshi_date.getDate();
  */

  date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  message += name + "は、" + year + "年" + month + "月" + day + "日です。";

  //日数差を計算
  var msDiff = date.getTime() - getmessage.date.getTime();
  var daysDiff = Math.floor(msDiff / (1000 * 60 * 60 *24));
  daysDiff += 1;

  message += "今日から" + daysDiff + "日後です。\n";

  getmessage.message = message;
  return getmessage;
}
