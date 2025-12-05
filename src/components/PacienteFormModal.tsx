import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { Paciente } from "../services/PacienteService";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Paciente) => void;
  initialData?: Paciente | null;
}

export default function PacienteFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Paciente>();

  useEffect(() => {
    if (initialData) {
      reset({
        id: initialData.id,
        nombres: initialData.nombres,
        apellidos: initialData.apellidos,
        fechaNacimiento: initialData.fechaNacimiento.split("T")[0],
        email: initialData.email,
        telefonoCelular: initialData.telefonoCelular,
      });
    } else {
      reset({
        id: 0,
        nombres: "",
        apellidos: "",
        fechaNacimiento: "",
        email: "",
        telefonoCelular: "",
      });
    }
  }, [initialData, reset]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-96 shadow-xl">

        <h2 className="text-xl font-semibold mb-4">
          {initialData ? "Editar Paciente" : "Nuevo Paciente"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

          {/* ID */}
          <div>
            <input
              type="number"
              placeholder="ID"
              className="border p-2 w-full rounded"
              disabled={!!initialData}
              {...register("id", { required: "El ID es obligatorio" })}
            />
            {errors.id && (
              <p className="text-red-500 text-sm">{errors.id.message}</p>
            )}
          </div>

          {/* Nombres */}
          <div>
            <input
              placeholder="Nombres"
              className="border p-2 w-full rounded"
              {...register("nombres", { required: "Los nombres son obligatorios" })}
            />
            {errors.nombres && (
              <p className="text-red-500 text-sm">{errors.nombres.message}</p>
            )}
          </div>

          {/* Apellidos */}
          <div>
            <input
              placeholder="Apellidos"
              className="border p-2 w-full rounded"
              {...register("apellidos", { required: "Los apellidos son obligatorios" })}
            />
            {errors.apellidos && (
              <p className="text-red-500 text-sm">{errors.apellidos.message}</p>
            )}
          </div>

          {/* Fecha */}
          <div>
            <input
              type="date"
              className="border p-2 w-full rounded"
              {...register("fechaNacimiento", { required: "La fecha es obligatoria" })}
            />
            {errors.fechaNacimiento && (
              <p className="text-red-500 text-sm">{errors.fechaNacimiento.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              placeholder="Email"
              className="border p-2 w-full rounded"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <input
              placeholder="Teléfono (9 dígitos)"
              className="border p-2 w-full rounded"
              maxLength={9}
              {...register("telefonoCelular", {
                required: "El teléfono es obligatorio",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Debe tener exactamente 9 dígitos numéricos",
                },
              })}
            />
            {errors.telefonoCelular && (
              <p className="text-red-500 text-sm">{errors.telefonoCelular.message}</p>
            )}
          </div>

          {/* BOTONES */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              {initialData ? "Actualizar" : "Crear"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
