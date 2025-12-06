import axios from "axios";

export const api = axios.create({
  baseURL: "https://dca5e34cc783.ngrok-free.app/api/Paciente",
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});
