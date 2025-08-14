import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer 1|Pu9o3T9AcJGTujVadXVyxr1uP8O6fHxVuxCorun2e9a7b2a3",
  },
});

export default api;
