import axios from "axios";

const axiosInstance = axios.create({
    // local instnace of firebase functions
    // baseURL: "http://127.0.0.1:5001/cone-b766f/us-central1/api",
    // deployed version of amazon server on render.com
    baseURL: "https://amazon-api-deploy-amno.onrender.com/",
});

export {axiosInstance};