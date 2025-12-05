interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="flex gap-4 justify-center mt-4">

      <button
        className="border px-4 py-1 rounded disabled:opacity-40"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Anterior
      </button>

      <span className="text-gray-700">
        Página {currentPage} / {totalPages}
      </span>

      <button
        className="border px-4 py-1 rounded disabled:opacity-40"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente →
      </button>

    </div>
  );
}
