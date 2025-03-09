"use client";
import GradientText from "@/components/ogl/GradientText";
import { Button } from "@nextui-org/react";
import { Rubik } from "next/font/google";
import { useRouter } from "next/navigation";

const abFont = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AboutSection: React.FC = () => {
  const router = useRouter();

  return (
    <section
      id="general"
      className="overflow-hidden bg-transparent py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 justify-center items-center flex">
            <div className="lg:max-w-lg">
              <p className="-mt-2 text-3xl font-nunito font-bold tracking-tight text-primary-500 sm:text-4xl lg:text-left text-center">
                Objetivo General
              </p>
              <p
                className={`${abFont.className} mt-4 font-roboto font-normal text-medium leading-6 text-black lg:text-left text-center`}
              >
                Desarrollo de un sistema de gestión personalizado para pequeñas
                tiendas, que automatice y digitalice los procesos de inventario,
                ventas y generación de reportes
              </p>
              <Button
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                color={"0" as any}
                className={`${abFont.className} border-1 border-primary-600 text-black w-full mt-6 lg:w-auto rounded-lg font-bold`}
                onClick={() => {
                  router.push("/#especifico");
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
                  Conoce nuestros servicios
                </GradientText>
              </Button>
            </div>
          </div>
          <div
            className="w-full h-[350px] lg:w-[500px] lg:h-[350px] rounded-tl-[70px] bg-gray-300 sm:mx-5 bg-cover bg-center"
            style={{
              backgroundImage: "url(/ejemplo2.jpeg)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
