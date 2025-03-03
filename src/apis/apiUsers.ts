import axios from "axios";

let token: string | null = "";

if (typeof window !== "undefined") {
  token = sessionStorage.getItem("authToken");
}
// Función para transformar los nombres de los campos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformData = (data: any) => {
  return {
    id_usuario: data,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userDelete = async (data: any) => {
  console.log("token: " + data);
  try {
    const transformedData = transformData(data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/deleteUser`,
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
