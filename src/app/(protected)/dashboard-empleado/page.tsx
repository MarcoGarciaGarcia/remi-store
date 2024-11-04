"use client";
import { Card, CardBody } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";

const DashboardPage: NextPage = () => {
  return (
    <section className="w-full h-full">
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-primary-500 text-4xl font-bold">
            Hola {"{Nombre}"}
          </h1>
        </div>

        <div className="my-10 flex gap-20">
          <div className="grid w-[500px]">
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
                    <p className="font-bold text-xl text-black mb-3">
                      Asistencias
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
          </div>
          <div className="w-[500px] h-[500px] flex justify-center items-center">
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
