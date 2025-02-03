/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import LoginForm from "./sections/login-form";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full h-screen relative flex items-center justify-center md:h-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0.60), rgba(245, 246, 252, 0.52)), url(/fondo.jpg) center center/cover no-repeat",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-7xl py-12 sm:pt-32 sm:pb-32 gap-y-12">
        <Card className="w-[90vw] max-w-[400px] p-8 py-14 sm:py-1 bg-white rounded-lg">
          <CardHeader>
            <div className="flex flex-col items-center justify-center">
              <Image src="/logo.png" width={100}></Image>
              <p className="text-small text-gray-600 text-center mb-2">
                Ingresa tu usuario y contraseña para acceder a la plataforma.
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <LoginForm />
          </CardBody>
        </Card>
      </div>
      <style jsx>{`
        @media (max-width: 768px) and (orientation: landscape) {
          .card {
            width: 70vw;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
