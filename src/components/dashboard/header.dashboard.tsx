"use client";
import Image from "next/image";
import { Button, User } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const HeaderDashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setName(sessionStorage.getItem("userName") || "");
    setRole(sessionStorage.getItem("userRole") || "");
  }, []);
  {
    /*const roleS = sessionStorage.getItem("userRole");
  const [role, setRole] = useState("")

  if(roleS==='1'){
    setRole("Administrador")
  } else if(roleS==='2'){
    setRole("Empleado")
  } else {
    setRole("Gestión")
  }*/
  }

  const router = useRouter();
  const handleChange = () => {
    router.push("/dashboard/profile");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Elimina el token del sessionStorage o localStorage
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("breakside");
    sessionStorage.removeItem("plantelId");
    sessionStorage.removeItem("userApellidoMaterno");
    sessionStorage.removeItem("userApellidoPaterno");
    sessionStorage.removeItem("userCount");
    sessionStorage.removeItem("userFoto");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userRole");
    sessionStorage.clear();
    console.log("borrar");

    // Limpia cualquier estado de usuario en la aplicación (esto es opcional)
    // resetUserState(); // Si usas Redux o Context API, llama a la acción correspondiente

    // Redirige al login
    router.push("/auth/login");
  };

  return (
    <header className="hidden md:block sticky top-0 z-20 w-full h-[80px] backdrop-blur-sm transition duration-300 ease-in-out bg-transparent ">
      <nav
        className="mx-auto flex container px-6 lg:px-8 items-center justify-between max-w-screen-xl"
        aria-label="Global"
      >
        <Image
          src={"/logo-black.webp"}
          alt="Foto"
          width={100}
          height={50}
          loading="eager"
          className="-mt-2 ml-16"
        />

        <div className="lg:ml-24 md:ml-7 flex justify-center w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/*<CommandDialogDemo />*/}
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
            className="lucide lucide-bell text-black"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </Button>

        <Button variant={"0" as never} onClick={toggleMenu}>
          <User
            name={name}
            description={
              role === "1"
                ? "Administrador"
                : role === "2"
                ? "Empleado"
                : "Gestión"
            }
            className="text-black w-60"
          />
        </Button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 top-[calc(100%+11px)] md:top-[calc(100%+11px)] w-64 lg:w-80 bg-white text-black shadow-lg p-4 z-10 rounded-b-2xl lg:justify-end ml-10 mr-10 -mt-3"
          >
            {" "}
            {/* Ajusta el margen aquí */}
            <div className="flex flex-col items-center gap-2">
              {/* Imagen centrada */}
              <div className="flex items-center justify-center">
                <User name="" description="" className="text-black w-96" />
              </div>
              <span className="lg:text-xl font-bold text-black">{name}</span>
              <span
                className="block text-xs text-black"
                style={{ marginTop: "-0.5rem" }}
              >
                {role === "1"
                  ? "Administrador"
                  : role === "2"
                  ? "Empleado"
                  : "Gestión"}
              </span>
            </div>
            <div className="mt-3 relative">
              <div className="group-hover:opacity-100 transition absolute inset-0 bg-transparent opacity-30 backdrop-blur-lg rounded-lg"></div>
              {/* Botón para configuración */}
              <Button
                color="default"
                className="w-full bg-transparent text-black font-semibold rounded-lg text-sm py-2 px-4"
                onClick={handleChange}
              >
                Configuración
              </Button>
            </div>
            <div className="mt-1">
              {/* Botón para cerrar sesión */}
              <Button
                className="w-full bg-white hover:bg-black transition hover:text-white text-[#909091] font-semibold rounded-lg text-sm py-2 px-4"
                style={{ marginTop: "-0.5rem" }}
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
            </div>
          </div>
        )}

        {/* Badge de mensajes */}
      </nav>
    </header>
  );
};
export default HeaderDashboard;
