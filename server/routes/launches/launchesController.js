import { addNewLaunch, getAllLaunches } from "../../models/launchesModel.js";

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  return res.status(201).json(addNewLaunch(req.body));
}

export { httpGetAllLaunches, httpAddNewLaunch };
