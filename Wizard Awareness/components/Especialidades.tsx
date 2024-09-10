"use client";

import React from "react";

const Especialidades = () => {
  return (
    <section
      id="especialidades"
      className="relative w-full bg-white text-[#113964] py-16 sm:py-24"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Especialidades
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Especialidad ADN Wizard Awareness */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">
            <div className="relative w-full max-w-xs mx-auto">
              <img
                src="./ADNWA.png" // Reemplaza con la URL correcta de la imagen
                alt="ADN Wizard Awareness Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                ADN Wizard Awareness
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-justify">
                ADN Wizard Awareness es una técnica cuántica que, utilizando los principios de la física cuántica, te invita a reconocer y transformar la información contenida en tu ADN. El ADN no solo afecta tus características físicas y emocionales, sino que también permite modificar y mejorar aspectos de tu salud, bienestar y capacidades personales. Al abordar el ADN desde una perspectiva energética, facilita una reestructuración de tus patrones internos y externos, logrando un equilibrio y armonía más profundos.
                <br /><br />
                <span className="font-semibold">Te dejo un regalo de lo que recibirás en esta magnífica clase:</span>
                <br />
                <span className="font-medium text-blue-600 underline">
                  <a 
                    href="https://youtu.be/wUW_1vVqiB0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Video del Regalo
                  </a>
                </span>
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#" // Reemplaza con la URL del punto de pago en COP
                  className="inline-block px-8 py-4 text-lg font-bold text-white bg-[#113964] border-2 border-[#113964] rounded-lg shadow-lg hover:bg-[#0d3d6b] hover:border-[#0d3d6b] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">ADN</span>
                  <span className="block">741.000 COP</span>
                </a>
                <a
                  href="#" // Reemplaza con la URL del punto de pago en USD
                  className="inline-block px-8 py-4 text-lg font-bold text-[#113964] bg-[#BFDEFF] border-2 border-[#BFDEFF] rounded-lg shadow-lg hover:bg-[#A8C9FF] hover:border-[#A8C9FF] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">ADN</span>
                  <span className="block">180 USD</span>
                </a>
              </div>
            </div>
          </div>

          {/* Especialidad Relaciónmagic */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">
            <div className="relative w-full max-w-xs mx-auto">
              <img
                src="./img06WA.png" // Reemplaza con la URL correcta de la imagen
                alt="Relaciónmagic Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Relaciónmagic
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-justify">
                Relaciónmagic, una especialidad de Wizard Awareness, te permite crear relaciones amables, sanas y grandiosas. Reconocerás cómo has estado formando tus relaciones y recibirás herramientas prácticas para establecer conexiones magníficas desde el punto de vista energético.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#" // Reemplaza con la URL del punto de pago en COP
                  className="inline-block px-8 py-4 text-lg font-bold text-white bg-[#113964] border-2 border-[#113964] rounded-lg shadow-lg hover:bg-[#0d3d6b] hover:border-[#0d3d6b] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">Relaciónmagic</span>
                  <span className="block">741.000 COP</span>
                </a>
                <a
                  href="#" // Reemplaza con la URL del punto de pago en USD
                  className="inline-block px-8 py-4 text-lg font-bold text-[#113964] bg-[#BFDEFF] border-2 border-[#BFDEFF] rounded-lg shadow-lg hover:bg-[#A8C9FF] hover:border-[#A8C9FF] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">Relaciónmagic</span>
                  <span className="block">180 USD</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
