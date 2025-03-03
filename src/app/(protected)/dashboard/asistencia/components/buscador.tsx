"use client";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { CheckIcon, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

interface Registro {
  id_registro: number;
  tipo: string; // Puede ser "entrada" o "salida"
  fecha_hora: string;
  id_usuario: number;
  nombre_usuario: string;
}

const SerchCheck: React.FC = () => {
  const [products, setProducts] = useState<Registro[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Registro[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const data = {
      fecha_inicio: "",
      fecha_fin: "",
    };
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/getAllRegistros`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Verifica que la respuesta es un array antes de asignarlo al estado
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error(
            "La respuesta de la API no es un array:",
            response.data
          );
          setProducts([]); // asigna un array vacío en caso de error
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setProducts([]); // asigna un array vacío en caso de error
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((products) =>
      products.nombre_usuario.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="w-full lg:pl-10 pl-0 justify-center">
      <div className="lg:p-10 p-4 bg-white shadow-lg rounded-lg lg:mx-16 mx-4">
        <Input
          type="text"
          variant={"" as never}
          aria-label="find"
          className="lg:w-96 w-full justify-start rounded-lg shadow-md bg-white text-black mb-3"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          startContent={
            <Search className="text-2xl text-gray-300 pointer-events-none flex-shrink-0 mr-2" />
          }
        />
        <Table className="lg:w-auto w-full lg:-ml-4 -ml-0 justify-center">
          <TableHeader>
            <TableColumn className="lg:px-6 px-0 py-3 rounded-s-lg bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
              Nombre
            </TableColumn>
            <TableColumn className="lg:px-6 px-0 py-3 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
              Registro
            </TableColumn>
            <TableColumn className="lg:px-6 px-0 py-3 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
              Horario
            </TableColumn>
            <TableColumn className="lg:px-6 px-0 py-3 rounded-e-lg bg-black text-center pr-4 text-xs font-semibold text-white uppercase tracking-wider">
              Status
            </TableColumn>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((produc) => (
                <TableRow key={produc.id_registro}>
                  <TableCell className="lg:px-6 px-0 py-4 text-black">
                    {produc.nombre_usuario}
                  </TableCell>
                  <TableCell className="lg:px-6 px-0 py-4 text-black">
                    {produc.tipo}
                  </TableCell>
                  <TableCell className="lg:px-6 px-0 py-4 text-[10px] lg:text-md text-black">
                    ${produc.fecha_hora}
                  </TableCell>
                  <TableCell className="lg:px-6 px-0 py-4 text-center pl-4 lg:pl-0 text-black">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow key={0}>
                <TableCell className="lg:px-6 px-0 py-4 border-b border-gray-200 text-center">
                  -
                </TableCell>
                <TableCell className="lg:px-6 px-0 py-4 border-b border-gray-200 text-center text-gray-500">
                  No hay datos disponibles
                </TableCell>
                <TableCell className="lg:px-6 px-0 py-4 border-b border-gray-200 text-center">
                  -
                </TableCell>
                <TableCell className="lg:px-6 px-0 py-4 border-b border-gray-200 text-center">
                  <CheckIcon className="text-pink-300" />
                  <X className="text-black"></X>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default SerchCheck;
