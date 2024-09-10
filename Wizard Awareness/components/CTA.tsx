import { Button } from "./ui/button";

const CTA = () => {
    return (
        <section id="requisitos" className="bg-white my-16 sm:my-24">
            <div className="container mx-auto text-center">
                {/* Título principal */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#113964]">
               

                    <span className="block text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-[#1E3A8A] to-[#113964] text-transparent bg-clip-text  mb-4">
                    Requisitos
                    </span>
                    <span className="block text-3xl md:text-4xl font-semibold"> Wizard Awareness</span>

              
                </h2>
                
                {/* Contenido de los requisitos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg md:text-xl text-[#1E3A8A]">
                    <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Nivel I</h3>
                        <p>La clase Liberando Deudas</p>
                    </div>
                    <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Nivel II</h3>
                        <p>Nivel 1</p>
                    </div>
                    <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Nivel III</h3>
                        <p>Niveles 1 y 2</p>
                    </div>
                    <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
                        <h3 className="text-xl font-bold mb-4">Especialidades</h3>
                        <p>Nivel 2</p>
                    </div>
                    <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
                        <h3 className="text-xl font-bold mb-4">Clases</h3>
                        <p>Animalmagic y lipomagic básico sin requisito</p>
                    </div>
                </div>

                {/* Botón de acción */}
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

export default CTA;
