import { MessageEmbed } from "discord.js"

import constants from "../constants.js";

export default function messageEmbed(action, repository, sender, pull_request, assignees, reviewers) {
  const colors = constants.colors

  const messageEmbed = new MessageEmbed()
    .setColor(colors[action])
    .setURL(pull_request.html_url)
    .setAuthor(sender.login, sender.avatar_url)
    .setTitle(`[${repository}] - ${pull_request.title} | ${action}`)
    .setDescription(`${pull_request.body}`)
    .setTimestamp()
    
  if (assignees.length > 0) {
    messageEmbed.addField("Assignees 🤠", `📌 ${assignees.map(assignee => {
      return constants.contributors[assignee.login] || assignee.login
    })}\n`)
  }

  if (reviewers.length > 0) {
    messageEmbed.addField("Reviewers 🧐", `📌 ${reviewers.map(reviewer => {
      return constants.contributors[reviewer.login] || reviewer.login
    })}\n`)
  }


  return messageEmbed
}