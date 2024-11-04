"use client";
import Image from "next/image";
import { Button, Divider, User } from "@nextui-org/react";
import CommandDialogDemo from "./command-dialog-component";

const HeaderDashboard: React.FC = () => {
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full h-[80px] backdrop-blur-sm transition duration-300 ease-in-out bg-secondary-500 ">
      <nav
        className="mx-auto flex container px-6 lg:px-8 items-center justify-between max-w-screen-xl"
        aria-label="Global"
      >
        <Image
          src={"/logo.png"}
          alt="Foto"
          width={100}
          height={50}
          loading="eager"
          className=""
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
            className="lucide lucide-bell text-primary-500"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </Button>

        <Button variant="ghost">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            className="text-default-300 w-60"
          />
        </Button>

        {/* Badge de mensajes */}
      </nav>
      <Divider></Divider>
    </header>
  );
};
export default HeaderDashboard;
