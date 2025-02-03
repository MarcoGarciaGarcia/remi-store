import { Button, Link } from "@nextui-org/react";
import { Rubik } from "next/font/google";

const abFont = Rubik({
  subsets: ["latin"],
  weight: "400",
});

const IntroSection: React.FC = () => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className=" relative h-[100dvh] w-full overflow-hidden text-primary-500"
        style={{
          background: "url(/63666.jpg) top center/cover no-repeat, rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="mr-[700px] h-full w-full flex flex-col justify-center items-start text-start gap-y-8 mx-auto max-w-2xl px-4 hidden lg:flex">
          <h3 className="font-bold text-5xl sm:max-w-xl max-w-sm text-white">
            Sistema de
          </h3>
          <h3 className="font-bold text-5xl -mt-5 sm:max-w-xl max-w-sm text-black">
            <span className="text-primary-500">Gestión de Ventas</span>
          </h3>
          <p
            className={`${abFont.className} tracking-wider text-sm leading-2 text-black justify-end mt-2`}
          >
            En Raxima, combinamos experiencia y personal altamente capacitado
            para
          </p>
          <p
            className={`${abFont.className} tracking-wider text-sm leading-2 text-black justify-end -mt-8`}
          >
            garantizar construcciones, mantenimientos y productos de calidad que
          </p>
          <p
            className={`${abFont.className} tracking-wider text-sm leading-2 text-black justify-end -mt-8 mb-2`}
          >
            satisfacen tus necesidades.
          </p>
          <div>
            <Button
              href="#information"
              as={Link}
              className="font-semibold text-sm capitalize rounded-lg px-10 py-3 bg-black text-white hover:scale-105 transition-colors tracking-wider font-roboto"
            >
              Obtén información
            </Button>
          </div>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-end text-end gap-y-4 -mt-20 mx-auto max-w-2xl px-4 sm:flex lg:hidden">
          <h3 className="font-bold text-2xl sm:max-w-xl max-w-sm text-black">
            Soluciones integrales
          </h3>
          <h3 className="font-bold text-2xl -mt-5 sm:max-w-xl max-w-sm text-black">
            para tus <span className="text-primary-500">proyectos</span>
          </h3>
          <p className="tracking-wider text-[12px] leading-2 text-black justify-end font-roboto font-light w-64">
            En Raxima, combinamos experiencia y personal altamente capacitado
            para garantizar construcciones, mantenimientos y productos de
            calidad que satisfacen tus necesidades.
          </p>
          <div>
            <Button
              href="#information"
              as={Link}
              className="font-semibold text-sm capitalize rounded-lg px-10 py-3 bg-black text-white hover:scale-105 transition-colors tracking-wider font-roboto"
            >
              Solicitar información
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
