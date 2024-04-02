import axios from "axios";

const app = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});


export default app;
