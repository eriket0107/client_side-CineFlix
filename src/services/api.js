import axios from "axios";

export const api = axios.create({
  baseURL: 'https://cineflixapi.onrender.com'
})
// https://cineflixapi.onrender.com
// http://localhost:3333