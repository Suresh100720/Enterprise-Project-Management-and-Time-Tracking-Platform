import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

/*
 Request interceptor
 Adds JWT token automatically
*/
apiClient.interceptors.request.use(
  (requestConfig) => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      requestConfig.headers.Authorization = `Bearer ${storedToken}`;
    }

    return requestConfig;
  },
  (requestError) => Promise.reject(requestError)
);

/*
 Response interceptor
 Handles global errors
*/
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const statusCode = error.response.status;

      if (statusCode === 401) {
        console.error("Unauthorized access");
      }

      if (statusCode === 403) {
        console.error("Permission denied");
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;