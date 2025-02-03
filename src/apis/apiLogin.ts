// utils/apiService.ts
import axios from "axios";

// Función para transformar los nombres de los campos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformData = (data: any) => {
  return {
    email: data.user,
    password: data.password,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tryLogin = async (data: any) => {
  try {
    const transformedData = transformData(data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      transformedData,
      {
        headers: { "Content-Type": "application/json" },
        params: {},
      }
    );
    return response;
  } catch (error) {
    console.error("Error trying login:", error);
    throw error;
  }
};
