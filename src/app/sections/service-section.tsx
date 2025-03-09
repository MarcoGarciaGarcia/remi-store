"use client";
import "swiper/css";
import { Rubik } from "next/font/google";
import RotatingText from "@/components/ogl/RotatingText";
import SpotlightCard from "@/components/ogl/SpotlightCard";
import { Computer, Laptop, MonitorCog } from "lucide-react";

const abFont = Rubik({
  subsets: ["latin"],
  weight: "400",
});

const ServicesSection: React.FC = () => {
  return (
    <section
      id="especifico"
      className="overflow-hidden bg-transparent h-auto py-20"
    >
      <div className="w-full justify-center items-center justify-items-center my-12">
        <div className="flex">
          <p className="text-black lg:text-4xl text-3xl font-bold flex items-center">
            Objetivos
          </p>
          <RotatingText
            texts={["Generales", "Específicos"]}
            mainClassName="px-2 sm:px-2 md:px-3 lg:text-4xl text-3xl bg-primary-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg ml-2 font-medium"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
      <div className="lg:flex grid justify-center items-center gap-5">
        <SpotlightCard
          className="custom-spotlight-card bg-white hover:scale-105 transition-all"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="p-6 text-black grid items-end justify-center justify-items-center h-80">
            <Computer className="text-center text-primary-500" width={60} height={60}></Computer>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Primer Objetivo</h3>
              <p className={`${abFont.className}`}>
                Automatizar el registro de ventas mediante un lector de código
                de barras.
              </p>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card bg-white hover:scale-105 transition-all"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="p-6 text-black grid items-end justify-center justify-items-center h-80">
          <Laptop className="text-center text-primary-500" width={60} height={60}></Laptop>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Segundo Objetivo</h3>
              <p className={`${abFont.className}`}>
                Optimizar la gestión de inventario con alertas y sugerencias
                basadas en análisis de tendencias
              </p>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card bg-white hover:scale-105 transition-all"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="p-6 text-black grid items-end justify-center justify-items-center h-80">
          <MonitorCog className="text-center text-primary-500" width={60} height={60}></MonitorCog>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tercer Objetivo</h3>
              <p className={`${abFont.className}`}>
                Implementar un sistema de login con niveles de usuario para
                asegurar el acceso autorizado
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default ServicesSection;
