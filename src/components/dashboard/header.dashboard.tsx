/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { Button, User } from "@nextui-org/react";
import CommandDialogDemo from "./command-dialog-component";

const HeaderDashboard: React.FC = () => {
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full h-[80px] backdrop-blur-sm transition duration-300 ease-in-out bg-primary-500 ">
      <nav
        className="mx-auto flex container px-6 lg:px-8 items-center justify-between max-w-screen-xl"
        aria-label="Global"
      >
        <Image
          src={"/image.webp"}
          alt="Foto"
          width={100}
          height={50}
          loading="eager"
          className="-mt-2"
        />

        <div className="lg:ml-24 md:ml-7 flex justify-center w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <CommandDialogDemo />
          </div>
        </div>

        {/* Botón de notificaciones */}
        <Button isIconOnly>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bell text-white"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </Button>

        <Button variant={"0" as any}>
          <User
            name="Jane Doe"
            description="Administrador"
            className="text-white w-60"
          />
        </Button>

        {/* Badge de mensajes */}
      </nav>
    </header>
  );
};
export default HeaderDashboard;
