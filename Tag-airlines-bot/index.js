require("dotenv").config();

console.log("TOKEN existe:", !!process.env.TOKEN);
console.log("Longitud del token:", process.env.TOKEN ? process.env.TOKEN.length : 0);

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => {
  console.log(`✅ Quetzal está en línea como ${client.user.tag}`);
});

client.login(process.env.TOKEN);
