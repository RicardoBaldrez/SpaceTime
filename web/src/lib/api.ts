import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.18.167.233:3333',
})
