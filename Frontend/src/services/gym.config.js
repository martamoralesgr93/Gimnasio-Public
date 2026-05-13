import axios from 'axios';
import { updateToken } from '../utils';




export const extraConfig = () => {
return (axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "/api/v1",
  headers: {
      Accept: "application/json",
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization:`Bearer ${updateToken()}`
  },
  timeout: 60000,
}))
}