import axios from "axios";

const api = axios.create({
  baseURL: (import.meta.env.VITE_DJANGO_APP_URL as string | undefined)?.trim(),
});

export default api;
