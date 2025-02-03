"use client";
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
  const name = sessionStorage.getItem("userName");
  const targetValues = [30, 556, 112.2]; // Array con los valores a animar
  const [currentValues, setCurrentValues] = useState(
    Array(targetValues.length).fill(0)
  );

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

    return () => {
      // Limpiar recursos si fuera necesario
    };
  }, []);

  return (
    <section className="w-full h-screen px-10 rounded-lg my-10">
      <div className="relative z-10 grid justify-center">
        <div className="flex justify-center relative h-20 items-center">
          <div className="absolute inset-0 bg-transparent opacity-100"></div>
          <h1 className="text-black text-4xl font-bold font-sans animate-typing z-30">
            Bienvenido {name}
          </h1>
        </div>

        <div className="my-10 flex gap-14">
          <Card className="group w-[350px] h-[180px] shadow-xl rounded-2xl hover:scale-105 transition">
            <div className="group-hover:opacity-100 transition absolute inset-0 bg-white opacity-100 backdrop-blur-lg rounded-lg"></div>
            <CardBody className="h-full">
              <div className="flex w-full h-full justify-center items-center">
                <div className="grid justify-center items-center">
                  <p className="group-hover:text-primary-900 font-bold text-xl text-[#212529] mb-3">
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
          <Card className="group w-[350px] h-[180px] shadow-xl rounded-2xl hover:scale-105 transition">
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
          <Card className="group w-[350px] h-[180px] shadow-xl rounded-2xl hover:scale-105">
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

        <div className="rounded-lg justify-items-center grid py-8 relative shadow-lg">
          <div className="absolute inset-0 bg-white opacity-100 backdrop-blur-lg rounded-lg"></div>
          <p className="text-black font-semibold text-2xl text-center z-30">
            Proveedores de hoy
          </p>
          <div className="flex rounded-lg items-center justify-center my-10">
            <Table
              removeWrapper
              aria-label="Example static collection table"
              className="w-[800px] rounded-lg"
            >
              <TableHeader className="flex justify-center items-center rounded-lg">
                <TableColumn className="bg-pink-100 rounded-s-lg">
                  <p className="text-black text-center">Nombre</p>
                </TableColumn>
                <TableColumn className="bg-pink-100 justify-center items-center rounded-e-lg">
                  <p className="text-black text-center">Marca</p>
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell className="text-[#212529] font-sans text-center">
                    Tony Reichert
                  </TableCell>
                  <TableCell className="text-[#212529] font-sans text-center">
                    CEO
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell className="text-[#212529] font-sans text-center">
                    Zoey Lang
                  </TableCell>
                  <TableCell className="text-[#212529] font-sans text-center">
                    Technical Lead
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell className="text-[#212529] font-sans text-center">
                    Jane Fisher
                  </TableCell>
                  <TableCell className="text-[#212529] font-sans text-center">
                    Senior Developer
                  </TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className="text-[#212529] font-sans text-center">
                    William Howard
                  </TableCell>
                  <TableCell className="text-[#212529] font-sans text-center">
                    Community Manager
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
