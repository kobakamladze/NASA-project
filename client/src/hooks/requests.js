import axios from "axios";

const API_URL = "http://localhost:8000";

function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  return axios.get(`${API_URL}/planets`).then(({ data: response }) => response);
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
