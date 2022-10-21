import fs from "fs";
import { parse } from "csv-parse";

// configuring __dirname for ES6 import/export module
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

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
