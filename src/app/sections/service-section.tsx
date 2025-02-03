"use client";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MoveRight } from "lucide-react";

import "swiper/css";
import { useRouter } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Rubik } from "next/font/google";

const abFont = Rubik({
  subsets: ["latin"],
  weight: "400",
});

const ServicesSection: React.FC = () => {
  const [service, setService] = useState<number>(0);
  const router = useRouter();

  const services = [
    {
      id: 0,
      title: "Mantenimiento Industrial",
      description:
        "Desde mantenimiento preventivo hasta correctivo, nuestro equipo de expertos garantiza eficiencia, en tus operaciones, reduciendo tiempos de inactividad y maximizando la productividad.",
      url: "/assets/inicio1.webp",
      section: "/mantenimiento_industrial",
    },
    {
      id: 1,
      title: "Fabricación de Piezas Industriales",
      description:
        "Diseñamos y fabricamos piezas industriales con materiales de calidad, precisión y tecnología avanzada. ",
      url: "/assets/inicio2.webp", // Aquí puedes poner la URL de la imagen
      section: "/fabricacion_piezas_metalicas",
    },
    {
      id: 2,
      title: "Construcciones",
      description:
        "Ofrecemos soluciones completas en construcción, desde el diseño hasta la ejecución, combinando innovación, ingeniería de calidad para garantizar resultados funcionales.",
      url: "/assets/inicio_construcciones.webp", // Aquí puedes poner la URL de la imagen
      section: "/construcciones",
    },
  ];

  // Función para manejar el clic en los botones y actualizar el servicio seleccionado
  const handleClick = (id: number) => {
    setService(id); // Actualiza el servicio seleccionado
  };

  const wordsArray = [
    {
      text: "Nuestros",
      className: "text-md",
    },
  ];

  const wordsArray2 = [
    {
      text: "Servicios",
      className: "text-md",
    },
  ];

  return (
    <section id="services" className="overflow-hidden bg-white h-[100vh]">
      <div className="mx-auto max-w-5xl pb-24 sm:pb-5 lg:pt-28 pt-10 ">
        <div className="text-start justify-between flex flex-col lg:flex-row lg:gap-10 gap-3 mx-5 mb-10">
          <div className="w-full md:w-full lg:w-[650px] justify-center items-center md:flex lg:flex grid mt-10">
            <TextGenerateEffect
              wordsArray={wordsArray}
              className="text-4xl font-bold lg:-mb-0 md:-mb-0 -mb-8"
            />
            <p className="text-4xl font-bold">&nbsp;</p>
            <TextGenerateEffect
              wordsArray={wordsArray2}
              className="text-4xl font-semibold text-primary-50 font-archivo"
            />
          </div>
          <div className="w-full lg:w-[700px]">
            <p
              className={`${abFont.className} tracking-tight text-sm font-light text-gray-700 md:text-center lg:ml-32 ml-0 lg:text-left text-center`}
            >
              En Raxima, ofrecemos una amplia gama de servicios diseñados para
              satisfacer las necesidades de la industria con calidad, eficiencia
              y compromiso.
            </p>
          </div>
        </div>

        {/* Mostrar la tarjeta con la información del servicio seleccionado */}
        <Card
          isFooterBlurred
          className="w-full h-[350px] col-span-12 sm:col-span-7 mt-10 border-none hidden lg:flex"
        >
          {/* Botones para seleccionar el servicio con estilo grid */}
          <div className="absolute top-0 right-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-80 z-50 bg-white pb-5 pl-5 rounded">
            {services.map((serviceItem) => (
              <Button
                key={serviceItem.id}
                onClick={() => handleClick(serviceItem.id)} // Actualiza el servicio al hacer clic
                className={`${abFont.className} ${
                  service === serviceItem.id
                    ? "bg-primary-300 text-black text-sm rounded-none" // Color para el botón activo
                    : "bg-black text-white text-sm rounded-none"
                } hover:bg-primary-300 focus:outline-none py-5 transition-colors duration-300 text-sm rounded-none`}
              >
                {serviceItem.title}
              </Button>
            ))}
          </div>

          <CardHeader className="absolute z-10 top-32 flex-col items-start">
            <h4 className="text-2xl text-primary-300 uppercase font-bold ml-5">
              {services[service].title}{" "}
              {/* Mostrar el título del servicio seleccionado */}
            </h4>
            <p
              className={`${abFont.className} text-white font-medium text-sm ml-5 w-[500px] mt-2 dark:text-white`}
            >
              {services[service].description}{" "}
              {/* Mostrar la descripción del servicio seleccionado */}
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Service image"
            className="z-0 w-full h-full object-cover"
            src={services[service].url} // Mostrar la imagen del servicio seleccionado
          />
          <div className="absolute inset-0 bg-black opacity-45"></div>
          <CardBody className="absolute bottom-8 z-10">
            <Button
              radius="md"
              size="lg"
              className={`${abFont.className} bg-primary-300 text-white px-5 ml-5 w-36`}
              color={"0" as never}
              onPress={() => {
                router.push(services[service].section);
              }}
            >
              Leer más
            </Button>
          </CardBody>
        </Card>

        <Swiper
          className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto sm:flex lg:hidden"
          grabCursor
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {services.map(({ title, description, url, section }, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <div
                className="w-auto h-[500px] col-span-12 sm:col-span-5 m-5 lg:hidden flex rounded-xl"
                style={{
                  position: "relative",
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                }}
              >
                {/* Capa de opacidad en el fondo, fuera del contenido */}
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

                {/* Contenido principal */}
                <div className="w-full h-full justify-center items-start relative z-10">
                  <div className="h-48 pt-24">
                    <h4 className="text-primary-300 font-bold font-roboto text-2xl mx-5">
                      {title}
                    </h4>
                    <div>
                      <p
                        className={`${abFont.className} text-white text-[11px] font-light mx-5 leading-3 mt-2 dark:text-white`}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full pt-8 text-end">
                    <Button
                      className={`${abFont.className} text-medium text-white z-50 bottom-1 mt-8 mr-3`}
                      color={"0" as never}
                      radius="full"
                      size="sm"
                      onPress={() => {
                        router.push(section);
                      }}
                    >
                      Leer más <MoveRight />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:mt-3 lg:mb-10 mb-0 -mt-16 w-full flex justify-center">
        <Button
          radius="md"
          size="lg"
          className={`${abFont.className} bg-black text-white w-64 font-semibold text-md`}
          color={"0" as never}
          onPress={() => {
            router.push(services[service].section);
          }}
        >
          Ver Todos los Servicios
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;
