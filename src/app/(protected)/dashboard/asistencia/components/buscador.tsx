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

interface Producto {
  id_producto: number;
  nombre_producto: string;
  codigo_barras: string;
  precio_unitario: string;
}

const SerchCheck: React.FC = () => {
  const [products, setProducts] = useState<Producto[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Producto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://192.168.210.229:8000/api/getAllProductos",
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
      products.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="w-full pl-10 justify-center">
      <div className="p-10 bg-white shadow-lg rounded-lg mx-16">
        <Input
          type="text"
          variant={"" as never}
          aria-label="find"
          className="w-96 justify-start rounded-lg shadow-md bg-white text-black mb-3"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          startContent={
            <Search className="text-2xl text-gray-300 pointer-events-none flex-shrink-0 mr-2" />
          }
        />
        <Table className="w-auto -ml-4 justify-center">
          <TableHeader>
            <TableColumn className="px-6 py-3 rounded-s-lg bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
              Día
            </TableColumn>
            <TableColumn className="px-6 py-3 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
              Hora de entrada
            </TableColumn>
            <TableColumn className="px-6 py-3 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
              Hora de salida
            </TableColumn>
            <TableColumn className="px-6 py-3 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
              Comentario
            </TableColumn>
            <TableColumn className="px-6 py-3 rounded-e-lg bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
              Status
            </TableColumn>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((produc) => (
                <TableRow key={produc.id_producto}>
                  <TableCell className="px-6 py-4 text-black">
                    {produc.nombre_producto}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-black">
                    {produc.codigo_barras}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-black">
                    ${produc.precio_unitario}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-black">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow key={0}>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-center">
                  -
                </TableCell>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-center">
                  -
                </TableCell>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-center text-gray-500">
                  No hay datos disponibles
                </TableCell>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-center">
                  -
                </TableCell>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-center">
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
