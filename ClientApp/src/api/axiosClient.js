import axios from "axios"

const instance = axios.create({
   timeout: 3000000,
   baseURL: process.env.REACT_APP_URL_API,
})

instance.interceptors.response.use(
   (response) => {
      return response.data
   },
   (error) => alert(error)
)

export default instance
