import dotenv from "dotenv/config"
import { Client, Intents } from "discord.js"

const intents = new Intents()
intents.add(
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.DIRECT_MESSAGES
)

const client = new Client({ intents })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN_BOT)

export default client