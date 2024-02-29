import axios from "axios";

/* AUTHENTICATION REQUESTS
------------------------------------------------------------------------ */
export async function signUp(user) {
  const { data } = await axios.post("/api/users/signup", user);
  return data;
}

export async function logIn(user) {
  const { data } = await axios.post("/api/users/login", user);
  return data;
}

// This file stores all requests we make to the backend. These requests will hit the backend routes
// that then perform CRUD operations.

export async function getCourts(courtId) {
  const { data } = await axios.get(`/api/courts/${courtId}`);
  return data;
}

export async function postCourt(court) {
  const { data } = await axios.post("/api/courts", comment);
  return data;
}
export async function updateCourt(court, id) {
  const { data } = await axios.put(`/api/courts/${id}`, comment);
  return data;
}

export async function deleteCourt(id) {
  const { data } = await axios.delete(`/api/courts/${id}`);
  return data;
}
