import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.27.27.88:3333',
})
