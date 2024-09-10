"use client"; // Esto es crucial para componentes con lógica del cliente

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const levels = [
    {
        title: "Nivel I: Despertando el mago que habita en ti",
        modules: [
            "Modulo 1 Habilidades psíquicas - Percepción extrasensorial",
            "Modulo 2 Vidas del futuro pasado, incidencias en el presente. Regalos y transformación.",
            "Modulo 3 Magia: Instituir, reconocer y reclamar tus poderes y conocimiento mágico para acceder a tu poder."
        ]
    },
    {
        title: "Nivel II: Crear, transformar y actualizar por medio de la física cuántica cualquier área de tu vida",
        modules: [
            "Modulo 1 El doble cuántico y programa sobre el cual has creado tu vida",
            "Modulo 2 La esencia pura de ti y tu ser infinito. Conexión y creación desde el campo cuántico, la matrix e incidencia de la entropía, agujeros negros, agujeros blancos",
            "Modulo 3 Leyes biológicas, cuerpo físico e integración cuántica en el multiverso",
            "Modulo 4 Multiverse flow: Creaciones mágicas desde y hacia la vida que te gustaría vivir... Si la vida fuera un juego mágico creado en los multiversos, en el planeta tierra y con tu cuerpo. ¿Cuál sería el juego que te gustaría vivir?"
        ]
    },
    {
        title: "Nivel III: Formadores de Wizard Awareness. Entrenamiento para facilitadores de la técnica",
        modules: [
            "Áreas de Aplicación Wizard Awareness: Relaciones, cuerpo, dinero, finanzas, negocios, casas o vivienda, mascotas..."
        ]
    }
];

const FAQ = () => {
    return (
        <section
            id="faq"
            className="relative w-full bg-white text-gray-800 overflow-hidden py-16 sm:py-24"
        >
            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-[#113964]">
                    <span className="bg-gradient-to-b from-[#113964] to-[#1E3A8A] text-transparent bg-clip-text">
                        Wizard Awareness
                    </span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#113964]">
                    Liberando Deudas
                </h3>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-4xl mx-auto"
                >
                    {levels.map((level, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <AccordionTrigger className="text-left text-xl font-bold p-4 border-b border-gray-200 bg-[#F3F4F6] rounded-t-lg hover:bg-[#E5E7EB] transition-colors duration-300">
                                {level.title}
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-[#F9FAFB] text-lg text-gray-700">
                                {level.modules.map((module, i) => (
                                    <p key={i} className="mb-2">
                                        <strong className="font-semibold">
                                            {module.split(" ")[0]}
                                        </strong>
                                        {" "}
                                        {module.slice(module.indexOf(" ") + 1)}
                                    </p>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="flex justify-center mt-12">
                    <a
                        href="#clases" // Enlace a la sección de clases
                        className="inline-block px-8 py-4 text-lg font-bold text-[#113964] bg-white border-2 border-[#113964] rounded-lg shadow-lg hover:bg-[#113964] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                        LO ELIJO
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
