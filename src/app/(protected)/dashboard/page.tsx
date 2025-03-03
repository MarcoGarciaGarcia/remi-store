"use client";
import { getAllProviders } from "@/apis/api-proveedores";
import { IProveedor } from "@/interfaces/proveedores";
import {
  Card,
  CardBody,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { CircleDollarSign, HandCoins, ShoppingCart } from "lucide-react";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const DashboardPage: NextPage = () => {
  const [name, setName] = useState("");
  const targetValues = [30, 556, 112.2]; // Array con los valores a animar
  const [currentValues, setCurrentValues] = useState(
    Array(targetValues.length).fill(0)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(sessionStorage.getItem("userName") ?? "");
    }
  }, []);

  useEffect(() => {
    const duration = 4000; // Duración total de la animación en milisegundos (8 segundos)
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Progreso de la animación (0 a 1)

      const newValues = targetValues.map((targetValue) => {
        return Math.round(targetValue * progress); // Redondeamos el valor para no mostrar decimales
      });

      setCurrentValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continúa la animación hasta completar el 100%
      }
    };

    requestAnimationFrame(animate); // Inicia la animación

    return () => {};
  }, []);

  const [proveedor, setProveedor] = useState<IProveedor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProviders();
        setProveedor(response.data.data);
      } catch (error) {
        console.error("Error get providers:", error);
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full min-h-screen bg-transparent px-10 rounded-lg my-10">
      <div className="relative z-10 grid justify-center">
        <div className="flex justify-center relative h-20 items-center">
          <div className="absolute inset-0 bg-transparent opacity-100"></div>
          <h1 className="text-black lg:text-4xl text-xl font-bold font-sans animate-typing z-30">
            Bienvenido {name}
          </h1>
        </div>

        <div className="lg:my-12 mt-4 lg:flex grid gap-14 lg:px-0 px-4">
          <Card className="group lg:w-[350px] w-full h-[180px] shadow-xl rounded-2xl hover:scale-105 transition">
            <div className="group-hover:opacity-100 transition absolute inset-0 bg-white opacity-100 backdrop-blur-lg rounded-lg"></div>
            <CardBody className="h-full">
              <div className="flex w-full h-full justify-center items-center">
                <div className="grid justify-center items-center">
                  <p className="group-hover:text-primary-900 font-bold lg:text-xl text-md ml-4 lg:ml:0 text-[#212529] mb-3">
                    Total de ventas de hoy
                  </p>
                  <p className="group-hover:text-primary-900 text-[#212529] text-center text-5xl font-semibold">
                    {currentValues[0]}
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100px]">
                  <ShoppingCart
                    size={50}
                    className="group-hover:text-primary-900 text-[#212529]"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="group lg:w-[350px] w-full h-[180px] shadow-xl rounded-2xl hover:scale-105 transition">
            <div className="group-hover:opacity-100 group-hover:bg-white absolute inset-0 bg-white opacity-100 backdrop-blur-lg rounded-lg"></div>
            <CardBody className="h-full">
              <div className="flex w-full h-full justify-center items-center">
                <div className="grid justify-center items-center">
                  <p className="group-hover:text-primary-900 font-bold text-md text-[#212529] text-center mb-3 px-5">
                    Total de ventas de hoy en efectivo
                  </p>
                  <p className="group-hover:text-primary-900 text-[#212529] text-center text-5xl font-semibold">
                    ${currentValues[1]}
                  </p>
                </div>
                <div className="flex items-center justify-center w-[150px]">
                  <CircleDollarSign
                    size={50}
                    className="group-hover:text-primary-900 text-[#212529]"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="group lg:w-[350px] w-full h-[180px] shadow-xl rounded-2xl hover:scale-105 transition-all">
            <div className="group-hover:opacity-100 absolute inset-0 bg-white opacity-100 backdrop-blur-lg rounded-lg"></div>
            <CardBody className="h-full">
              <div className="flex w-full h-full justify-center items-center p-5">
                <div className="grid justify-center items-center">
                  <p className="group-hover:text-primary-900 font-bold text-md text-[#212529] text-center mb-3">
                    Utilidades de hoy en efectivo
                  </p>
                  <p className="group-hover:text-primary-900 text-[#212529] text-center text-5xl font-semibold">
                    ${currentValues[2]}
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100px]">
                  <HandCoins
                    size={50}
                    className="group-hover:text-primary-900 text-[#212529]"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="rounded-lg justify-items-center grid py-8 relative shadow-lg lg:mt-0 mt-12">
          <div className="absolute inset-0 bg-white opacity-100 backdrop-blur-lg rounded-lg"></div>
          <p className="text-black font-semibold text-2xl text-center z-30">
            Proveedores de hoy
          </p>
          <div className="flex rounded-lg items-center justify-center my-10 scroll-m-5">
            <Table
              removeWrapper
              aria-label="Example static collection table"
              className="lg:w-[800px] w-full rounded-lg"
            >
              <TableHeader className="flex justify-center items-center rounded-lg">
                <TableColumn className="bg-pink-100 rounded-s-lg">
                  <p className="text-black text-center">Nombre</p>
                </TableColumn>
                <TableColumn className="bg-pink-100 justify-center items-center rounded-e-lg">
                  <p className="text-black text-center">Contacto</p>
                </TableColumn>
              </TableHeader>
              <TableBody>
                {proveedor.length > 0 ? (
                  proveedor.map((proveedor) => (
                    <TableRow key={proveedor.id_proveedor}>
                      <TableCell className="text-[#212529] font-sans text-center">
                        {proveedor.nombre_proveedor}
                      </TableCell>
                      <TableCell className="text-[#212529] font-sans text-center">
                        {proveedor.telefono}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow key="1">
                    <TableCell className="text-[#212529] font-sans text-center">
                      Ninguno
                    </TableCell>
                    <TableCell className="text-[#212529] font-sans text-center">
                      Ninguno
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
