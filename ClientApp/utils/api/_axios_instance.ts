import axios, { AxiosError } from 'axios'

const instance = axios.create({
   timeout: 300000,
   baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://localhost:5125/api/v1/'
})

instance.interceptors.response.use(
   (response) => {
      return response.data
   },
   (error: AxiosError) => {
      console.log(error.response?.data)
   }
)

export default instance
