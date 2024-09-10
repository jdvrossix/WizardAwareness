"use client"; // Esto es crucial para componentes con lógica del cliente

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#113964] text-white overflow-hidden py-24 sm:py-32"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Contenedor de la imagen */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              src="/img02WA.jpg" // Asegúrate de que la ruta de la imagen sea correcta
              alt="Imagen ilustrativa de Wizard Awareness"
              className="w-full max-w-md object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-500 ease-in-out"></div>
          </div>
        </div>
        
        {/* Contenedor de texto y botón */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center md:text-left space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Wizard Awareness
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Conexión Multidimensional
          </p>
          {/* Botón "LO ELIJO" */}
          <a
            href="#clases" // Asegúrate de que el ID coincida con la sección de Clases y Formaciones
            className="inline-block px-8 py-4 text-lg font-bold text-[#113964] bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            LO ELIJO
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
