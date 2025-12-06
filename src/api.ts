import axios from "axios";

export const api = axios.create({
  baseURL: "https://9cd9549c9d02.ngrok-free.app/api/Paciente",
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});
