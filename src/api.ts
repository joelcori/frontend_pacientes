import axios from "axios";

export const api = axios.create({
  baseURL: "http://backendpacientesapi.somee.com/api/Paciente",
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});
