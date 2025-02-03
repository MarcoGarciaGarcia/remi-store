"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

const Ventas: React.FC = () => {
  // Estado para la hora y la fecha
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  // Función para formatear la hora y fecha
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const weekdays = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const weekday = weekdays[date.getDay()];

    return `${weekday} ${day} de ${month} ${year}`; // Asegúrate de formatear la fecha como desees
  };

  // Usamos useEffect para actualizar la hora y la fecha cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(formatTime(now));
      setDate(formatDate(now));
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-screen justify-start rounded-lg mr-14 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20">
      <h1 className="text-center text-white text-md font-semibold px-5 pt-5">
        Registra tu Asistenciasss
      </h1>
      <div className="grid justify-center w-full mx-10 py-6 pr-20 gap-5">
        <h3 className="text-white font-bold text-6xl text-center">{time}</h3>
        <label className="font-light text-sm text-white text-center">
          {date}
        </label>
        <Button
          className="text-primary-500 font-semibold bg-white rounded-lg w-72"
          color="primary"
          variant="ghost"
        >
          Entrada
        </Button>
      </div>
    </div>
  );
};

export default Ventas;
