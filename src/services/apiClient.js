import axios from "axios";

const API = axios.create({
  baseURL: "http://66.23.230.126/api", // change to production URL later
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
