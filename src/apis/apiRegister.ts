// utils/apiService.ts
import { IProducto } from "@/schemas/productos-schema";
import axios from "axios";

let token: string | null = ''

if(typeof window !== "undefined"){
  token = sessionStorage.getItem("authToken");
}
// Función para transformar los nombres de los campos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformData = (data: any) => {
  return {
    name: data.name,
    email: data.email,
    password: data.password,
    rol: parseInt(data.rol, 10),
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const workersRegister = async (data: any) => {
  console.log("token: " + data);
  try {
    const transformedData = transformData(data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      transformedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error trying Register:", error);
    throw error;
  }
};

const transformDataProducts = (data: IProducto) => {
  return {
    nombre_producto: data.nombre_producto,
    codigo_barras: data.codigo_barras,
    categoria: data.categoria,
    precio_unitario: data.precio_unitario,
    precio_venta: data.precio_venta,
    stock: data.stock,
    id_proveedor: data.proveedor,
    estado: data.estado,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productsRegister = async (data: any) => {
  console.log("token: " + data);
  try {
    const transformedData = transformDataProducts(data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/newProducto`,
      transformedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error trying Register:", error);
    throw error;
  }
};

export const getWorkers = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/getAllUsers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error trying Register:", error);
    throw error;
  }
};
