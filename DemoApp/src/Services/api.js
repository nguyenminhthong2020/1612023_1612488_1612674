/* eslint-disable */
import axios from 'axios'
import { Config } from '@/Config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: Config.API_URL })

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // here you can deal with 401 error
  }
  return result
}

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
})


// Dùng với axios
export const imageApiInstance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    'Authorization': '563492ad6f91700001000001508feadfb19843f8a908441cf08d33dd'
  },
  timeout: 5000,
})

export const axiosInstance = axios.create({
          baseURL: 'https://api.pexels.com/v1/',
          timeout: 5000,
          headers: {'Authorization': '563492ad6f91700001000001508feadfb19843f8a908441cf08d33dd'}
        });

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status })
}

imageApiInstance.interceptors.response.use(
  (response) => response.data,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  },
)

// export default instance