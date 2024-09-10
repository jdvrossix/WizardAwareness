"use client"; 

import React from "react";

const VideoPrincipal = () => {
  return (
    <section id="sponsors" className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 flex flex-col items-center">
      {/* Título atractivo y moderno */}
      <h2 className="text-center text-3xl lg:text-4xl font-extrabold mb-8 text-[#113964] tracking-wide">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#113964] to-[#345a7c]">
          Descubre de qué trata este curso
        </span>
      </h2>

      {/* Contenedor para el video */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        {/* Envoltura para controlar la altura con proporción 16:9 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/68kGgAeBFw0?si=vj23scKVeG36Ij_W"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
            style={{ minHeight: '446px' }}  
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoPrincipal;
