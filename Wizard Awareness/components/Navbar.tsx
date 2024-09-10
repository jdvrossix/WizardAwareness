"use client";

import Link from "next/link";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Logo from "../public/logo1.jpg";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full bg-white dark:bg-background border-b border-gray-200 dark:border-slate-700">
            <NavigationMenu className="mx-auto">
                <div className="container h-20 px-4 w-screen flex justify-between items-center">
                    {/* Logo y Título */}
                    <Link href="/" className="flex items-center space-x-3 animate-fade-in">
                        {/* Mostrar el logo con mayor tamaño */}
                        <img src={Logo.src} alt="Logo" className="h-14 w-14 object-contain transition-transform duration-500 hover:scale-110" />
                        <span className="text-3xl font-bold text-gray-800 dark:text-white transition-opacity duration-500 hover:opacity-80">
                            Wizard Awareness
                        </span>
                    </Link>
                </div>
            </NavigationMenu>
        </nav>
    );
};

export default Navbar;
