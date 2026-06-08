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
                <p className="text-sm uppercase tracking-[0.3em] text-blue-500">About me</p>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-300 md:text-base">
                    I am a frontend developer focused on modern, user-friendly solutions where design and code work closely
                    together. I build with high quality, strong visual attention, and a clear goal of continuously expanding
                    my backend skills.
                </p>

                <details className="mt-4 max-w-3xl">
                    <summary className="cursor-pointer text-sm leading-6 font-normal text-blue-300 md:text-base">
                        Read more
                    </summary>
                    <div className="mt-3 space-y-4 text-sm leading-6 text-gray-300 md:text-base">
                        <p>
                            I am a visual and detail-oriented developer with a passion for creating modern,
                            user-friendly, and well-crafted digital solutions. I thrive at the intersection of design
                            and code, where both functionality and user experience play a crucial role.
                        </p>
                        <p>
                            As a trained modern frontend developer, I have strong skills in building responsive and
                            interactive web applications. At the same time, I am interested in the full stack and have
                            a clear goal of continuously developing my backend skills so I can contribute across the
                            entire development process.
                        </p>
                        <p>
                            I also come with a background in digital concept development, which has given me a solid
                            understanding of branding, visual identity, digital communication, and user-centered design.
                            That experience means I do not only see a website as code, but as a complete experience where
                            design, technology, and business need to work together.
                        </p>
                        <p>
                            I take pride in delivering high-quality solutions, bringing a sharp eye for detail, and
                            continuously learning and growing as a developer.
                        </p>
                    </div>
                </details>
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
                    <h2 className="text-xl font-semibold text-white">Technologies</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-gray-700 bg-black/30 px-3 py-1 text-xs text-gray-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold text-white">Technologies in progress</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologiesInProgress.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-blue-500/50 bg-blue-500/10 px-3 py-1 text-xs text-blue-200"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-700 bg-white/5 p-6 lg:col-span-1">
                    <h2 className="text-xl font-semibold text-white">Development skills</h2>
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
        </main>
    );
}