import axios from 'axios'

const API = axios.create({
    baseURL: "http://thedarkunicorns.fr/api",
})

export default API