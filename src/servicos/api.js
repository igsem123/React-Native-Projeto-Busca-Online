import axios from "axios";

const api = axios.create({
    baseURL: "http://10.1.1.40:3000/"
})

export default api;