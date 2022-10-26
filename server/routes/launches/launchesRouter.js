import express from "express";

import { httpGetAllLaunches } from "./launchesController.js";
import { httpAddNewLaunch, httpDeleteLaunch } from "./launchesController.js";

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);
launchesRouter.delete("/:launchId", httpDeleteLaunch);

export { launchesRouter };
