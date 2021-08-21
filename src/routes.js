import { Router } from "express";

import  webhook from "./bot/controller.js"

const routes = Router()

routes.get("/", (req, res) => {
  
  res.status(200).json({
    message: "ok"
  })
})

routes.post("/", webhook)

export default routes;