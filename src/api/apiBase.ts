import axios from "axios";

export const apiBase = axios.create({
    baseURL: "http://test-backend.itdelta.agency/api",
    headers: {
        'Content-Type': 'application/json'
    }
})