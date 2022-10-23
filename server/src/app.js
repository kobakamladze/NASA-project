import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

import { __dirname } from "../tools/dirname.js";
import { planetsRouter } from "../routes/planets/planetsRouter.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

// Routes
app.use(planetsRouter);
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

export { app };
