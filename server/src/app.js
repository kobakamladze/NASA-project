import express from "express";

import { planetsRouter } from "../routes/planets/planetsRouter.js";

const app = express();

// JSON parser middleware
app.use(express.json());

// Routes
app.use(planetsRouter);

export { app };
