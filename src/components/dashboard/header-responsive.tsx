"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { IRoute, mainNav, mainNavAdmin, mainNavWorker } from "@/routes";
import { Button, Tooltip } from "@nextui-org/react";
import { AlignJustify, X } from "lucide-react";

const HeaderResponsive: React.FC = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bar, setBar] = useState<IRoute[]>(mainNav);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = () => {
      const storedProfile = sessionStorage.getItem("userRole");

      if (storedProfile === "1") {
        setBar(mainNav);
      } else if (storedProfile === "3") {
        setBar(mainNavAdmin);
      } else if (storedProfile === "2") {
        setBar(mainNavWorker);
      }
    };

    fetchUserProfile();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md lg:hidden block">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold bg-transparent z-50">
          <img src={"/logo-black.webp"} alt="Foto" className="w-12" />
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <X className="text-black"></X>
          ) : (
            <AlignJustify className="text-black"></AlignJustify>
          )}
        </button>
      </div>

      {/* Menú de hamburguesa */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40 transition-all transition-left transition"
          onClick={toggleMenu}
        >
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white/20 backdrop-blur-xl z-50 p-4 overflow-y-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2 mt-10">
              {bar.map(({ href, icon: Icon, title, slug, active }) => (
                <Tooltip
                  key={slug}
                  content={title}
                  placement="right"
                  color={"0" as never}
                  className="bg-black text-primary-800 font-light p-2 rounded-lg"
                >
                  <Link
                    href={href}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className={cn(
                      "justify-start w-full mb-3 px-3",
                      active === path
                        ? "group bg-transparent hover:bg-transparent transition"
                        : ""
                    )}
                  >
                    <div className="flex items-center w-full py-2">
                      {Icon && (
                        <span
                          className={
                            active === path
                              ? "h-6 w-6 mr-2 text-primary-700 group-hover:text-primary-800 transition-all"
                              : "h-6 w-6 mr-2 text-black"
                          }
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>
                      )}
                      <span
                        className={
                          active === path
                            ? "group-hover:text-primary-800 transition-all text-primary-700 ml-4 text-xs font-semibold text-start leading-tight whitespace-normal break-words w-40"
                            : "text-black text-xs font-semibold text-start ml-4 leading-tight whitespace-normal break-words w-40"
                        }
                      >
                        {title}
                      </span>
                    </div>
                  </Link>
                </Tooltip>
              ))}
            </div>
            <Button
              className="w-full mt-12 bg-white hover:bg-black transition hover:text-white text-black font-semibold rounded-lg text-sm py-2 px-4"
              style={{ marginTop: "-0.5rem" }}
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderResponsive;
