"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});
//Recibir mensaje
const BOT_CHANNEL = process.env.BOT_CHANNEL;
const MESSAGE_RESPONSE = ["Pito todos🍆", "A lamidas😜", "Pito`(¬‿¬)`", "Nyaaa`╰(*°▽°*)╯`"];
function gotMessage(message) {
    console.log("New Message📰", message);
    if (message.content.match(/([a-z])hupas+/)||message.content.match(/([a-z])hupan+/)) {
        //message.reply("pito 7u7");
        let randomIndex = Math.floor(Math.random() * MESSAGE_RESPONSE.length);
        message.channel.send(MESSAGE_RESPONSE[randomIndex]);
       // message.reply(); No sé como rresponder?
    }
}

client.on("messageCreate", gotMessage);
//Mensaje hola

// Login to Discord with your client's token
client.login(TOKEN);
