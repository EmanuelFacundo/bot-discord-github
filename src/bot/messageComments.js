import client from "./index.js";
import constants from "../constants.js";

export default async function messageComments(repository, sender, comment, pull_request) {

  const message = (
    `**_[${repository}] - ${pull_request.title}_**\n
    **New comment by ${sender.login}**\n
    **Comment 📜**\n
    ${comment}`)

    const userId = "<@266080109352583169>".match(/[0-9]+/)[0]
    const user = client.users.cache.get(userId)
    user.send("messageSend")

  return `${userId}, ${user}`
}