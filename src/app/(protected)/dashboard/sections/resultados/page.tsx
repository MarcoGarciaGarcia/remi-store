"use client";

import { Card, CardBody } from "@nextui-org/react";
import BarGraph from "./components/bar-graph";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LineGraph from "./components/line-graph";

const PagosSection: React.FC = () => {
  return (
    <section className="h-screen">
      <h1 className="text-4xl font-sans text-center mt-5 text-black font-bold">
        Gestión de pagos
      </h1>
      <div className="flex gap-8 w-full -mt-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className="services-swiper relative mx-5 sm:mt-20 max-w-7xl h-80"
        >
          <SwiperSlide className="flex items-center justify-center relative mt-2 ml-1">
            <div className="card rounded-lg transition-transform duration-300 hover:z-10">
              <Card
                isBlurred
                className="shadow-lg rounded-lg bg-white max-w-[610px] h-[300px] animate-fade-right animate-appearance-in"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 h-full">
                    <div className="relative col-span-6 md:col-span-4 grid">
                      <h2 className="text-2xl text-center mt-3 text-black font-semibold font-sans">
                        Flujo total de ingresos
                      </h2>
                      <div className="-mt-12">
                        <div className="flex w-full ml-16 items-center">
                          <div className="bg-primary-500 w-3 h-3"></div>
                          <p className="text-sm text-center ml-1 mt-2 text-black font-sans">
                            Alto
                          </p>
                        </div>
                        <div className="flex w-full ml-16 items-center">
                          <div className="bg-primary-300 w-3 h-3"></div>
                          <p className="text-sm text-center ml-1 mt-2 text-black font-sans">
                            Medio
                          </p>
                        </div>
                        <div className="flex w-full ml-16 items-center">
                          <div className="bg-primary-700 w-3 h-3"></div>
                          <p className="text-sm text-center ml-1 mt-2 text-black font-sans">
                            Bajo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col col-span-6 md:col-span-8 m-5">
                      <BarGraph></BarGraph>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center relative mt-2">
            <div className="card rounded-lg transition-transform duration-300 hover:z-10">
              <Card
                isBlurred
                className="shadow-lg rounded-lg bg-white max-w-[610px] h-[300px] animate-appearance-in"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 h-full">
                    <div className="relative col-span-6 md:col-span-4 grid ml-5">
                      <h2 className="text-2xl text-center mt-3 font-semibold text-black font-sans">
                        Comportamiento de las ventas
                      </h2>
                      <div className="-mt-8">
                        <div className="flex w-full ml-16 items-center">
                          <div className="bg-primary-500 w-3 h-3"></div>
                          <p className="text-sm text-center ml-1 mt-2 text-black font-sans">
                            Alto
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col col-span-6 md:col-span-8 m-5">
                      <LineGraph></LineGraph>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PagosSection;
