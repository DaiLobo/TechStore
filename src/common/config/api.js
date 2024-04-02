import axios from "axios";

const app = axios.create({
  baseURL: "https://tech-store-dr.vercel.app",
});

export default app;
