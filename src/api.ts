import axios from "axios";

export const api = axios.create({
  baseURL: "https://backendpacientesapi.somee.com/api/Paciente/Lista/api/Paciente",
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});
