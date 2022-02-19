import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import { MongoClient } from "mongodb"

const mongoUsername = encodeURIComponent(process.env.MONGO_USERNAME as string);
const mongoPassword = encodeURIComponent(process.env.MONGO_PASSWORD as string);
const mongoHost = encodeURIComponent(process.env.MONGO_HOST as string);

const mongoUrl = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:27017/?authMechanism=DEFAULT`;
const client: MongoClient = new MongoClient(mongoUrl);

const app = express()
const port = 5001

app.use(cors({ origin: "*" }))
app.use(express.json())

// GET Routes
app.get("/", (req, res) => {

})

// POST Routes
app.post("/createListing", (req, res) => {

})

client.connect((err, db) => {
  if (err) {
    console.error(err)
    process.exit()
  }

  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated')
    })
  })
})