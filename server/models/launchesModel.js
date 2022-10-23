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

function addNewLaunch(launch) {
  launchesMap.set(launch.flightNumber, launch);
}

export { launchesMap, getAllLaunches };
