import { useEffect, useState } from "react";
import { listarPacientes, } from "../services/service";
 import type { Paciente} from "../services/service";

export default function Pagina() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarPacientes()
      .then(data => setPacientes(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <ul>
        {pacientes.map(p => (
          <li key={p.id}>
            {p.id} — {p.nombres} anos
          </li>
        ))}
      </ul>
    </div>
  );
}


