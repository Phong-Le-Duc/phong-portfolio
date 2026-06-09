import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./hero_bg.module.css";


export default function Hero() {

    return (
        <section className="relative w-full overflow-hidden py-10 md:py-10 flex flex-col justify-center max-[768px]:-mx-4 max-[768px]:w-[calc(100%+2rem)] max-[768px]:px-4">

            <div>
                {/* strong core glow */}
                <div
                    aria-hidden="true"
                    className={styles.coreGlow}
                />

                {/* soft outer halo */}
                <div
                    aria-hidden="true"
                    className={styles.outerHalo}
                />
            </div>

            <div className="relative z-10  flex flex-col gap-4 ">
                <p className="hero-role-badge self-start text-sm max-[350px]:text-xs bg-gray-900 px-2 py-1 rounded-lg text-blue-500">
                    WEB / FRONTEND DEVELOPER
                </p>

                <h1 className="text-4xl max-[350px]:text-3xl">
                    I build clean, <br /> functional web<br /> experiences
                    <span className="text-blue-500">.</span>
                </h1>

                <p className="max-[350px]:text-sm">
                    I'm a developer who loves building things <br /> for the web. Here are some of my projects.
                </p>
            </div>

            <div className="mt-6 flex flex-row gap-8 max-[310px]:flex-col max-[310px]:gap-3">
                <Link
                    className="self-start inline-flex w-fit items-center gap-2 text-sm text-white bg-blue-700 p-2 rounded-lg"
                    href="/my-projects"
                    aria-label="View my projects"
                >
                    View Projects <FaArrowRightLong className="h-3 w-3" />
                </Link>

                <Link
                    className="self-start w-fit text-sm p-2 border-b-2 border-blue-700"
                    href="/about"
                    aria-label="About me"
                >
                    About me
                </Link>
                <Link
                    className="self-start w-fit text-sm p-2 border-b-2 border-blue-700"
                    href="/about-ai"
                    aria-label="About AI"
                >
                    About AI
                </Link>
            </div>



        </section >
    )
}