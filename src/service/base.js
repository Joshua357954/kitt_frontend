import axios from 'axios'

const Prod = process.env.NODE_ENV==="production"

const Dev_URL = 'http://localhost:4000/api'

const API_URL = Prod ? "https://qitt_gzt-backend.render.com/api" : Dev_URL  

export const API= axios.create({ baseURL: API_URL })
