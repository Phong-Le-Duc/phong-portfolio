import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";

export default function Header() {

    return (
        <header className="sticky top-0 z-50">





            <div className="flex justify-between items-center py-4 px-8">

                <Link href="/" className="flex items-center" aria-label="Home">
                    <p className="text-xl font-bold" >Phong Le Duc<span className="text-blue-500">.</span></p>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-8 text-sm text-gray-300 [&>a]:transition-colors [&>a]:hover:text-white">
                        <Link href="/" aria-label="My Projects">
                            Projects
                        </Link>
                        <Link href="/" aria-label="About">
                            About
                        </Link>
                        <Link href="/" aria-label="Contact">
                            Contact
                        </Link>
                    </nav>

                    <div className="">
                        <ThemeToggle />
                    </div>

                </div>

                <button className="md:hidden mr-2 " aria-label="Open menu">
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>





        </header >
    )
}
