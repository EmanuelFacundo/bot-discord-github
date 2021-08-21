import { MessageEmbed } from "discord.js";
import dotenv from "dotenv/config"

import client from "./index.js";

const channel = () => client.channels.cache.get(process.env.CHANNEL_ID)


export default async function webhook(req, res) {
  try {
    var message = req.body
    
    
    var messageEmbed = new MessageEmbed()
      .setColor("#000000")
      .setURL(message.pull_request.html_url)
      .setAuthor(message.sender.login, message.sender.avatar_url)
      .setTitle(`${message.pull_request.title} | `)
      .setDescription(`${message.pull_request.body}`)
      .addField("Reviewers", ".")
      .setTimestamp()

    await channel().send({ embeds: [messageEmbed]})
    res.status(200).send(messageEmbed)

  } catch (error) {
    res.status(500).send({ 
      message: error.message
    })
  }
}