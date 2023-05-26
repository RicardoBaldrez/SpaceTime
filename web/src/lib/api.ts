import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.27.24.102:3333',
})
