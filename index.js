const superagent = require("superagent");
const md5 = require("md5");

class Client{
  constructor(){
    this.chats = []
    this.cookies = null

    this.push = (content) => this.chats.push(content)
    this.get = () => {return this.chats}
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

    let reversedChat = this.get().reverse();

    for (let i = 0; i < this.get().length; i++) {
      payload += `vText${i + 2}=${
        escape(reversedChat[i]).includes("%u")
        ? escape(escape(reversedChat[i]).replace(/%u/g, "|"))
        : escape(reversedChat[i])
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
  version: require('./package.json').version,
  Client: Client
}
