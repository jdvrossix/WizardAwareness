"use client"; // Esto es crucial para componentes con lógica del cliente

import React from "react";

const LiberandoDeudas = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#113964] text-white overflow-hidden py-24 sm:py-32"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Contenedor de texto y botones */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="block text-2xl md:text-3xl font-medium mb-2">Wizard Awareness</span>
            <span className="block text-5xl md:text-6xl font-extrabold">Liberando Deudas</span>
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-justify">
            Cuando hablamos de deudas, a menudo pensamos en términos económicos, sin embargo, en Wizard Awareness, vamos más allá de lo visible. Abordamos deudas en un nivel más profundo, permitiendo soltar y transformar cualquier situación que obstaculice el flujo de tu vitalidad, incluyendo, por supuesto, el dinero. Esta técnica facilita una transformación profunda para liberar bloqueos y promover un flujo de energía más armonioso en todos los aspectos de tu vida.
          </p>
          <p className="text-lg font-semibold mb-8 text-center">26 Septiembre 2024</p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            {/* Botones de pago */}
            <a
              href="https://checkout.bold.co/payment/LNK_2I2717S02K" // Reemplazar con la URL del punto de pago en COP
              className="inline-block px-6 py-4 text-lg font-bold text-white bg-[#FF5722] border-2 border-[#FF5722] rounded-lg shadow-lg hover:bg-[#E64A19] hover:border-[#E64A19] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              <span className="block">Liberando Deudas</span>
              <span className="block">415.000 COP</span>
            </a>

            <a
              href="https://payco.link/3024795" // Reemplazar con la URL del punto de pago en USD
              className="inline-block px-6 py-4 text-lg font-bold text-white bg-[#4CAF50] border-2 border-[#4CAF50] rounded-lg shadow-lg hover:bg-[#388E3C] hover:border-[#388E3C] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              <span className="block">Liberando Deudas</span>
              <span className="block">100 USD</span>
            </a>

          </div>
        </div>

        {/* Contenedor de la imagen */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              src="/img03WA.png" // Asegúrate de que la ruta de la imagen sea correcta
              alt="Imagen ilustrativa de Wizard Awareness"
              className="w-full max-w-md object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-500 ease-in-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiberandoDeudas;
