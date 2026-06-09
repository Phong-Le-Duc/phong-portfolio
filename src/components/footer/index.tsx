import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {

    return (
        <footer className="mt-10 mb-8 text-center text-sm text-gray-500">
            <p>
                &copy; {new Date().getFullYear()} Phong Le Duc. All rights reserved.
            </p>

            <div className="flex gap-4 justify-center mt-4 text-lg text-gray-400">
                <Link href="https://github.com/Phong-Le-Duc/Phong-Le-Duc" target="_blank" rel="noreferrer"><AiOutlineGithub /></Link>
                <Link href="https://www.linkedin.com/in/phong-le-duc-650899254" target="_blank" rel="noreferrer"><FaLinkedin /></Link>
                <Link href="mailto:phongleduc@gmail.com" target="_blank" rel="noreferrer"><MdMailOutline /></Link>
            </div>
        </footer>
    )
}