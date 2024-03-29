import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosInstace = axios.create({
  baseURL: BASE_URL,
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
