import React from "react";

const ClasesYFormaciones = () => {
  return (
    <section
      id="clases-y-formaciones"
      className="w-full bg-[#113964] text-white py-16 sm:py-24"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Clases y Formaciones
        </h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          {/* Columna 1 */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-8">
            <div className="relative w-full max-w-xs">
              <img
                src="./Nivel1WA.png" // Reemplaza con la URL correcta de la imagen
                alt="Nivel 1 Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="#" // Reemplaza con la URL del punto de pago en COP
                className="inline-block px-6 py-4 text-lg font-bold text-white bg-[#1A1C20] border-2 border-[#1A1C20] rounded-lg shadow-lg hover:bg-[#0F0F0F] hover:border-[#0F0F0F] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Nivel 1 <br /> 622.000 COP
              </a>
              <a
                href="#" // Reemplaza con la URL del punto de pago en USD
                className="inline-block px-6 py-4 text-lg font-bold text-[#1A1C20] bg-[#BFDEFF] border-2 border-[#BFDEFF] rounded-lg shadow-lg hover:bg-[#A8C9FF] hover:border-[#A8C9FF] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Nivel 1 <br /> 150 USD
              </a>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-8">
            <div className="relative w-full max-w-xs">
              <img
                src="./Nivel2WA.png" // Reemplaza con la URL correcta de la imagen
                alt="Nivel II Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="#" // Reemplaza con la URL del punto de pago en COP
                className="inline-block px-6 py-4 text-lg font-bold text-white bg-[#1A1C20] border-2 border-[#1A1C20] rounded-lg shadow-lg hover:bg-[#0F0F0F] hover:border-[#0F0F0F] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Nivel II <br /> 1.042.000 COP
              </a>
              <a
                href="#" // Reemplaza con la URL del punto de pago en USD
                className="inline-block px-6 py-4 text-lg font-bold text-[#1A1C20] bg-[#BFDEFF] border-2 border-[#BFDEFF] rounded-lg shadow-lg hover:bg-[#A8C9FF] hover:border-[#A8C9FF] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Nivel II <br /> 250 USD
              </a>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-8">
            <div className="relative w-full max-w-xs">
              <img
                src="./EWA.png" // Reemplaza con la URL correcta de la imagen
                alt="EWA Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="#" // Reemplaza con la URL del punto de pago en COP
                className="inline-block px-6 py-4 text-lg font-bold text-white bg-[#1A1C20] border-2 border-[#1A1C20] rounded-lg shadow-lg hover:bg-[#0F0F0F] hover:border-[#0F0F0F] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                EWA <br /> 2.222.000 COP
              </a>
              <a
                href="#" // Reemplaza con la URL del punto de pago en USD
                className="inline-block px-6 py-4 text-lg font-bold text-[#1A1C20] bg-[#BFDEFF] border-2 border-[#BFDEFF] rounded-lg shadow-lg hover:bg-[#A8C9FF] hover:border-[#A8C9FF] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                EWA <br /> 540 USD
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClasesYFormaciones;
