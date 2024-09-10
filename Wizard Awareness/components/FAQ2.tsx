"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ2 = () => {
    return (
        <section
            id="faq2"
            className="relative w-full bg-[#113964] text-white overflow-hidden py-16 sm:py-24"
        >
            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-white">
                    <span className="bg-gradient-to-b from-white to-[#E5E7EB] text-transparent bg-clip-text">
                        Wizard Awareness
                    </span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
                    Próximas Fechas
                </h3>

                {/* Sección fija con clases y formaciones */}
                <div className="text-center mb-12">
                    <h4 className="text-xl md:text-2xl font-semibold text-white">
                        CLASES Y FORMACIONES
                    </h4>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-4xl mx-auto"
                >
                    <AccordionItem
                        value="item-1"
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <AccordionTrigger className="text-left text-xl font-bold p-4 border-b border-[#E5E7EB] bg-[#1E3A8A] rounded-t-lg hover:bg-[#2B4AAB] transition-colors duration-300">
                            Liberando deudas 26 Septiembre 2024
                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-[#1E3A8A] text-lg text-[#E5E7EB]">
                            <p>
                                La primera clase te ayudará a liberar tus deudas y establecer una base sólida.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <AccordionTrigger className="text-left text-xl font-bold p-4 border-b border-[#E5E7EB] bg-[#1E3A8A] rounded-t-lg hover:bg-[#2B4AAB] transition-colors duration-300">
                            Nivel I: Despertando el mago que habita en ti
                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-[#1E3A8A] text-lg text-[#E5E7EB]">
                            <p><strong>1 Modulo</strong> - 22 Noviembre 2024</p>
                            <p><strong>2 Modulo</strong> - 23 Noviembre 2024</p>
                            <p><strong>3 Modulo</strong> - 24 Noviembre 2024</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <AccordionTrigger className="text-left text-xl font-bold p-4 border-b border-[#E5E7EB] bg-[#1E3A8A] rounded-t-lg hover:bg-[#2B4AAB] transition-colors duration-300">
                            Nivel II: Crear, transformar y actualizar por medio de la física cuántica cualquier área de tu vida
                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-[#1E3A8A] text-lg text-[#E5E7EB]">
                            <p><strong>1 Modulo</strong> - 14 Septiembre 2024</p>
                            <p><strong>2 Modulo</strong> - 15 Septiembre 2024</p>
                            <p><strong>3 Modulo</strong> - 21 Septiembre 2024</p>
                            <p><strong>4 Modulo</strong> - 22 Septiembre 2024</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <AccordionTrigger className="text-left text-xl font-bold p-4 border-b border-[#E5E7EB] bg-[#1E3A8A] rounded-t-lg hover:bg-[#2B4AAB] transition-colors duration-300">
                            Nivel III: 28 - 29 Septiembre 2024
                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-[#1E3A8A] text-lg text-[#E5E7EB]">
                            <p>
                                Este nivel se llevará a cabo en dos días intensivos para completar el entrenamiento.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <AccordionTrigger className="text-left text-xl font-bold p-4 border-b border-[#E5E7EB] bg-[#1E3A8A] rounded-t-lg hover:bg-[#2B4AAB] transition-colors duration-300">
                            CLASES
                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-[#1E3A8A] text-lg text-[#E5E7EB]">
                            <p>Animalmagic - 22 Septiembre 2024</p>
                            <p>Lipomagic básico - 5 de Octubre 2024</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-6"
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <AccordionTrigger className="text-left text-xl font-bold p-4 border-b border-[#E5E7EB] bg-[#1E3A8A] rounded-t-lg hover:bg-[#2B4AAB] transition-colors duration-300">
                            Especialidades
                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-[#1E3A8A] text-lg text-[#E5E7EB]">
                            <p>ADN - 19 Octubre 2024</p>
                            <p>Negocios multidimensionales - 26 Octubre 2024</p>
                            <p>Energia del multiverso avanzado - 19 Septiembre 2024</p>
                            <p>Relacionmagic - 2 Noviembre 2024</p>
                            <p>Lipomagic Avanzado - 16 Noviembre 2024</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ2;
