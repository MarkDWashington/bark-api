import { Router } from "express";
import { MongoClient } from "mongodb";

const getRoutes = Router()

getRoutes.get("/catalog", async (req, res) => {
  try {
    const client = req.app.locals.db as MongoClient
    const database = client.db("barketplace")
    const listings = database.collection("item-listings")

    const result = await listings.find({}).project({title: 1}).toArray()
    
    res.type("json").send({listings: result})

    res.send()
  } catch (err) {
    res.status(500).send(err)
  }
})

// TODO: Rideshares
// TODO: Housing

export default getRoutes