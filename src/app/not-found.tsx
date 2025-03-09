"use client";
import Container from "@/components/container-component";
import { Button } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="flex relative flex-col-reverse md:flex-row items-center md:justify-between px-4 gap-4 md:h-[90vh] p-20">
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[40rem] lg:h-[40rem] justify-center items-center justify-items-center flex">
          <p className="lg:text-[200px] text-[60px] font-bold text-secondary-800">404<span className="text-4xl font-semibold text-black">ERROR</span></p>
        </div>
        <div className="max-w-lg pt-16">
          <h2 className="text-4xl lg:text-7xl font-extrabold text-secondary-800 mb-2">
            Oops!
          </h2>
          <h1 className="text-xl md:text-4xl text-black font-bold mb-4">
            Página no encontrada
          </h1>

          <p className="text-base text-black md:text-xl mb-4 md:mb-12">
            Esto puede deberse a que la dirección haya sido escrita
            incorrectamente, que el contenido haya sido eliminado o que
            simplemente haya desaparecido en el basto mundo digital.
          </p>

          <Button
            color="primary"
            onClick={() => router.back()}
            startContent={<ArrowLeft className="w-4 h-4 rounded-xl" />}
          >
            Regresar
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default NotFound;
