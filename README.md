# Chatcord

Chatcord is a quick way to easily make your own Chat Bot with Javascript Easily with https://www.cleverbot.com/

This package is just for Entertainment Purpose.
Typescript Support added!

> Only the name is ChatCord but can be used anywhere if you have right knowledge!

# Quick Example
 
**Javascript:**
```js
// Import Package
const chatcord = require('chatcord')

// Use Client Class
const client = new chatcord.Client()

client.chat('Hey! How are you!').then(reply => {
  console.log(reply)
  // The module will reply with the based on stimulus (1st parameter of the chat function!)
})
```

**Typescript:**
```ts
// Import Package
import * as chatcord from 'chatcord'

// Use Client Class
const client = new chatcord.Client()

async function chat(msg: string):void {
  console.log(await client.chat(msg))
}

chat('Hey! How are you!')
// Will reply based on stimulus
```

# Credits
 
Made by Science Spot and Rup

### Support Discord Servers
- [Gogeta's Workshop Server](https://discord.gg/P2GyrRn4C5)
- [Decimal Developement Server](https://discord.gg/FrduEZd)

### GitHub Repo
- [GitHub Source Codes](https://github.com/Scientific-Guy/chatcord)

> Report your Issues in the GitHub Repo Issues or join the Discord Server and directly report your Issue!
