import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.19.209.69:3333',
})
