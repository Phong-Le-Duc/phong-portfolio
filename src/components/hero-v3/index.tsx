import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroV3() {
    return (
        <section className="relative -mx-4 flex w-[calc(100%+2rem)] flex-col justify-center overflow-hidden py-10 px-4 md:py-12">
            <div className="absolute inset-0">
                <Image
                    src="/images/heroBackground_2.jpg"
                    alt="Abstract hero background"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/20" />
            </div>

            <div className="relative z-10 flex max-w-2xl flex-col gap-4 px-4 md:px-8">
                <p className="hero-role-badge self-start rounded-lg bg-gray-900 px-2 py-1 text-sm text-blue-500 max-[350px]:text-xs">
                    WEB / FRONTEND DEVELOPER
                </p>

                <h1 className="text-4xl text-white max-[350px]:text-3xl md:text-5xl">
                    A dream to build,<br />clean, accessible<br />web experiences
                    <span className="text-blue-500">.</span>
                </h1>

                <p className="max-w-xl text-gray-200 max-[350px]:text-sm">
                    Curious by nature and hardworking by habit. I&apos;m a junior frontend developer committed to evolving quickly, mastering modern frameworks, and delivering intuitive, reliable web applications.

                </p>
            </div>

            <div className="relative z-10 mt-4 flex flex-row gap-8 px-4 max-[310px]:flex-col max-[310px]:gap-3 md:px-8">
                {/* <Link
                    className="inline-flex w-fit items-center gap-2 self-start rounded-lg bg-blue-700 p-2 text-sm text-white"
                    href="/my-projects"
                    aria-label="View my projects"
                >
                    View Projects <FaArrowRightLong className="h-3 w-3" />
                </Link> */}

                <Link
                    className="w-fit self-start border-b-2 border-blue-700 p-2 text-sm text-white"
                    href="/images/Phong_LeDuc_CV_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View CV"
                >
                    View CV
                </Link>
            </div>
        </section>
    );
}
