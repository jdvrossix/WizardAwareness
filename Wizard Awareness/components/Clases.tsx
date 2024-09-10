import React from "react";

const Clases = () => {
  return (
    <section
      id="clases"
      className="relative w-full bg-white text-[#113964] py-16 sm:py-24"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Clases
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Clase Animalmagic */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">
            <div className="relative w-full max-w-xs mx-auto">
              <img
                src="./img04WA.png" // Reemplaza con la URL correcta de la imagen
                alt="Animalmagic Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Animalmagic
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-justify">
                ¿Qué revela tu mascota sobre tu clan familiar?
                <br /><br />
                ¿Sabías que los síntomas y comportamientos de tu mascota pueden reflejar dinámicas dentro de tu clan familiar? En esta clase, aprenderás a descodificar y transformar con herramientas de wizard awareness, las situaciones que afectan tanto a ti como a tu mascota. Desarrollarás habilidades para mejorar la convivencia, la salud y otros aspectos importantes, facilitando una relación más armoniosa y equilibrada.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#" // Reemplaza con la URL del punto de pago en COP
                  className="inline-block px-8 py-4 text-lg font-bold text-white bg-[#1A1C20] border-2 border-[#1A1C20] rounded-lg shadow-lg hover:bg-[#0F0F0F] hover:border-[#0F0F0F] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">Animalmagic</span>
                  <span className="block">741.000 COP</span>
                </a>
                <a
                  href="#" // Reemplaza con la URL del punto de pago en USD
                  className="inline-block px-8 py-4 text-lg font-bold text-[#1A1C20] bg-[#BFDEFF] border-2 border-[#BFDEFF] rounded-lg shadow-lg hover:bg-[#A8C9FF] hover:border-[#A8C9FF] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">Animalmagic</span>
                  <span className="block">180 USD</span>
                </a>
              </div>
            </div>
          </div>

          {/* Clase Lipomagic */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">
            <div className="relative w-full max-w-xs mx-auto">
              <img
                src="./img05WA.png" // Reemplaza con la URL correcta de la imagen
                alt="Lipomagic Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Lipomagic
              </h3>
              <p className="text-lg md:text-xl font-light leading-relaxed text-justify">
                Tu cuerpo habla.... ¿cómo te comunicas con tu cuerpo?
                <br /><br />
                En esta clase recibirás herramientas de wizard awareness, para reconocer lo que tu cuerpo dice de ti, entrar en congruencia y transformar de adentro hacia afuera.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#" // Reemplaza con la URL del punto de pago en COP
                  className="inline-block px-8 py-4 text-lg font-bold text-white bg-[#1A1C20] border-2 border-[#1A1C20] rounded-lg shadow-lg hover:bg-[#0F0F0F] hover:border-[#0F0F0F] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">Lipomagic</span>
                  <span className="block">741.000 COP</span>
                </a>
                <a
                  href="#" // Reemplaza con la URL del punto de pago en USD
                  className="inline-block px-8 py-4 text-lg font-bold text-[#1A1C20] bg-[#BFDEFF] border-2 border-[#BFDEFF] rounded-lg shadow-lg hover:bg-[#A8C9FF] hover:border-[#A8C9FF] transition-transform duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  <span className="block">Lipomagic</span>
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

export default Clases;
