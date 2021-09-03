import constants from "../constants.js";
import messagePR from './messagesPullRequest.js'
import messageComment from "./messageComments.js";

var lastState = ""

export default async function webhook(req, res) {
  try {
    const action = req.body.action

    if (!constants.actions.includes(action)) {
      res.status(404).send("action not found")
      return
    }

    const comment = action == "created" ? req.body.comment.body : ""
    const repository = req.body.repository.full_name
    const sender = req.body.sender
    const pull_request = req.body.pull_request
    const reviewers = req.body.pull_request.requested_reviewers
    const assignees = req.body.pull_request.assignees

    if (["opened", "closed", "review_requested", "review_request_removed"].includes(action)) {
      messagePR(action, repository, sender, pull_request, assignees, reviewers)
        .then(msg => {
          res.status(200).send({
            message: msg
          })
        })
        .catch(err => {
          res.status(500).send({
            message: err.message
          })
        })
    } else if (action == "created") {
      messageComment(repository, sender, comment, pull_request, lastState)
        .then(msg => {
          res.status(200).send({
            message: msg
          })
        })
        .catch(err => {
          res.status(500).send({
            message: err.message
          })
        })
    } else if (["submitted", "edited"].includes(action)) {
      lastState = req.body.review.state
      const review = req.body.review.body ?? ''

      if (review) {
        messageComment(repository, sender, review, pull_request, lastState)
          .then(msg => {
            res.status(200).send({
              message: msg
            })
          })
        return
      }

      res.state(200).send({
        message: "no review"
      })
    }

  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}