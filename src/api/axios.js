import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // ganti sesuai URL backend kamu
  headers: {
    "Content-Type": "application/json",
  },
});

// Middleware: attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
