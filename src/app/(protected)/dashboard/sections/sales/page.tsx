"use client";

import {
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FC } from "react";

const DashboardPage: FC = () => {
  return (
    <section className="w-full h-full">
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-primary-500 text-4xl font-sans font-bold pt-5">
            Gestión de Ventas
          </h1>
        </div>
      </div>
      <div className="grid justify-start ml-10">
        <input
          className="rounded-lg border-2 border-default-100 shadow-sm w-96 p-2 active:border-primary-500 text-black mt-5"
          placeholder="Buscar venta por empleado"
        ></input>

        <Table
          aria-label="Example static collection table"
          className="rounded-lg w-[1000px] mt-5"
          shadow="lg"
        >
          <TableHeader className="rounded-lg">
            <TableColumn className="bg-primary-500 text-white text-center">
              Usuario
            </TableColumn>
            <TableColumn className="bg-primary-500 text-white text-center">
              Total de venta
            </TableColumn>
            <TableColumn className="bg-primary-500 text-white text-center">
              Fecha de venta
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell className="text-secondary-900 text-center">
                Tony Reichert
              </TableCell>
              <TableCell className="text-secondary-900 text-center">$76</TableCell>
              <TableCell className="text-secondary-900 text-center">
                12/03/2024
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Image
        src={"/gv.jpg"}
        alt="Foto"
        width={300}
        height={50}
        loading="eager"
        className=""
      />
    </section>
  );
};

export default DashboardPage;
