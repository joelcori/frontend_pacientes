import type { Paciente } from "../services/PacienteService";

interface Props {
  pacientes: Paciente[];
  onEdit: (p: Paciente) => void;
  onDelete: (id: number) => void;
}

export default function PacienteList({ pacientes, onEdit, onDelete }: Props) {
  return (
    <table className="min-w-full bg-white border rounded-xl overflow-hidden shadow">
        <thead className="bg-gray-100">
            <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Nombres</th>
            <th className="p-3 text-left">Apellidos</th>
            <th className="p-3 text-left">Fecha Nacimiento</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Teléfono</th>
            <th className="p-3 text-center">Acciones</th>
            </tr>
        </thead>

        <tbody>
            {pacientes.length === 0 && (
            <tr>
                <td colSpan={7} className="text-center p-4 text-gray-500">
                No hay pacientes registrados
                </td>
            </tr>
            )}

            {pacientes.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.nombres}</td>
                <td className="p-3">{p.apellidos}</td>

                <td className="p-3">
                {new Date(p.fechaNacimiento).toLocaleDateString("es-ES")}
                </td>

                <td className="p-3">{p.email}</td>
                <td className="p-3">{p.telefonoCelular}</td>

                <td className="p-3 text-center">
                <button
                    className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                    onClick={() => onEdit(p)}
                >
                    Editar
                </button>

                <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => onDelete(p.id)}
                >
                    Eliminar
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
  );
}
