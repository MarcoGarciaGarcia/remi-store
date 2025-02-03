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
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProducto, IProductos } from "@/schemas/productos-schema"; // Asegúrate de importar Producto

const SerchProduct: React.FC = () => {
  const [products, setProducts] = useState<IProductos>();
  const [filteredProducts, setFilteredProducts] = useState<IProducto[]>([]); // Cambiado a Producto[]
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/getAllProductos`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && products.data) {
      const filtered = products.data.filter((product) =>
        product.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="sm:w-[320px] md:w-[600px] lg:w-[800px] ml-10 justify-center bg-white shadow-lg rounded-lg p-10">
      <Input
        type="text"
        variant={"" as never}
        aria-label="find"
        className="w-[500px] justify-start text-black font-sans"
        placeholder="Buscar administrativo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        startContent={
          <Search className="text-2xl text-gray-300 pointer-events-none flex-shrink-0 mr-2" />
        }
      />
      <Table className="md:w-[600px] -ml-4 justify-center">
        <TableHeader>
          <TableColumn className="px-6 py-3 border-b rounded-s-lg border-gray-200 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
            Nombre
          </TableColumn>
          <TableColumn className="px-6 py-3 border-b border-gray-200 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
            Código de barras
          </TableColumn>
          <TableColumn className="px-6 py-3 border-b rounded-e-lg border-gray-200 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider">
            Precio
          </TableColumn>
        </TableHeader>
        <TableBody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <TableRow key={product.id_producto}>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-primary-800">
                  {product.nombre_producto}
                </TableCell>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-primary-800">
                  {product.codigo_barras}
                </TableCell>
                <TableCell className="px-6 py-4 border-b border-gray-200 text-primary-800">
                  ${product.precio_unitario}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow key={0}>
              <TableCell className="px-6 py-4 border-b border-gray-200 text-center">
                -
              </TableCell>
              <TableCell className="px-6 py-4 border-b border-gray-200 text-center text-gray-400">
                No hay datos disponibles
              </TableCell>
              <TableCell className="px-6 py-4 border-b border-gray-200 text-center">
                -
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SerchProduct;