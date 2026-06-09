"use client";

import { useState } from "react";
import Link from "next/link";

import { HeaderThemeToggle } from "@/components/theme-toggle";
import BurgerMenuButton from "@/components/burger-menu";
import MobileMenuPanel from "@/components/mobile-menu-panel";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50">





            <div className="site-header-bar flex justify-between items-center py-4 px-8 bg-black/80 backdrop-blur-sm">

                <Link href="/" className="flex items-center" aria-label="Home">
                    <p className="text-xl font-bold" >Phong Le Duc<span className="text-blue-500">.</span></p>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-8 text-sm text-gray-300 [&>a]:transition-colors">
                        <Link href="/my-projects" aria-label="My Projects" className="site-header-link">
                            Projects
                        </Link>
                        <Link href="/about" aria-label="About" className="site-header-link">
                            About
                        </Link>
                        <Link href="/contact" aria-label="Contact" className="site-header-link">
                            Contact
                        </Link>
                    </nav>

                    <HeaderThemeToggle />

                </div>

                <BurgerMenuButton isOpen={isOpen} onToggle={toggleMenu} />

            </div >

            <div id="mobile-menu-panel">
                <MobileMenuPanel isOpen={isOpen} onClose={closeMenu} />
            </div>





        </header >
    )
}
