import axios from "axios";

const API = axios.create({
    baseURL: "https://reddit-backend-xp48.onrender.com"
});

// Har request me token auto attach ho
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
