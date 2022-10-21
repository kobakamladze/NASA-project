import { planets } from "../../models/planetsModel.js";

function getAllPlanets(req, res) {
  return res.status(200).res.json(planets);
}

export { getAllPlanets };
