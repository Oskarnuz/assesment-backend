import express, { Express } from "express";
import configExpress from "./config/express";
import routes from './routes';

const app: Express = express()
const port = process.env.PORT || 8080

// Config
configExpress(app)

// Setup Config
routes(app)

app.listen(port, () => {
  console.log(`Server listening on port ${port} !!!`)
})