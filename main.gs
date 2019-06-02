var Mastodonmain = new Object();

Mastodonmain.main_mastodon = function() {
  var token = 'xxxxxxxxxxxxxxxx';  // もちろん直接アクセストークンは書かない方がよいので次の行みたいにgasの機能で隠すと良い
  // var token = PropertiesService.getScriptProperties().getProperty("xxxxxxxx");

  var channel_id = "xxxxx";
  var bot_name = "xxxxxxxx";
  var app = SlackApp.create(token);

  //諸々を格納するオブジェクト
  var Messageobject = new Object();
  Messageobject.message = "";

  Messageobject.message += '[bot]\n'
  Messageobject = SlackFunc.getdate(Messageobject, '田舎の学生bot');
  Messageobject = SlackFunc.countdown(Messageobject, "五神総長の任期満了日", "2021/3/31");

  //Toggleから勉強時間を取得(気が向いたらどうぞ)
  if (0){
    Messageobject.message += "==================\n";
    Toggl.init();
    Messageobject.message += Toggl.todaytask();
  }

  //投稿する
  return app.postMessage(channel_id, Messageobject.message, {
    username: bot_name
    });

}


// この関数を定時で実行するようトリガーを設定する
function main() {
  Mastodonmain.main_mastodon();
}
