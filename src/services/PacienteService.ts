import axios from "axios";

const API_URL = "https://localhost:4000/api/Paciente/";

export interface Paciente {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  email: string;
  telefonoCelular: string;
}

export const getPacientes = () => axios.get<Paciente[]>(`${API_URL}Lista`);

export const getPacienteById = (id: number) =>
  axios.get<Paciente>(`${API_URL}Obtener/${id}`);

export const createPaciente = (data: Paciente) =>
  axios.post(`${API_URL}Nuevo`, data);

export const updatePaciente = (data: Paciente) =>
  axios.put(`${API_URL}Editar`, data);

export const deletePaciente = (id: number) =>
  axios.delete(`${API_URL}Eliminar/${id}`);
