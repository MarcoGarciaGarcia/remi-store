"use client"; // Asegurando que sea tratado como componente cliente

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          href="#conocenos"
          className="text-primary-500 -mt-2 font-bold lg:ml-36 ml-5"
        >
          <img
            src="/logoEmpresa.png"
            alt="Logo Inicial"
            width={110}
            height={60}
          />
        </Link>

        <div className="hidden md:flex space-x-3 ml-14">
          <Link
            href="#conocenos"
            className={`text-md font-bold px-3 py-2 rounded-lg text-white ${
              activeSection === "conocenos" ? "bg-primary-500" : ""
            }`}
          >
            Conócenos
          </Link>
          <Link
            href="#beneficios"
            className={`text-md font-bold px-3 py-2 rounded-lg text-white ${
              activeSection === "beneficios" ? "bg-primary-500" : ""
            }`}
          >
            Beneficios
          </Link>
          <Link
            href="#materiales"
            className={`text-md font-bold px-3 py-2 rounded-lg text-white ${
              activeSection === "materiales" ? "bg-primary-500" : ""
            }`}
          >
            Materiales
          </Link>
          <Link
            href="#productos"
            className={`text-md font-bold px-3 py-2 rounded-lg text-white ${
              activeSection === "productos" ? "bg-primary-500" : ""
            }`}
          >
            Productos
          </Link>
        </div>

        {/* Menú Hamburguesa para pantallas pequeñas */}
        <button
          className="md:hidden text-primary-900 mr-10 -mt-3 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-24 right-0 bg-white w-full h-screen z-50 text-start py-4">
            <Link
              href="#conocenos"
              className={`block text-primary-900 py-3 mt-3 ml-5 ${
                activeSection === "conocenos" ? "text-primary-400" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Conócenos
            </Link>
            <Link
              href="#beneficios"
              className={`block text-primary-900 py-3 ml-5 ${
                activeSection === "beneficios" ? "text-primary-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#materiales"
              className={`block text-primary-900 py-3 ml-5 ${
                activeSection === "materiales" ? "text-primary-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Materiales
            </Link>
            <Link
              href="#productos"
              className={`block text-primary-900 py-3 ml-5 ${
                activeSection === "productos" ? "text-primary-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
