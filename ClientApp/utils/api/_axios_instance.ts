import axios, { AxiosError } from "axios";

const instance = axios.create(
    {
        timeout: 300000,
        baseURL: process.env[ 'REACT_APP_API_URL' ]
    }
)

instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error: AxiosError) => {
        console.log(error.response?.data)
    }
)

export default instance