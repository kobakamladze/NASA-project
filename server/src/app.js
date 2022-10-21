import express from "express";
import cors from "cors";

import { planetsRouter } from "../routes/planets/planetsRouter.js";

const app = express();

// CORS middleware
app.use(cors({ origin: "http://localhost:3000" }));
// JSON parser middleware
app.use(express.json());
// Routes
app.use(planetsRouter);

export { app };
