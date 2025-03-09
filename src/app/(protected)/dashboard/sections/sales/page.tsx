"use client";

import { getAllVentas } from "@/apis/apiVentas";
import { IVentas } from "@/interfaces/ventas";
import { FechaSchema, FechaSchemaType } from "@/schemas/fecha-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const DashboardPage: FC = () => {
  const [ventas, setVentas] = useState<IVentas>();

  const form = useForm<FechaSchemaType>({
    resolver: zodResolver(FechaSchema),
    defaultValues: {
      fecha_inicio: "",
      hora_inicio: "",
      fecha_fin: "",
      hora_fin: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values: FechaSchemaType) => {
    console.log(values);
    try {
      const response = await getAllVentas(values);
      console.log("Data saved successfully:", response);

      if (response.status === 200) {
        setVentas(response.data);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <section className="w-full h-auto lg:px-0 px-2">
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-black text-4xl font-sans font-bold lg:pt-6 pt-16">
            Gestión de Ventas
          </h1>
        </div>
      </div>
      <div className="grid justify-center items-center bg-white shadow-lg rounded-lg py-8 px-8 max-w-fit w-auto mt-8 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="flex justify-start gap-4 w-full">
            <div className="grid w-full">
              <label htmlFor="date" className="text-black font-bold">
                Fecha de Inicio:{" "}
              </label>
              <Controller
                name="fecha_inicio"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      type="date"
                      id="date"
                      {...field}
                      required
                      className="text-black border-1 border-gray-400 border-solid py-1 px-4 rounded-lg"
                    />
                    {errors.fecha_inicio?.message && (
                      <span className="text-red-500 text-xs">
                        {errors.fecha_inicio.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="grid w-full">
              <label htmlFor="time" className="text-black font-bold">
                Hora de Inicio:{" "}
              </label>
              <Controller
                name="hora_inicio"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      type="time"
                      id="time"
                      {...field}
                      required
                      className="text-black border-1 border-gray-400 border-solid py-1 px-4 rounded-lg"
                    />
                    {errors.hora_inicio?.message && (
                      <span className="text-red-500 text-xs">
                        {errors.hora_inicio.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex justify-start gap-4 mt-2 w-full">
            <div className="grid w-full">
              <label htmlFor="date" className="text-black font-bold">
                Fecha de Fin:{" "}
              </label>
              <Controller
                name="fecha_fin"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      type="date"
                      id="date"
                      {...field}
                      required
                      className="text-black border-1 border-gray-400 border-solid py-1 px-4 rounded-lg"
                    />
                    {errors.fecha_fin?.message && (
                      <span className="text-red-500 text-xs">
                        {errors.fecha_fin.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="grid w-full">
              <label htmlFor="time" className="text-black font-bold">
                Hora de Fin:{" "}
              </label>
              <Controller
                name="hora_fin"
                control={control}
                render={({ field }) => (
                  <div>
                    <input
                      type="time"
                      id="time"
                      {...field}
                      required
                      className="text-black border-1 border-gray-400 border-solid py-1 px-4 rounded-lg"
                    />
                    {errors.hora_fin?.message && (
                      <span className="text-red-500 text-xs">
                        {errors.hora_fin.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-lg flex bg-black text-white px-4 py-1 mt-4 w-40"
            color={"0" as never}
          >
            Buscar
          </Button>
        </form>
        <Table
          aria-label="Example static collection table"
          className="rounded-lg mt-4 lg:w-[600px] w-full"
        >
          <TableHeader className="rounded-lg">
            <TableColumn className="bg-black rounded-s-lg text-white text-center">
              Usuario
            </TableColumn>
            <TableColumn className="bg-black text-white text-center">
              Total de venta
            </TableColumn>
            <TableColumn className="bg-black rounded-e-lg text-white text-center">
              Fecha de venta
            </TableColumn>
          </TableHeader>
          <TableBody>
            {ventas ? (
              ventas.ventas.map((venta) => (
                <TableRow key={venta.id_ventas}>
                  <TableCell className="text-secondary-900 text-center">
                    {venta.nombre_usuario}
                  </TableCell>
                  <TableCell className="text-secondary-900 text-center">
                    {venta.total_bruto_grupo}
                  </TableCell>
                  <TableCell className="text-secondary-900 text-center">
                    {venta.fecha_venta}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow key={0}>
                <TableCell className="text-secondary-900 text-center">
                  Ninguno
                </TableCell>
                <TableCell className="text-secondary-900 text-center">
                  $0
                </TableCell>
                <TableCell className="text-secondary-900 text-center">
                  /yyyy/mm/dd
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Image
        src={"/gv.jpg"}
        alt="Foto"
        width={300}
        height={50}
        loading="eager"
        className="mx-auto"
      />
    </section>
  );
};

export default DashboardPage;
