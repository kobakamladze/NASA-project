import { getAllLaunches } from "../../models/launchesModel.js";

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

export { httpGetAllLaunches };
