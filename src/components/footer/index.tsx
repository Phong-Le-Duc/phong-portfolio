import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {

    return (
        <footer className="ambient-text-muted mt-10 mb-8 text-center text-sm">
            <p>
                &copy; {new Date().getFullYear()} Phong Le Duc. All rights reserved.
            </p>

            <div className="ambient-text-secondary mt-4 flex justify-center gap-4 text-lg">
                <Link href="https://github.com/Phong-Le-Duc/Phong-Le-Duc" target="_blank" rel="noreferrer"><AiOutlineGithub /></Link>
                <Link href="https://www.linkedin.com/in/phong-le-duc-650899254" target="_blank" rel="noreferrer"><FaLinkedin /></Link>
                <Link href="mailto:phongleduc@gmail.com" target="_blank" rel="noreferrer"><MdMailOutline /></Link>
            </div>
        </footer>
    )
}