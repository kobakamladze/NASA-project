import {
  addNewLaunch,
  getAllLaunches,
  deleteLaunch,
} from "../../models/launchesModel.js";

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  return res.status(201).json(addNewLaunch(req.body.launch));
}

function httpDeleteLaunch(req, res) {
  const launchId = +req.params.launchId;
  return res.status(201).json(deleteLaunch(launchId));
}

export { httpGetAllLaunches, httpAddNewLaunch, httpDeleteLaunch };
