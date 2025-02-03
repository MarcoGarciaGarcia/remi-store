import { z } from "zod";

export const FechaSchema = z
  .object({
    fecha_inicio: z.string().min(1, "La fecha de inicio es un campo requerido"),
    hora_inicio: z.string().min(1, "La hora de inicio es un campo requerido"),
    fecha_fin: z.string().min(1, "La fecha de fin es un campo requerido"),
    hora_fin: z.string().min(1, "La hora de fin es un campo requerido"),
  })

export type FechaSchemaType = z.infer<typeof FechaSchema>;
