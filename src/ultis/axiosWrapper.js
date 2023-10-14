import axios from "axios";
import { getCookie, deleteCookie } from 'cookies-next';
import { useSelector } from "react-redux";

const defaultOptions = {
  baseURL: 'https://eparking.azurewebsites.net/',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin" : '*',
  },
}



const axiosWrapper = axios.create(defaultOptions);

// Set the AUTH token for any request
axiosWrapper.interceptors.request.use(async (config) => {

  try {
    const token = getCookie('token')
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    // Handle errors if any
    console.log(error);
    return config;
  }
});

axiosWrapper.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log({ error });
    if (error?.response?.status === 401) {
      // You need to replace the message handling code with your preferred library
      // Example using alert:
      alert('Your session has expired!');

      deleteCookie('token'); // You need to define deleteCookie
      // localStorage.setItem('temp-redirect', location.pathname); // Make sure location is defined
      // router.push('/'); // Make sure router is defined
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosWrapper;