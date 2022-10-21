import http from "http";
import { app } from "./app.js";
import { readAllPlanets } from "../models/planetsModel.js";

// Choosing PORT
const PORT = process.env.PORT || 8000;

// Creating servre
const server = http.createServer(app);

// Reading data CSV before starting server
readAllPlanets()
  .then(() =>
    // Starting listening
    server.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}...`)
    )
  )
  .catch((error) => (error ? console.log("ERROR:" + error) : true));
