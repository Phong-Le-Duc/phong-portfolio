export default function AboutAIPage() {
    const cards = [
        {
            title: "From pure implementation to orchestration",
            text: "Development is less about typing every character and more about guiding the system—deciding what to generate, what to craft by hand, and how to keep the codebase maintainable.",
        },
        {
            title: "From speed to validated speed",
            text: "Shipping fast is great, but breaking production isn't. AI is a fantastic accelerator for initial drafts, but architectural reviews, testing, and planning for scale are what turn fast code into long-term value.",
        },
        {
            title: "From writing code to owning outcomes",
            text: "The model doesn't sign off on production—I do. As a developer, I still take full ownership of correctness, performance, accessibility, and keeping debt off the team's plate.",
        },
    ];

    const principles = [
        "Use AI for leverage, not as an unquestioned authority",
        "Verify claims against docs and actual runtime behavior",
        "Review for edge cases, security, and accessibility",
        "Keep solutions simple enough for the team to maintain",
        "Prefer deep understanding over blind copy-pasting",
    ];

    return (
        <main className="mx-8 py-10">
            <section className="max-w-4xl">
                <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">About AI</h1>
                <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-4xl">How I work with AI in this paradigm shift</h2>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-300 md:text-base">
                    We are in a exciting era where developers aren&apos;t just writing every line from scratch—we&apos;re orchestrating intelligent tools, sanity-checking generated output, and making the final call on what is production-ready. I lean into this shift wholeheartedly, but with a healthy dose of practical skepticism: AI gives me speed, but engineering judgment keeps the ship steady.
                </p>
            </section>

            <section className="mt-10 grid gap-6 lg:grid-cols-3">
                {cards.map((item) => (
                    <article key={item.title} className="theme-surface rounded-2xl border border-gray-700 p-6 shadow-[0_4px_8px_-2px_rgba(59,130,246,0.85),0_14px_18px_-6px_rgba(59,130,246,0.4),0_28px_24px_-10px_rgba(59,130,246,0.25)]">
                        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-gray-300">{item.text}</p>
                    </article>
                ))}
            </section>

            <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <article className="theme-surface rounded-2xl border border-gray-700 p-6 shadow-[0_4px_8px_-2px_rgba(59,130,246,0.85),0_14px_18px_-6px_rgba(59,130,246,0.4),0_28px_24px_-10px_rgba(59,130,246,0.25)]">
                    <h3 className="text-xl font-semibold text-foreground">My practical AI workflow</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base">
                        I treat AI like a highly energetic junior assistant: incredible for brainstorming, rapid prototyping, and exploring alternative implementations, but in need of clear oversight. In production environments, I validate everything through docs, testing, and hands-on review. While my personal projects focus more on fast-paced experimentation, the goal is always code I understand inside and out—if a generated solution feels overly complex or hard to maintain, I happily rewrite it by hand.
                    </p>


                    <p className="mt-4 text-sm leading-6 text-gray-300 md:text-base">
                        Strong coding fundamentals matter now more than ever. Without them, it&apos;s far too easy to accept dangerously confident hallucinations. The better you understand how software works under the hood, the better your AI collaboration becomes.
                    </p>
                </article>

                <aside className="theme-surface rounded-2xl border border-dashed border-gray-600 p-6 shadow-[0_4px_8px_-2px_rgba(245,158,11,0.85),0_14px_18px_-6px_rgba(245,158,11,0.4),0_28px_24px_-10px_rgba(245,158,11,0.25)]">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Operating principles</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-300">
                        {principles.map((principle) => (
                            <li key={principle} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                                <span>{principle}</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </section>
        </main>
    );
}