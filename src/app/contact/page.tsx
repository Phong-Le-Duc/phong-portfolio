import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="mx-8 py-10">
            <section className="max-w-4xl">
                <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">Contact</h1>
                <h2 className="contact-page-title mt-3 text-2xl  text-white md:text-4xl">Let&apos;s build something great</h2>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-300 md:text-base">
                    I am open to new opportunities, internships, and freelance projects. Feel free to reach out if you want to
                    collaborate on modern, user-focused web experiences.
                </p>
            </section>

            <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
                    <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-2xl">
                        <Image
                            src="/images/phong.jpeg"
                            alt="Portrait of Phong Le Duc"
                            fill
                            className="object-cover"
                            sizes="176px"
                            priority
                        />
                    </div>

                    <div className="mt-5 text-center">
                        <h2 className="text-xl font-semibold text-white">Phong Le Duc</h2>
                        <p className="mt-1 text-sm text-gray-400">Frontend Developer</p>
                    </div>

                    <div className="mt-6 space-y-3 text-sm">
                        <a
                            href="tel:+4542582561"
                            aria-label="Call 42 58 25 61"
                            className="block rounded-lg border border-blue-500 bg-blue-500/10 px-4 py-3 text-gray-200 transition hover:bg-blue-500/20 hover:text-white"
                        >
                            Phone: 42 58 25 61
                        </a>
                        <a
                            href="mailto:phongleduc@gmail.com"
                            aria-label="Send email to phongleduc@gmail.com"
                            className="block rounded-lg border border-blue-500 bg-blue-500/10 px-4 py-3 text-gray-200 transition hover:bg-blue-500/20 hover:text-white"
                        >
                            Email: phongleduc@gmail.com
                        </a>
                        <a
                            href="https://github.com/Phong-Le-Duc/Phong-Le-Duc"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open GitHub profile"
                            className="block rounded-lg border border-blue-500 bg-blue-500/10 px-4 py-3 text-gray-200 transition hover:bg-blue-500/20 hover:text-white"
                        >
                            GitHub: github.com/Phong-Le-Duc/Phong-Le-Duc
                        </a>
                        <a
                            href="https://www.linkedin.com/in/phong-le-duc-650899254"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open LinkedIn profile"
                            className="block rounded-lg border border-blue-500 bg-blue-500/10 px-4 py-3 text-gray-200 transition hover:bg-blue-500/20 hover:text-white"
                        >
                            LinkedIn: linkedin.com/in/phong-le-duc-650899254
                        </a>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
                    <h2 className="text-2xl font-semibold text-white">Quick contact</h2>
                    <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base">
                        The fastest way to reach me is by email. For quick calls on mobile, use the phone link and your
                        device will open the dialer directly.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <a
                            href="mailto:phongleduc@gmail.com"
                            className="contact-primary-link rounded-xl border border-blue-500 bg-blue-500/10 px-4 py-3 text-center text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
                        >
                            Send email
                        </a>
                        <a
                            href="tel:+4542582561"
                            className="rounded-xl border border-blue-500 bg-blue-500/10 px-4 py-3 text-center text-sm font-medium text-gray-200 transition hover:bg-blue-500/20 hover:text-white"
                        >
                            Call now
                        </a>
                    </div>

                    <div className="mt-8 rounded-xl border border-dashed border-gray-600 bg-black/20 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Availability</p>
                        <p className="mt-2 text-sm text-gray-300">Open for frontend roles and company internship opportunities.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}