import { z } from 'zod'

export const LoginSchema = z.object({
  user: z
    .string()
    .min(6, {
      message: 'El usuario es un campo requerido'
    })
    .max(30, { message: 'El usuario no debe tener más de 30 caracteres' })
    .trim(),
  password: z.string().min(2, {
    message: 'La contraseña es un campo requerido'
  })
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
