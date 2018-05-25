import axios from 'axios'
import base from './base'

axios.interceptors.request.use(
  config => {
    config.baseURL = base.baseURL
    config.withCredentials = true
    return Promise.resolve(config)
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      console.log(error.response)
    } else {
      console.log(error)
    }
    return Promise.reject(error)
  }
)
export default axios
