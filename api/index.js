import axios from "axios";
// import { authService } from "../auth/auth-service";
const paramsSerializer = (params) =>
  Object.entries(params)
    .map(([key, value]) => key + "=" + (value || ""))
    .join("&") || "";

const http = axios.create({ paramsSerializer });

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    };
    const token = localStorage.getItem("user-access-token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      message.error({
        content: "User not unauthorized!",
        key: "unauthorized",
        duration: 2,
      });
      // authService.logout();
    }
    throw error;
  }
);
export default http;
