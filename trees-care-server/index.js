const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Plant care server running");
});
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m6oxwzg.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const plantCollection = client.db("Plants-collection").collection("plant");
    //                         ===== get Api ======                            //

    app.get("/all-plants", async (req, res) => {
      const result = await plantCollection.find().toArray();
      res.send(result);
    });
    //                          ===== get single Api ======                         //

    app.get("/all-plants/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      result = await plantCollection.findOne(query);
      res.send(result);
    });
    //                          ===== get Api by email ======                         //
    app.get("/my-plants/:email", async (req, res) => {
      const email = req.params.email;
      const query = { userEmail: email };
      result = await plantCollection.find(query).toArray();
      res.send(result);
    });

    //                         ===== Post  Api ======                            //

    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const updatedPlant = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          plantName: updatedPlant.plantName,
          category: updatedPlant.category,
          description: updatedPlant.description,
          image: updatedPlant.image,
          careLevel: updatedPlant.careLevel,
          wateringFrequency: updatedPlant.wateringFrequency,
          lastWateredDate: updatedPlant.lastWateredDate,
          nextWateringDate: updatedPlant.nextWateringDate,
          healthStatus: updatedPlant.healthStatus,
        },
      };

      const result = await plantCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    //                         ===== Post  Api ======                            //

    app.post("/all-plants", async (req, res) => {
      const addPlantRequest = req.body;
      const result = await plantCollection.insertOne(addPlantRequest);
      res.send(result);
    });

    //                         ===== delete   Api ======                            //

    app.delete("/all-plants/:id", async (req, res) => {
      const deletedId = req.params.id;
      const query = { _id: new ObjectId(deletedId) };
      result = await plantCollection.deleteOne(query);
      res.send(result);
    });

    //                                     ===========                            //
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
