import axios from "axios";

const token = sessionStorage.getItem("authToken");

export const getAllProviders = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getAllProveedores`,
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