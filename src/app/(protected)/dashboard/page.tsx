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

const DashboardPage: NextPage = () => {
  return (
    <section className="w-full h-full">
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-primary-500 text-4xl font-bold">
            Bienvenido {"{Nombre}"}
          </h1>
        </div>

        <div className="my-10 flex gap-14">
          <Card className="w-[350px] h-[180px] shadow-xl rounded-2xl">
            <CardBody className="h-full">
              <div className="flex w-full h-full justify-center items-center">
                <div className="grid justify-center items-center">
                  <p className="font-bold text-xl text-black mb-3">
                    Total de ventas de hoy
                  </p>
                  <p className="text-black text-center text-5xl font-semibold">
                    30
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100px]">
                  <ShoppingCart size={50} className="text-black" />
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-[350px] h-[180px] shadow-xl rounded-2xl">
            <CardBody className="h-full">
              <div className="flex w-full h-full justify-center items-center">
                <div className="grid justify-center items-center">
                  <p className="font-bold text-md text-black text-center mb-3 px-5">
                    Total de ventas de hoy en efectivo
                  </p>
                  <p className="text-black text-center text-5xl font-semibold">
                    $556
                  </p>
                </div>
                <div className="flex items-center justify-center w-[150px]">
                  <CircleDollarSign size={50} className="text-black" />
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-[350px] h-[180px] shadow-xl rounded-2xl">
            <CardBody className="h-full">
              <div className="flex w-full h-full justify-center items-center p-5">
                <div className="grid justify-center items-center">
                  <p className="font-bold text-md text-black text-center mb-3">
                    Utilidades de hoy en efectivo
                  </p>
                  <p className="text-black text-center text-5xl font-semibold">
                    $112.2
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100px]">
                  <HandCoins size={50} className="text-black" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div>
          <p className="text-black font-semibold text-2xl">
            Proveedores de hoy
          </p>
          <div className="flex my-5">
            <Table
              removeWrapper
              aria-label="Example static collection table"
              className="w-[800px]"
            >
              <TableHeader className="flex justify-center items-center">
                <TableColumn className="bg-secondary-500">
                  <p className="text-primary-500 text-center">Nombre</p>
                </TableColumn>
                <TableColumn className="bg-secondary-500 justify-center items-center">
                  <p className="text-primary-500 text-center">Marca</p>
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell className="text-default-300 text-center">
                    Tony Reichert
                  </TableCell>
                  <TableCell className="text-default-300 text-center">
                    CEO
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell className="text-default-300 text-center">
                    Zoey Lang
                  </TableCell>
                  <TableCell className="text-default-300 text-center">
                    Technical Lead
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell className="text-default-300 text-center">
                    Jane Fisher
                  </TableCell>
                  <TableCell className="text-default-300 text-center">
                    Senior Developer
                  </TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className="text-default-300 text-center">
                    William Howard
                  </TableCell>
                  <TableCell className="text-default-300 text-center">
                    Community Manager
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="w-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
