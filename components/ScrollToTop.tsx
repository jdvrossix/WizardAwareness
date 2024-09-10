"use client";

import { useState, useEffect } from "react";
import { ArrowUpToLine } from "lucide-react";

import { Button } from "./ui/button";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    };

    return (
        <>
            {showTopBtn && (
                <Button
                    onClick={goToTop}
                    className="fixed bottom-4 right-4 opacity-90 shadow-md bg-[#113964] hover:bg-[#0d3d6b] text-white transition-all duration-300 ease-in-out"
                    size="icon"
                >
                    <ArrowUpToLine className="h-5 w-5" />
                </Button>
            )}
        </>
    );
};

export default ScrollToTop;
