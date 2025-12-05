import { useState, useEffect } from "react";
import {
  getPacientes,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
} from "../services/PacienteService";

import SearchBar from "../components/SearchBar";
import PacienteList from "../components/PacienteList";
import PacienteFormModal from "../components/PacienteFormModal";
import Pagination from "../components/Pagination";

import type { Paciente } from "../services/PacienteService";

export default function PacienteCRUD() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [filtered, setFiltered] = useState<Paciente[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState<Paciente | null>(null);

  // Paginación
  const [page, setPage] = useState(1);
  const perPage = 5;

  const load = () =>
    getPacientes().then((res) => {
      setPacientes(res.data);
      setFiltered(res.data);
    });

  useEffect(() => {
    load();
  }, []);

  const onSearchId = (id: number) =>
    getPacienteById(id).then((res) => setFiltered([res.data]));

  const onSearchName = (term: string) =>
    setFiltered(
      pacientes.filter((p) =>
        p.nombres.toLowerCase().includes(term.toLowerCase())
      )
    );

  const onReset = () => setFiltered(pacientes);

  const handleSave = (data: Paciente) => {
  if (editing) {
    updatePaciente(data).then(load);
  } else {
    createPaciente(data).then(load);
  }

setOpenModal(false);
setEditing(null);
};

  const handleDelete = (id: number) =>
    confirm("¿Eliminar paciente?") && deletePaciente(id).then(load);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Gestión de Pacientes</h1>

      <SearchBar onSearchId={onSearchId} onSearchName={onSearchName} onReset={onReset} />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => setOpenModal(true)}
      >
        + Nuevo Paciente
      </button>

      <PacienteList pacientes={paginated} onEdit={setEditing} onDelete={handleDelete} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <PacienteFormModal
        open={openModal || editing !== null}
        onClose={() => {
          setOpenModal(false);
          setEditing(null);
        }}
        onSubmit={handleSave}
        initialData={editing}
      />
    </div>
  );
}
