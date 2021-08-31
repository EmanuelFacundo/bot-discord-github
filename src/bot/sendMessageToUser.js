import client from "./index.js";

export default function sendMessageToUser(userId, message) {
  const user = client.users.cache.get(userId)
  user.send({ embeds: [message] })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
}