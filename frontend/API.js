import axios from 'axios'

let production = process.env.PRODUCTION;
let apiURL = production === "0" ? "http://api:8080/" : "http://thedarkunicorns.fr/api";

const API = axios.create({
    baseURL: apiURL,
})

export default API