import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:8080/",
    // baseURL: "http://thedarkunicorns.fr/api",
})

export default API