import client from "./index.js";
import constants from "../constants.js";
import { MessageEmbed } from "discord.js";

export default async function messageComments(repository, sender, comment, pull_request) {

  const messageEmbed = new MessageEmbed()
    .setTitle(`[${repository}] - ${pull_request.title} | ${pull_request.state}`)
    .setURL(pull_request.html_url)
    .setAuthor(sender.login, sender.avatar_url)
    .setDescription(pull_request.body)
    .addField(`New comment by ${sender.login}`, comment)
    .setTimestamp()

  if (pull_request.assignees.length > 0) {
    pull_request.assignees.forEach( assignee => {
      const userId = constants.contributors[assignee.login].match(/[0-9]+/)[0]
      const user = client.users.cache.get(userId)
      user.send({ embeds: [messageEmbed]})
        
      return `Message send with successfully`
    })
  } else {
    const userId = constants.contributors[pull_request.user.login].match(/[0-9]+/)[0]
    const user = client.users.cache.get(userId)
    user.send({ embeds: [messageEmbed]})
    
    return `Message send with successfully`
  }

}