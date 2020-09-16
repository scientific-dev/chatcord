const superagent = require("superagent");
const md5 = require("md5");
const db = require('enhanced.db')

class Client{
  constructor(options={}){
    this.chats = []
    this.cookies = null
    this.options = options

    this.push = (content) => this.chats.push(content)
    this.get = () => {return this.chats}

    if(options.sqlite){
      db.options({filename: 'chat.sqlite'})
      this.push = (content) => {
        content = content.split('"').join("'")
        db.push('chat', content)
        this.chats.push(content)
      }
      if(!db.get('chat')) db.set('chat', [])
      this.get = () => {return db.get('chat')}
    }
  }

  async chat(stimulus){
    if(!stimulus) throw new Error('Missing Stimulus')

    if(!this.cookies){
      const req = await superagent.get("https://www.cleverbot.com/");
      this.cookies = req.header["set-cookie"];
    }

    let payload = `stimulus=${
      escape(stimulus).includes("%u")
      ? escape(escape(stimulus).replace(/%u/g, "|"))
      : escape(stimulus)
    }&`;

    let reversethis = {}
    reversethis.chats = this.get().reverse();

    for (let i = 0; i < this.get().length; i++) {
      payload += `vText${i + 2}=${
        escape(reversethis.chats[i]).includes("%u")
        ? escape(escape(reversethis.chats[i]).replace(/%u/g, "|"))
        : escape(reversethis.chats[i])
      }&`;
    }

    payload += "cb_settings_scripting=no&islearning=1&icognoid=wsf&icognocheck=";

    payload += md5(payload.substring(7, 33));

    const req = await superagent
    .post("https://www.cleverbot.com/webservicemin?uc=UseOfficialCleverbotAPI")
    .set("Cookie", this.cookies)
    .type("text/plain")
    .send(payload);

    let reply = decodeURIComponent(req.header["cboutput"]);

    this.push(stimulus)
    this.push(reply)

    return reply
  }
}

module.exports = {
  version: require('package.json').version,
  Client: Client
}
