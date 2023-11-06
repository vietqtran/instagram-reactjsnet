import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

interface ResponseData {
   // Define the structure of your response data here
   // For example: { id: number, text: string, ... }
}

const instance: AxiosInstance = axios.create({
   timeout: 3000000,
   baseURL: process.env.REACT_APP_URL_API,
});

instance.interceptors.response.use(
   (response: AxiosResponse<ResponseData>) => {
      return response;
   },
   (error: AxiosError) => {
      // Handle error
      console.error("Axios error:", error);
      return Promise.reject(error);
   }
);

export default instance;
