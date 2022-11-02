import axios from "axios";
export const axiosInstance = axios.create({
//  baseURL: "https://dummyjson.com",
baseURL: "http://localhost:8000/",
 });
axiosInstance.interceptors.request.use(

   function (config)
   {
       //config.headers["a"]="dsdsd"
       return config;
   }
)

axiosInstance.interceptors.response.use(

   function(response)
   {
       return response;
   }
)