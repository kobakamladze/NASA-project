import express from "express";

import { httpGetAllLaunches } from "./launchesController.js";
import { httpAddNewLaunch } from "./launchesController.js";

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);

export { launchesRouter };
