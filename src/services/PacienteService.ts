import { api } from "../api";

export interface Paciente {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  email: string;
  telefonoCelular: string;
}

export const getPacientes = () =>
  api.get("/Lista");

export const getPacienteById = (id: number) =>
  api.get<Paciente>(`/Obtener/${id}`);

export const createPaciente = (data: Omit<Paciente, "id">) =>
  api.post("/Nuevo", data);

export const updatePaciente = (data: Paciente) =>
  api.put("/Editar", data);

export const deletePaciente = (id: number) =>
  api.delete(`/Eliminar/${id}`);
