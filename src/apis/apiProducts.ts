// utils/apiService.ts
import axios from "axios";

const token = sessionStorage.getItem("token");
// Función para transformar los nombres de los campos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformData = (data: any) => {
  return {
    name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation,
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
