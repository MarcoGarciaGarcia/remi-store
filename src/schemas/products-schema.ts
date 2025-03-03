import { z } from "zod";

// Definir el schema para el producto
export const ProductoSchema = z.object({
  nombre_producto: z.string().nonempty("El nombre del producto es requerido"), // Campo requerido y no vacío
  codigo_barras: z.string().nonempty("El código de barras es requerido"), // Campo requerido y no vacío
  categoria: z.string().nonempty("La categoría es requerida"), // Campo requerido y no vacío
  precio_unitario: z.string().regex(/^\d*\.?\d+$/, {
    message: "El precio unitario debe ser un número válido.",
  }),
  precio_venta: z.string().regex(/^\d*\.?\d+$/, {
    message: "El precio de venta debe ser un número válido.",
  }),
  stock: z.string().regex(/^\d*\.?\d+$/, {
    message: "El stock debe ser un número válido.",
  }),
  id_proveedor: z.string(),
  estado: z
    .number()
    .int("El estado debe ser un número entero")
    .min(0)
    .max(1, "El estado debe ser 0 o 1"), // Campo requerido, entero y debe ser 0 o 1
});

export type ProductoSchemaType = z.infer<typeof ProductoSchema>;
