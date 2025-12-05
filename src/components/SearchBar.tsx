import { useState } from "react";

interface Props {
  onSearchId: (id: number) => void;
  onSearchName: (name: string) => void;
  onReset: () => void;
}

export default function SearchBar({ onSearchId, onSearchName, onReset }: Props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">

      {/* BUSCAR POR ID */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Buscar por ID"
          className="border p-2 rounded w-40"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          className="bg-gray-800 text-white px-4 rounded"
          onClick={() => id && onSearchId(Number(id))}
        >
          Buscar
        </button>
      </div>

      {/* BUSCAR POR NOMBRE */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="border p-2 rounded w-40"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            onSearchName(e.target.value);
          }}
        />
      </div>

      {/* RESET */}
      <button onClick={onReset} className="border px-4 rounded">
        Reset
      </button>

    </div>
  );
}
