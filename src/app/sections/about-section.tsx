'use client'
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
      id="about-us"
      className="overflow-hidden bg-primary-500 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 justify-center items-center flex">
            <div className="lg:max-w-lg">
              <p className="-mt-2 text-3xl font-nunito font-bold tracking-tight text-primary-100 sm:text-4xl lg:text-left text-center">
                Sobre Nosotros
              </p>
              <p
                className={`${abFont.className} mt-4 font-roboto font-normal text-medium leading-6 text-white lg:text-left text-center`}
              >
                En Raxima, somos una empresa comprometida con ofrecer soluciones
                integrales en construcción, mantenimiento e ingeniería,
                respaldadas por la experiencia y un equipo altamente capacitado.
              </p>
              <Button
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                color={"0" as any}
                className={`${abFont.className} bg-primary-100 text-black w-full mt-8 lg:w-32 font-bold`}
                onClick={()=>{router.push("/nosotros")}}
              >
                Conócenos
              </Button>
            </div>
          </div>
          <div
            className="w-full h-[350px] lg:w-[500px] lg:h-[350px] rounded-tl-[70px] bg-gray-300 sm:mx-5 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/inicio_sobre_nosotros.webp')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
