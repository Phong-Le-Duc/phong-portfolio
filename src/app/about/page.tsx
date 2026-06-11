import Link from "next/link";

export default function AboutPage() {
    const technologies = [
        "TypeScript",
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "Node.js (npm)",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "SASS / SCSS",
        "Git & GitHub",
        "REST APIs (fetch, async/await)",
        "Postman / Insomnia",
    ];

    const technologiesInProgress = [
        "Express.js",
        "PostgreSQL",
        "ORM (Prisma)",
    ];

    const skills = [
        "Component-based frontend development",
        "API integration and async data handling (JSON)",
        "Responsive and mobile-first web design",
        "Troubleshooting, debugging, and iterative development",
        "Git/GitHub workflow (version control)",
        "Basic web application performance optimization",
        "Cross-functional collaboration across design, UX, and development",
        "Translating wireframes/mockups into functional UI",
        "User-centered development (UX thinking in frontend solutions)",
        "Code structuring with maintainability and scalability in mind",
    ];

    return (
        <main className="mx-8 py-10">
            <section className="max-w-4xl">
                <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">About me</h1>


                <div className="mt-4 max-w-3xl text-sm leading-6 text-gray-300 md:text-base space-y-4">
                    <p>
                        I am based in Tåstrup, where I live with my wife and our two young sons.
                        In my free time, I value spending time with my family and enjoying everyday life at home.
                    </p>

                    <p>
                        I am a person who enjoys building things — from music to code.
                        I am motivated by turning creative ideas into real, working solutions and by continuously improving my skills as a developer.
                    </p>

                    <p>
                        I am passionate about continuous learning and personal growth, and I often read books on design and software development,
                        ranging from <em>Don’t Make Me Think</em> to <em>The Pragmatic Programmer</em>.
                        Outside of tech, I enjoy all things science fiction and stories that explore new ideas and perspectives.
                    </p>
                </div>



                <details className="mt-4 max-w-3xl">
                    <summary className="cursor-pointer text-sm leading-6 font-normal text-blue-500 md:text-base">
                        My background & approach
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-gray-300 md:text-base space-y-4">
                        <p>
                            I am a trained frontend developer with a strong focus on building modern and responsive web applications.
                            I chose frontend because I enjoy working at the intersection of design and functionality, where user experience plays a central role.
                        </p>

                        <p>
                            My background in digital concept development has given me a strong understanding of branding, visual identity,
                            and user-centered design. It allows me to think beyond code and see digital products as complete experiences.
                        </p>

                        <p>
                            I am also interested in full stack development and am actively expanding my backend skills to better understand
                            the full development process. My approach to development is structured, detail-oriented, and focused on writing maintainable code.
                        </p>

                        <p>
                            I take pride in delivering high-quality solutions, with a strong focus on usability, performance, and attention to detail.
                            I enjoy continuous learning and see every project as an opportunity to improve my skills as a developer.
                        </p>

                    </div>
                </details>

                <Link
                    className="mt-3 inline-flex w-fit text-sm py-1 px-2 text-blue-500"
                    href="/images/Phong_LeDuc_CV_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View CV"
                >
                    View CV
                </Link>


            </section>

            <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">


                <div className="rounded-2xl border border-dashed border-gray-600 bg-black/30 p-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-700 bg-black">
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

            <section className="mt-12 grid gap-8 lg:grid-cols-3">
                <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold text-foreground">Technologies</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-blue-500 bg-blue-500/10 px-3 py-1 text-xs text-blue-500"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold text-foreground">Technologies in progress</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologiesInProgress.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-blue-500 bg-blue-500/10 px-3 py-1 text-xs text-blue-500"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-700 bg-white/5 p-6 lg:col-span-1">
                    <h2 className="text-xl font-semibold text-foreground">Development skills</h2>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-300">
                        {skills.map((skill) => (
                            <li key={skill} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main >
    );
}