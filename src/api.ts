import axios from "axios";

export const api = axios.create({
  baseURL: "https://ba53e78792a3.ngrok-free.app/api/Paciente",
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});
