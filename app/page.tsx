import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsors from "@/components/VideoPrincipal";
import About from "@/components/About";
import LD from "@/components/LiberandoDeudas";
import Clases from "@/components/Clases";
import Features from "@/components/Features";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import CyF from "@/components/CyF";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import FAQ2 from "@/components/FAQ2";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Especialidades from "@/components/Especialidades";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Sponsors />
            <About />
            <FAQ />
            <FAQ2 />
            <CTA />
            <LD />
            <Clases />
            <CyF />
            <Especialidades />

            <ScrollToTop />
        </>
    );
}
