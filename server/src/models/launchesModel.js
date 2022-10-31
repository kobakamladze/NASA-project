import _ from "lodash";

const launchesMap = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler",
  rocket: "Explorer IS 1",
  launchDate: new Date("Decmeber 27, 2030"),
  destination: "Kepler-442 b",
  custmoer: ["Koba", "ZTM"],
  upcoming: true,
  success: true,
};

launchesMap.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launchesMap.values());
}

function addNewLaunch(newLaunch) {
  // Getting fligh number of latest element from launchesMap
  const launchesList = Array.from(launchesMap.values());
  const latestLaunch = _.cloneDeep(_.last(launchesList));

  let latestFlightNumber = latestLaunch?.flightNumber || 0;
  const newFlightNumber = (latestFlightNumber += 1);

  const success = new Date(newLaunch.launchDate) > Date.now();
  const upcoming = success || false;

  launchesMap.set(newFlightNumber, {
    ...newLaunch,
    flightNumber: newFlightNumber,
    success,
    upcoming,
  });

  return launchesMap.get(newFlightNumber);
}

function deleteLaunch(launchId) {
  const launchToCancel = launchesMap.get(launchId);

  launchesMap.delete(launchId);

  return launchToCancel;
}

export { getAllLaunches, addNewLaunch, deleteLaunch };
