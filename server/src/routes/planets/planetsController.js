import { habitablePlanets } from "../../models/planetsModel.js";

function getAllPlanets(req, res) {
  return res.status(200).json(habitablePlanets);
}

export { getAllPlanets };
