import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.26.172.221:3333',
})
