import { Router } from "express"
import { MongoClient } from "mongodb"

const postRoutes = Router()

postRoutes.post("/createItemListing", async (req, res) => {
  try {
    const client = req.app.locals.db as MongoClient
    const database = client.db("barketplace")
    const listings = database.collection("itemListings")

    const newListing = req.body as ItemListing

    listings.insertOne(newListing)

    res.send()
  } catch (err) {
    res.status(500).send(err)
  }
})

export default postRoutes