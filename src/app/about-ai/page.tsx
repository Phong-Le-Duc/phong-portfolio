export default function AboutAIPage() {
    const shifts = [
        {
            title: "From pure implementation to orchestration",
            text: "A big part of modern development is now deciding what should be generated, what should be hand-crafted, and how everything fits together in a maintainable system.",
        },
        {
            title: "From speed to validated speed",
            text: "Shipping faster only matters if quality stays high. AI can accelerate drafts, but architecture, testing, and review are what make the speed meaningful.",
        },
        {
            title: "From writing code to owning outcomes",
            text: "The responsibility does not move to the model. As a developer, I still own correctness, performance, accessibility, and long-term maintainability.",
        },
    ];

    const principles = [
        "Use AI for leverage, not authority",
        "Verify claims against docs and runtime behavior",
        "Review for security, edge cases, and accessibility",
        "Keep code simple enough for teammates to maintain",
        "Prefer understanding over blind copy-paste",
    ];

    return (
        <main className="mx-8 py-10">
            <section className="max-w-4xl">
                <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">About AI</h1>
                <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-4xl">How I work with AI in this paradigm shift</h2>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-300 md:text-base">
                    We are in a major shift where developers are no longer only writing every line manually. We are now also
                    guiding intelligent tools, evaluating generated output, and deciding what is production-ready. I embrace
                    that shift, but I stay critical. AI helps me move faster, while engineering judgment keeps the result
                    reliable.
                </p>
            </section>

            <section className="mt-10 grid gap-6 lg:grid-cols-3">
                {shifts.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-gray-700 bg-white/5 p-6">
                        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-gray-300">{item.text}</p>
                    </article>
                ))}
            </section>

            <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <article className="rounded-2xl border border-gray-700 bg-white/5 p-6">
                    <h3 className="text-xl font-semibold text-foreground">My practical AI workflow</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base">
                        I use AI for exploration, first drafts, refactoring ideas, and implementation alternatives. Then I
                        validate everything through docs, testing, and manual review. If a generated solution is unclear,
                        over-engineered, or hard to maintain, I rewrite it.
                    </p>
                    <p className="mt-4 text-sm leading-6 text-gray-300 md:text-base">
                        Knowing how software works is still the foundation. Without strong coding fundamentals, it is easy to
                        accept confident but incorrect output. The better your engineering understanding, the better your AI
                        collaboration becomes.
                    </p>
                </article>

                <aside className="rounded-2xl border border-dashed border-gray-600 bg-black/20 p-6">
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