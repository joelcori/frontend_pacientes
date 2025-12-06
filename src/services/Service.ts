export interface Paciente {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  email: string;
  telefonoCelular: string;
}

export async function listarPacientes(): Promise<Paciente[]> {
  const response = await fetch(
    "https://cbf616740ae6.ngrok-free.app/api/Paciente/Lista",
    {
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar pacientes");
  }

  return response.json();
}
