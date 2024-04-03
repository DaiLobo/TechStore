import axios from "axios";

const app = axios.create({
  baseURL: "https://techstore-api-dr.vercel.app",
});

export default app;
