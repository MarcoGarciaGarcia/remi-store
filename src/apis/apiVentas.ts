import axios from "axios";

const token = sessionStorage.getItem("authToken");
// Función para transformar los nombres de los campos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformData = (data: any) => {
  return {
    fecha_inicio: `${data.fecha_inicio} ${data.hora_inicio}:00`,
    fecha_fin: `${data.fecha_fin} ${data.hora_fin}:00`,
  };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllVentas = async (data: any) => {
  try {
    const transformedData = transformData(data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/getAllVentas`,
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
    console.error("Error get Ventas:", error);
    throw error;
  }
};
