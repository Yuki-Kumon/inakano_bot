# inakano_bot
slackとかにgasから定期投稿するbotです。
# 構成
## main.gs
slack投稿を行う関数群。
## slackbot_function.gs
slack投稿の際の処理系を纏めた関数群。
## Toggle.gs
Toggleから勉強時間を取得する関数群。
## Date_hundle.gs
日付に関する文字列を扱う関数群(Toggle.gsだけが使ってたはず)。
# 依存するライブラリ
リソース→ライブラリから追加。
## SlackApp
library key: M3W5Ut3Q39AaIwLquryEPMwV62A3znfOO, version: 22
# 必要なアクセストークン
## Slack
https://api.slack.com/web を参考に発行。適当なチャンネルへ投稿する権限だけ与えれば大丈夫なはず。
## Toggle(気が向いたらどうぞ)
アカウント作って https://www.toggl.com/app/profile にアクセスすれば発行できる。
# 使いかた
適当なgasのプロジェクトを作ってコードをコピペ。
各種アクセストークンとslack周りのパラメータを設定したらmain.gs内のmain()関数を定時で実行するようにトリガーを設定する。
