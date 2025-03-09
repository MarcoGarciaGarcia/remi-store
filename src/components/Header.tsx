"use client"; // Asegurando que sea tratado como componente cliente

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Rubik } from "next/font/google";
import GradientText from "./ogl/GradientText";
import { useRouter } from "next/navigation";
const abFont = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["conocenos", "beneficios", "materiales", "productos"];
      const offsets = sections.map((id) => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < sections.length; i++) {
        if (scrollPosition >= offsets[i] && scrollPosition < offsets[i + 1]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para comprobar la sección activa en la carga inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-transparent py-5 fixed w-full top-0 left-0 z-30  ${
        isScrolled
          ? "backdrop-blur-md bg-opacity-50"
          : "backdrop-blur-none opacity-100"
      }`}
    >
      <div className="flex lg:justify-start justify-between items-center z-50">
        <Link
          href="/"
          className="text-primary-500 -mt-2 font-bold lg:ml-36 ml-5"
        >
          <h3 className="font-bold text-primary-500 text-xl">RRS</h3>
        </Link>

        <div className="hidden md:flex space-x-3 ml-14">
          <Link
            href="#inicio"
            className={`text-md font-bold px-3 py-2 rounded-lg text-primary-700 ${
              activeSection === "conocenos" ? "bg-primary-500" : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            href="#general"
            className={`text-md font-bold px-3 py-2 rounded-lg text-primary-700 ${
              activeSection === "beneficios" ? "bg-primary-500" : ""
            }`}
          >
            Objetivo General
          </Link>
          <Link
            href="#especifico"
            className={`text-md font-bold px-3 py-2 rounded-lg text-primary-700 ${
              activeSection === "materiales" ? "bg-primary-500" : ""
            }`}
          >
            Objetivos Específicos
          </Link>
        </div>
        <Button
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          color={"0" as any}
          className={`${abFont.className} border-1 border-primary-600 ml-96 justify-end text-black w-full lg:w-auto rounded-lg font-bold`}
          onClick={() => {
            router.push("/auth/login");
          }}
        >
          <GradientText
            colors={["#155a75", "#67e3f9", "#155a75", "#67e3f9", "#155a75"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Inicio de sesión
          </GradientText>
        </Button>
        {/* Menú Hamburguesa para pantallas pequeñas */}
        <button
          className="md:hidden text-primary-900 mr-10 -mt-0 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-24 right-0 bg-white w-full h-screen z-50 text-start py-4 grid">
            <div className="grid gap-4 h-40">
              <Link
                href="#inicio"
                className={`text-md font-bold px-3 py-2 rounded-lg text-primary-700 ${
                  activeSection === "conocenos" ? "bg-primary-500" : ""
                }`}
              >
                Inicio
              </Link>
              <Link
                href="#general"
                className={`text-md font-bold px-3 py-2 rounded-lg text-primary-700 ${
                  activeSection === "beneficios" ? "bg-primary-500" : ""
                }`}
              >
                Objetivo General
              </Link>
              <Link
                href="#especifico"
                className={`text-md font-bold px-3 py-2 rounded-lg text-primary-700 ${
                  activeSection === "materiales" ? "bg-primary-500" : ""
                }`}
              >
                Objetivos Específicos
              </Link>
              <Button
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                color={"0" as any}
                className={`${abFont.className} border-1 border-primary-600 text-black w-full lg:w-auto rounded-lg font-bold`}
                onClick={() => {
                  router.push("/auth/login");
                }}
              >
                <GradientText
                  colors={[
                    "#155a75",
                    "#67e3f9",
                    "#155a75",
                    "#67e3f9",
                    "#155a75",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  Inicio de sesión
                </GradientText>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
