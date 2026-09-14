"use client";

import styles from "./panel.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeaderThemeToggle } from "@/components/theme-toggle";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const navItems = [
    { href: "/", label: "Home", ariaLabel: "Home" },
    { href: "/my-projects", label: "Projects", ariaLabel: "My Projects" },
    { href: "/about", label: "About Me", ariaLabel: "About Me" },
    { href: "/about-ai", label: "About AI", ariaLabel: "About AI" },
    { href: "/contact", label: "Contact", ariaLabel: "Contact" },
];

export default function MobileMenuPanel({ isOpen, onClose }: Props) {
    const router = useRouter();
    const CLOSE_AFTER_NAV_MS = 280;
    const CLOSE_ANIMATION_MS = 930;
    const [isClosing, setIsClosing] = useState(false);
    const wasOpenRef = useRef(false);

    useEffect(() => {
        if (isOpen) {
            wasOpenRef.current = true;
            setIsClosing(false);
            return;
        }

        if (!wasOpenRef.current) {
            return;
        }

        setIsClosing(true);
        const timerId = window.setTimeout(() => {
            setIsClosing(false);
            wasOpenRef.current = false;
        }, CLOSE_ANIMATION_MS);

        return () => {
            window.clearTimeout(timerId);
        };
    }, [isOpen]);

    const shouldAnimateClosing = !isOpen && wasOpenRef.current;
    const panelVisible = isOpen || isClosing || shouldAnimateClosing;
    const menuPhaseClass = isOpen
        ? styles.menuOpen
        : shouldAnimateClosing || isClosing
            ? styles.menuClosing
            : styles.menuHidden;

    const handleNavigate = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        event.stopPropagation();
        router.push(href);

        window.setTimeout(() => {
            onClose();
        }, CLOSE_AFTER_NAV_MS);
    };

    return (
        <div
            className={`fixed inset-0 z-60 md:hidden ${panelVisible ? "pointer-events-auto" : "pointer-events-none"
                }`}
        >
            <div
                className={`mobile-menu-overlay absolute inset-0 bg-black/55 backdrop-blur-[1px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

            <nav
                onClick={onClose}
                className={`absolute right-0 top-0 h-full w-[50%] max-w-sm px-8 py-24 text-sm text-gray-200 transition-transform ${panelVisible ? "duration-300 translate-x-0" : "duration-0 translate-x-full"
                    } ${styles.panelSurface} ${menuPhaseClass}`}
            >
                <ul className={styles.menuLinks}>
                    {navItems.map((item) => (
                        <li key={item.href} className={styles.menuLinkItem}>
                            <Link
                                href={item.href}
                                aria-label={item.ariaLabel}
                                className={styles.menuLinkShell}
                                onClick={handleNavigate(item.href)}
                            >
                                <span className={styles.menuLinkLabel}>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.themeToggleWrap} onClick={(event) => event.stopPropagation()}>
                    <HeaderThemeToggle />
                </div>
            </nav>
        </div>
    );
}
