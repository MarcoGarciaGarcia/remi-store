import axios from "axios";

let token: string | null = "";

if (typeof window !== "undefined") {
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

interface IProductoRegister {
  nombre_producto: string; // Campo requerido y no vacío
  codigo_barras: string; // Campo requerido y no vacío
  categoria: string; // Campo requerido y no vacío
  precio_unitario: string; // Debe ser un número válido (en formato string)
  precio_venta: string; // Debe ser un número válido (en formato string)
  stock: string; // Debe ser un número válido (en formato string)
  id_proveedor: string; // Campo de tipo string
  estado: number; // Número entero, debe ser 0 o 1
}

const transformDataProducts = (data: IProductoRegister) => {
  return {
    nombre_producto: data.nombre_producto,
    codigo_barras: data.codigo_barras,
    categoria: data.categoria,
    precio_unitario: parseInt(data.precio_unitario.toString(), 10),
    precio_venta: parseInt(data.precio_venta.toString(), 10),
    stock: parseInt(data.stock.toString(), 10),
    id_proveedor: parseInt(data.id_proveedor.toString(), 10),
    estado: data.estado,
  };
};

const transformDataDeleteProducts = (data: number) => {
  return {
    id_producto: data,
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

export const productsDelete = async (data: number) => {
  console.log("token: " + data);
  try {
    const transformedData = transformDataDeleteProducts(data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/deleteProducto`,
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
