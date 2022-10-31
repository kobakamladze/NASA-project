import fs from "fs";
import { parse } from "csv-parse";
import path from "path";

import { __dirname } from "../tools/dirname.js";

const habitablePlanets = [];

function planetHabitTest(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function readAllPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "models", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (planetHabitTest(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        if (err) reject();
      })
      .on("end", () => {
        resolve();
      });
  });
}

export { habitablePlanets, readAllPlanets };
