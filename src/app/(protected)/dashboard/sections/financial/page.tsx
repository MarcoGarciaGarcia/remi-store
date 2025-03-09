"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { CheckIcon, Search, X } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface DetalleVenta {
  nombre_producto: string;
  precio_unitario: number;
  id_proveedor: number;
  nombre_proveedor: string;
  cantidad: number;
  inversion: number;
  venta: number;
  total_neto_producto: number;
}

interface Venta {
  id_ventas: number;
  nombre_usuario: string;
  fecha_venta: string;
  inversion_grupo: number;
  total_bruto_grupo: number;
  total_neto_grupo: number;
  detalles: DetalleVenta[];
}

interface RespuestaVentas {
  status: number;
  message: string;
  inversion_total: number;
  total_venta: number;
  ganancia: number;
  ventas: Venta[];
}

const DashboardPage: FC = () => {
  const [products, setProducts] = useState<Venta[]>([]);
  const [info, setInfo] = useState<RespuestaVentas>();
  const [filteredProducts, setFilteredProducts] = useState<Venta[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [global, setGlobal] = useState(false);
  const [iD, setId] = useState<number | undefined>(undefined);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [registros, setRegistros] = useState<DetalleVenta[]>([]);

  useEffect(() => {
    const dataT = {
      fecha_inicio: "",
      fecha_fin: "",
    };
    const token = sessionStorage.getItem("authToken");
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/getAllVentas`,
          dataT,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data);
        setInfo(response.data);

        // Verifica que la respuesta es un array antes de asignarlo al estado
        if (Array.isArray(response.data.ventas)) {
          setProducts(response.data.ventas);
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

  const handleDetails = (id: number): void => {
    if (!products || products.length === 0) {
      console.log("Products no está cargado aún.");
      return;
    }

    setId(id);
    const num = products.find((user) => user.id_ventas === id)?.detalles ?? [];
    setRegistros(num);
  };

  return (
    <section className="w-auto h-auto">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="bg-white shadow-2xl rounded-xl fixed top-24 h-auto p-2 -mt-0"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-lg font-bold text-secondary-900 text-center font-sans">
                  Detalles de la compra
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-full grid justify-start items-center">
                  <p className="text-black">
                    Nombre:{" "}
                    {
                      products?.find((user) => user.id_ventas === iD)
                        ?.nombre_usuario
                    }
                  </p>
                  <br></br>
                  <div className="h-96 w-96 rounded-xl border-1 border-solid border-gray-300 p-5 overflow-y-auto">
                    {registros.map((registro) => (
                      <div
                        key={registro.nombre_producto + registro.id_proveedor}
                        className="shadow-lg rounded-lg my-5 px-10 py-5"
                      >
                        <p className="text-black">
                          Producto: {registro.nombre_producto}
                        </p>
                        <p className="text-black">
                          Precio Unitario: {registro.precio_unitario}
                        </p>
                        <p className="text-black">
                          Proveedor: {registro.nombre_proveedor}
                        </p>
                        <p className="text-black">
                          Cantidad: {registro.cantidad}
                        </p>
                        <p className="text-black">
                          Inversión: {registro.inversion}
                        </p>
                        <p className="text-black">Venta: {registro.venta}</p>
                        <p className="text-black">
                          Total Neto Producto: {registro.total_neto_producto}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-black text-white w-20 rounded-lg"
                  color={"0" as never}
                  onPress={onClose}
                >
                  {" "}
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-black lg:text-4xl text-2xl font-bold font-sans mb-5 lg:mt-0 mt-16">
            Gestión de Ventas
          </h1>
        </div>
        <div className="w-full lg:pl-10 pl-0 justify-center">
          <div className="lg:p-10 p-4 py-8 lg:w-[650px] w-full bg-white shadow-lg rounded-lg lg:mx-16 mx-0">
            <div className="mb-5">
              <Button
                className={`rounded-s-lg border-gray-200 border-1 border-solid ${
                  global === false
                    ? "bg-black text-white"
                    : "text-black bg-white"
                }`}
                onPress={() => setGlobal(false)}
              >
                Ventas
              </Button>
              <Button
                className={`rounded-r-lg border-gray-200 border-1 border-solid ${
                  global === true
                    ? "bg-black text-white"
                    : "text-black bg-white"
                }`}
                onPress={() => setGlobal(true)}
              >
                Información General
              </Button>
            </div>
            {global ? (
              <div className="grid w-full mt-8">
                <p className="font-bold text-black text-xl text-center mb-4">
                  {info?.message}
                </p>
                <div className="flex my-2">
                  <p className="font-bold text-black text-md">
                    Inversión Total: &nbsp;
                  </p>
                  <p className="text-black">$ {info?.inversion_total}</p>
                </div>
                <div className="flex my-2">
                  <p className="font-bold text-black text-md">Total de Venta:&nbsp; </p>
                  <p className="text-black">$ {info?.total_venta}</p>
                </div>
                <div className="flex my-2">
                  <p className="font-bold text-black text-md">
                    Total de la ganancia:&nbsp;{" "}
                  </p>
                  <p className="text-black">$ {info?.ganancia}</p>
                </div>
              </div>
            ) : (
              <>
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
                    <TableColumn className="lg:px-6 px-0 py-3 rounded-s-lg bg-black text-center lg:text-xs text-[10px] font-semibold text-white uppercase tracking-wider">
                      Empleado
                    </TableColumn>
                    <TableColumn className="lg:px-6 px-0 py-3 bg-black text-center lg:text-xs text-[10px] font-semibold text-white uppercase tracking-wider">
                      Fecha
                    </TableColumn>
                    <TableColumn className="lg:px-6 px-0 py-3 bg-black text-center lg:text-xs text-[10px] font-semibold text-white uppercase tracking-wider">
                      Total
                    </TableColumn>
                    <TableColumn className="lg:px-6 px-0 py-3 rounded-e-lg bg-black text-center lg:text-xs text-[10px] font-semibold text-white uppercase tracking-wider">
                      Opciones
                    </TableColumn>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((produc) => (
                        <TableRow key={produc.id_ventas}>
                          <TableCell className="lg:px-6 px-0 py-4 text-black lg:text-xs text-[12px]">
                            {produc.nombre_usuario}
                          </TableCell>
                          <TableCell className="lg:px-6 px-0 py-4 text-black lg:text-xs text-[12px]">
                            {produc.fecha_venta}
                          </TableCell>
                          <TableCell className="lg:px-6 px-0 py-4 text-black text-center lg:text-xs text-[12px]">
                            ${produc.total_bruto_grupo}
                          </TableCell>
                          <TableCell className="lg:px-6 px-0 py-4 text-black lg:text-xs text-[12px]">
                            <Button
                              color={"0" as never}
                              key="see"
                              className="text-black font-sans"
                              onPress={() => {
                                handleDetails(produc.id_ventas);
                                onOpen();
                              }}
                            >
                              + Detalle
                            </Button>
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
