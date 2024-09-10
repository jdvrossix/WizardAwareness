"use client"; // Esto es crucial para componentes con lógica del cliente

import React from "react";
import Image from "next/image";
import CoverImage from "../public/img01WA.png"; // Asegúrate de que la ruta sea correcta y la imagen esté disponible

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-gradient-to-b from-[#1A1A40] to-[#113964] p-8">
      {/* Contenedor Izquierdo: Información del curso */}
      <div className="text-white space-y-6 lg:w-1/2 animate-fade-in">
        <h2 className="text-2xl lg:text-3xl font-light tracking-widest text-[#FFD700]">
          Ruth Suárez
        </h2>
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#007CF0]">
          Wizard Awareness
        </h1>

        <p className="text-lg lg:text-xl text-gray-200 max-w-lg text-justify">
          Descubre el poder oculto disponible para ti con nuestro curso
          intensivo. Potencia tu mente y habilidades con técnicas avanzadas de
          magia cuántica.
        </p>
        {/* Botón "Inscríbete Ahora" que redirige a la sección "clases" */}
        <a
          href="#clases" // Asegúrate de que el ID coincida con la sección de Clases
          className="inline-block px-6 py-3 bg-[#00FFA3] hover:bg-[#007CF0] text-[#113964] font-bold rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
        >
          Inscríbete Ahora
        </a>
      </div>

      {/* Contenedor Derecho: Imagen de la portada */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 animate-slide-in relative">
        <div className="w-80 h-auto lg:w-96 bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
          <Image
            src={CoverImage} // Usa la imagen importada correctamente
            alt="Portada del curso Wizard Awareness"
            layout="responsive"
            width={800}
            height={600}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
