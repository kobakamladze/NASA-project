import cors from "cors";
import path from "path";
import morgan from "morgan";
import express from "express";

import { __dirname } from "../tools/dirname.js";

import { planetsRouter } from "../routes/planets/planetsRouter.js";
import { launchesRouter } from "../routes/launches/launchesRouter.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

// Routes
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

export { app };
