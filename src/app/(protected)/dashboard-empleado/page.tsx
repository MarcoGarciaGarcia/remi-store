"use client";
import { Card, CardBody } from "@nextui-org/react";
import { ListChecks, ShoppingCart } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const DashboardPage: NextPage = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(sessionStorage.getItem("userName") ?? '');
  }, []);

  return (
    <section className="w-full h-full">
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-black lg:text-4xl text-xl font-bold font-sans lg:pt-5 pt-16">
            Hola {name}
          </h1>
        </div>

        <div className="my-10 lg:flex grid gap-5">
          <div className="grid lg:w-[500px] w-full px-4 lg:px-0 lg:gap-0 gap-4">
            <Card className="lg:w-[350px] w-full h-[180px] shadow-xl rounded-2xl bg-white">
              <CardBody className="h-full">
                <div className="flex w-full h-full justify-center items-center">
                  <div className="grid justify-center items-center">
                    <p className="font-bold text-xl text-black mb-3 font-sans">
                      Total de ventas de hoy
                    </p>
                    <p className="text-black text-center text-5xl font-semibold font-sans">
                      30
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-[100px]">
                    <ShoppingCart size={50} className="text-black" />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="lg:w-[350px] w-full h-[180px] shadow-xl rounded-2xl bg-white">
              <CardBody className="h-full">
                <div className="flex w-full h-full justify-center items-center">
                  <div className="grid justify-center items-center">
                    <p className="font-bold text-xl text-black mb-3 font-sans">
                      Asistencias
                    </p>
                    <p className="text-black text-center text-5xl font-semibold font-sans">
                      30
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-[100px]">
                    <ListChecks size={50} className="text-black" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="lg:w-[500px] w-full h-[500px] grid justify-center items-center bg-white shadow-lg rounded-lg lg:p-10 p-4 mx-4 lg:mx-0">
            <p className="font-sans text-black justify-start text-md w-full">
              Recuerda registrar tu asistencia en la sección correspondiente.
              Cualquier duda o reporte mandar un comentario en la sección de
              levantar ticket.
            </p>
            <Image
              width={500}
              height={400}
              src="/sh.jpg"
              alt="NextUI Album Cover"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
