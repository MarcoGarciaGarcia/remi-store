import { z } from "zod";

export const WorkersSchema = z
  .object({
    name: z
      .string()
      .min(1, {
        message: "El usuario es un campo requerido",
      })
      .max(30, { message: "El usuario no debe tener más de 30 caracteres" })
      .trim(),
    email: z.string(),
    password: z.string().min(6, {
      message: "La contraseña es un campo requerido",
    }),
    password_confirmation: z.string(),
    rol: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Las contraseñas no coinciden",
    path: ["password_confirmation"],
  });

export type WorkersSchemaType = z.infer<typeof WorkersSchema>;
