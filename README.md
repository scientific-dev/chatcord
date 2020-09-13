# Chatcord

Chatcord is a quick way to easily make your own Chat Bot with Javascript Easily with https://www.cleverbot.com/

> Only the name is ChatCord but can be used be anywhere if you have right knowledge!

![https://nodei.co/npm/chatcord](https://www.npmjs.com/package/chatcord)

# Quick Example

```js
// Import Package
const chatcord = require('chatcord')

// Set options
const options = {
  sqlite: false
}
// Options is optional
// Sqlite will be false by default. It will store your chat data in chat.sqlite if its set to true or else will be stored in array which will be cleared on each restart of the programm!

// Use Client Class
const chat = new chatcord.Client(options)

chat('Hey! How are you!').then(reply => {
  console.log(reply)
  // The module will reply with the based on stimulus (1st parameter of the chat function!)
})
```

# Credits

Made by Science Spot and Rup

### Support Discord Servers
- [Slime Hangout Server](https://discord.gg/tNVXCe9)
- [Decimal Developement Server](https://discord.gg/FrduEZd)

### GitHub Repo
- [GitHub Source Codes](https://github.com/Scientific-Guy/chatcord)

> Report your Issues in the GitHub Repo Issues or join the Discord Server and directly report your Issue!
