import axios from "axios";

export const api = axios.create({
  baseURL: "https://cbf616740ae6.ngrok-free.app/api/Paciente",
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});
