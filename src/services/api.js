import axios from "axios";

const API = axios.create({
    baseURL: "http://redditbackend-production.up.railway.app"
});

export default API;