import axios from "axios";

const API_URL = "http://localhost:8000";

function httpGetPlanets() {
  // Load planets and return as JSON.
  return axios.get(`${API_URL}/planets`).then(({ data: response }) => response);
}

function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
  return axios
    .get(`${API_URL}/launches`)
    .then(({ data: response }) => response);
}

function httpSubmitLaunch(launch) {
  // Submit given launch data to launch system.
  return axios
    .post(`${API_URL}/launches`, { launch })
    .then((response) => response);
}

function httpAbortLaunch(id) {
  // Delete launch with given ID.
  return axios.delete(`${API_URL}/launches/${id}`);
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
