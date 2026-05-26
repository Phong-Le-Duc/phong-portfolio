import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {

    return (
        <section className="w-full">

            <div className="">
                <p className="inline-block text-sm bg-gray-900 px-2 py-1 rounded-lg text-blue-500">
                    WEB / FRONTEND DEVELOPER
                </p>
                <h1>I build clean, <br /> functional web<br /> experiences<span className="text-blue-500">.</span></h1>
                <p>I'm a developer who loves building things <br /> for the web. Here are some of my projects.</p>
            </div>

            <div>
                <Link href="/" aria-label="View my projects" className="text-sm">
                    View Projects <FaArrowRightLong className="inline-block w-4 h-4" />
                </Link>

                <Link href="/" aria-label="View my projects" className="text-sm">
                    About me
                </Link>
            </div>

        </section >
    )
}