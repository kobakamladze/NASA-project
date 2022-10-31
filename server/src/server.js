import http from "http";
import process from "process";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { app } from "./app.js";
import { readAllPlanets } from "./models/planetsModel.js";

dotenv.config();

// Choosing port
const PORT = process.env.PORT || 8000;

// Setting up database url
const MONGO_PASSWORD = process.env.DB_PASSWORD;
const MONGO_URL = `mongodb+srv://nasa-api:${MONGO_PASSWORD}@nasacluster.fpvpgei.mongodb.net/?retryWrites=true&w=majority`;

// Creating servre
const server = http.createServer(app);

// Checking database connection status
mongoose.connection.once("open", () => console.log("Connected to DB..."));
mongoose.connection.on("error", (error) => console.log(error));

// Reading data CSV before starting server
readAllPlanets()
  .then(() => mongoose.connect(MONGO_URL, {}))
  .then(() =>
    // Starting listening
    server.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}...`)
    )
  )
  .catch((error) => (error ? console.log("ERROR:" + error) : true));
