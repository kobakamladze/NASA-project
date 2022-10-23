import express from "express";

import { httpGetAllLaunches } from "./launchesController.js";

const launchesRouter = express.Router();

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("");

export { launchesRouter };
