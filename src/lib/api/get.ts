import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api.neshan.org",
  method: "get",
  timeout: 5000,
  withCredentials: true,
});
