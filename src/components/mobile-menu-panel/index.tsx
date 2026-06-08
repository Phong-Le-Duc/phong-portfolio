import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileMenuPanel({ isOpen, onClose }: Props) {
    const router = useRouter();
    const CLOSE_AFTER_NAV_MS = 280;

    const handleNavigate = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        router.push(href);

        window.setTimeout(() => {
            onClose();
        }, CLOSE_AFTER_NAV_MS);
    };

    return (
        <div
            className={`fixed inset-0 z-60 md:hidden transition-opacity duration-300 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
        >
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" onClick={onClose} />

            <nav
                className={`absolute right-0 top-0 h-full w-[40%] max-w-sm border-l border-gray-700 bg-black/95 px-8 py-24 text-base text-gray-200 shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-5 rounded-md border border-gray-700 px-3 py-1 text-sm text-gray-300 transition hover:border-blue-500 hover:text-white"
                    aria-label="Close menu"
                >
                    Close
                </button>

                <div className="flex flex-col gap-6">
                    <Link href="/" aria-label="Home" className="text-lg transition hover:text-white" onClick={handleNavigate("/")}>Home</Link>
                    <Link href="/my-projects" aria-label="My Projects" className="text-lg transition hover:text-white" onClick={handleNavigate("/my-projects")}>Projects</Link>
                    <Link href="/about" aria-label="About" className="text-lg transition hover:text-white" onClick={handleNavigate("/about")}>About</Link>
                    <Link href="/contact" aria-label="Contact" className="text-lg transition hover:text-white" onClick={handleNavigate("/contact")}>Contact</Link>
                </div>

                <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400">
                    <p>Frontend Developer</p>
                    <p className="mt-1 text-gray-300">Phong Le Duc</p>
                </div>
            </nav>
        </div>
    );
}
