import { z } from "zod";

// Definir el schema para el producto
export const ProductoSchema = z.object({
  nombre_producto: z.string().nonempty("El nombre del producto es requerido"), // Campo requerido y no vacío
  codigo_barras: z.string().nonempty("El código de barras es requerido"), // Campo requerido y no vacío
  categoria: z.string().nonempty("La categoría es requerida"), // Campo requerido y no vacío
  precio_unitario: z
    .number()
    .positive("El precio unitario debe ser un número positivo"), // Campo requerido y positivo
  precio_venta: z
    .number()
    .positive("El precio de venta debe ser un número positivo"), // Campo requerido y positivo
  stock: z
    .number()
    .int("El stock debe ser un número entero")
    .nonnegative("El stock no puede ser negativo"), // Campo requerido, entero y no negativo
  id_proveedor: z
    .number()
    .int("El ID del proveedor debe ser un número entero")
    .positive("El ID del proveedor debe ser positivo"), // Campo requerido, entero y positivo
  estado: z
    .number()
    .int("El estado debe ser un número entero")
    .min(0)
    .max(1, "El estado debe ser 0 o 1"), // Campo requerido, entero y debe ser 0 o 1
});

export type ProductoSchemaType = z.infer<typeof ProductoSchema>;
