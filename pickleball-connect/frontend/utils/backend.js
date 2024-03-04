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

export async function getComments(eventId) {
  const { data } = await axios.get(`/api/comments/${eventId}`);
  return data;
}

export async function postComment(comment) {
  const authHeader = { headers: { 'Authorization': localStorage.getItem("userToken") } };
  const { data } = await axios.post("/api/comments", comment, authHeader);
  return data;
}
export async function updateComment(comment, id) {
  const authHeader = { headers: { 'Authorization': localStorage.getItem("userToken") } };
  const { data } = await axios.put(`/api/comments/${id}`, comment, authHeader);
  return data;
}

export async function deleteComment(id) {
  const authHeader = { headers: { 'Authorization': localStorage.getItem("userToken") } };
  const { data } = await axios.delete(`/api/comments/${id}`, authHeader);
  return data;
}
