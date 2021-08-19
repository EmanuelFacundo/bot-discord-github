import express  from "express";

const app = express();
var menssageWebhook = {}

app.use(express.json())

app.get('/', (req, res) => {
  return res.send(menssageWebhook)
})

app.post('/', (req, res) => {
  menssageWebhook = req.body

  return res.status(200).json({
    message: "ok"
  })
})

app.listen(3333)