import Skillset from "@/components/skillset";
import Link from "next/link";

export default function AboutPage() {

    return (
        <main className="mx-8 py-10">

            <div className="flex space-around items-center gap-4">
                <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">About me</h1>

            </div>
            <section className="mt-6 max-w-4xl">
                <div className="theme-surface overflow-hidden rounded-2xl border border-gray-700">
                    <div className="relative aspect-video w-full">
                        <iframe
                            src="https://player.vimeo.com/video/1161750448"
                            className="absolute inset-0 h-full w-full"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            allowFullScreen
                            title="About me video"
                        />
                    </div>
                </div>
            </section>

            <section className="mt-10 max-w-4xl">

                <div className="max-w-3xl text-sm leading-6 text-gray-300 md:text-base space-y-4">
                    <p>
                        Based in Tåstrup, I live with my wife and our two young sons.
                        Family time keeps me grounded, while music production and exploring new technologies spark my curiosity.
                    </p>

                    <p>
                        At heart, I am a builder — whether crafting soundscapes or writing code.
                        I thrive on turning abstract ideas into functional, real-world solutions while constantly sharpening my software craft.
                    </p>

                    <p>
                        Driven by a passion for continuous learning, I regularly dive into design and engineering books like <em>Don&apos;t Make Me Think</em> and <em>The Pragmatic Programmer</em>.
                        When the screen turns off, you’ll usually find me lost in a great sci-fi story, serving up a fresh take—both in code and in the kitchen.
                    </p>
                </div>



                <details className="mt-4 max-w-3xl">
                    <summary className="cursor-pointer text-sm font-normal leading-6 text-blue-500 md:text-base">
                        My background & approach
                    </summary>
                    <div className="mt-3 space-y-4 text-sm leading-6 text-gray-300 md:text-base">
                        <p>
                            As a trained frontend developer, I thrive at the intersection of design and logic—where user experience directly meets clean code.
                        </p>

                        <p>
                            With a background in digital concept development, I look beyond the DOM. I view applications holistically, ensuring branding, visual identity, and user-centered design flow seamlessly together.
                        </p>

                        <p>
                            While frontend is home base, I like looking under the hood. I am actively diving into full-stack architecture—expanding into backend development to master the complete ecosystem, from raw data to tangible, human-centered UIs.
                        </p>
                        <p>
                            My approach is structured, detail-driven, and centered on maintainable code. I take pride in delivering solutions where performance and sharp, flexible engineering go hand-in-hand.
                        </p>
                    </div>
                </details>

                <Link
                    className="about-cv-link mt-8 inline-block border-b-2 border-blue-700 text-sm text-white"
                    href="/images/Phong_LeDuc_CV_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View CV"
                >
                    View CV
                </Link>

            </section>

            <section className="mt-16">
                <Skillset />
            </section>




        </main >
    );
}