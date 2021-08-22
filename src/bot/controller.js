import { MessageEmbed } from "discord.js";
import dotenv from "dotenv/config"

import client from "./index.js";
import constants from "../constants.js";

const channel = () => client.channels.cache.get(process.env.CHANNEL_ID)


export default async function webhook(req, res) {
  try {
    const action = req.body.action 
    const sender = req.body.sender
    const pull_request = req.body.pull_request
    const reviewers = req.body.pull_request.requested_reviewers

    if (!constants.actions.includes(action)) {
      res.status(404).send("action not found")
    }

    const messageSend =  messageEmbed(action, sender, pull_request, reviewers)

    await channel().send({ embeds: [messageSend]})

    await channel().send(`${reviewers.map(reviewer => {
      return constants.reviewers[reviewer.login]
    })}`)
    const clean = await channel().messages.fetch({limit: reviewers.length})
    await channel().bulkDelete(clean)
    
    res.status(200).send({
      message: "Message send"
    })
    
  } catch (error) {
    res.status(500).send({ 
      message: error.message
    })
  }
}

function messageEmbed(action, sender, pull_request, reviewers){
  const colors = constants.colors

  const messageEmbed =  new MessageEmbed()
    .setColor(colors[action])
    .setURL(pull_request.html_url)
    .setAuthor(sender.login, sender.avatar_url)
    .setTitle(`${pull_request.title} | ${action}`)
    .setDescription(`${pull_request.body}`)
    .setTimestamp()
  
  if (reviewers.length > 0){
    messageEmbed.addField("Reviewers", `📌 ${reviewers.map(reviewer => {
      return constants.reviewers[reviewer.login]
    })}`)
  }
  
  return messageEmbed
}