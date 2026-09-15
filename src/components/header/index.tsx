"use client";
import styles from "./header.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HeaderThemeToggle } from "@/components/theme-toggle";
import BurgerMenuButton from "@/components/burger-menu";
import MobileMenuPanel from "@/components/mobile-menu-panel-v2";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    const pathname = usePathname();

    const linkClassName = (href: string) =>
        `${styles["site-header-link"]} ${pathname === href ? styles["site-header-link--active"] : ""}`;

    return (
        <header className="sticky top-0 z-50">





            <div className="site-header-bar flex justify-between items-center py-4 px-8 bg-black/80 backdrop-blur-sm">

                <Link href="/" className="flex items-center" aria-label="Home">
                    <p className="text-xl font-bold" >Phong Le Duc<span className="text-blue-500">.</span></p>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-300 [&>a]:transition-colors">
                        <Link
                            href="/my-projects"
                            aria-label="My Projects"
                            className={linkClassName("/my-projects")}
                        >
                            <span className={styles["site-header-link-label"]}>Projects</span>
                        </Link>

                        <Link
                            href="/about"
                            aria-label="About Me"
                            className={linkClassName("/about")}
                        >
                            <span className={styles["site-header-link-label"]}>About Me</span>
                        </Link>

                        <Link
                            href="/about-ai"
                            aria-label="About AI"
                            className={linkClassName("/about-ai")}
                        >
                            <span className={styles["site-header-link-label"]}>About AI</span>
                        </Link>

                        <Link
                            href="/contact"
                            aria-label="Contact"
                            className={linkClassName("/contact")}
                        >
                            <span className={styles["site-header-link-label"]}>Contact</span>
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
