import axios from 'axios'
import { Config } from 'configs'

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status })
}

instance.interceptors.response.use(
  (response) => response.data,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  },
)

export default instance