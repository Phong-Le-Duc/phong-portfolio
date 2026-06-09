import ThemeToggle from "./ThemeToggle";

export default function HeaderThemeToggle() {
    return (
        <div className="header-theme-toggle-wrap rounded-full bg-white/3 p-1 ring-1 ring-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.28)] [&>button]:rounded-full [&>button]:border-white/15 [&>button]:bg-black/40 [&>button]:px-3 [&>button]:py-1.5 [&>button]:transition-all [&>button]:duration-200 [&>button]:hover:border-blue-400/60 [&>button]:hover:bg-blue-500/10 [&>button]:focus-visible:outline-none [&>button]:focus-visible:ring-2 [&>button]:focus-visible:ring-blue-400/70 [&>button]:focus-visible:ring-offset-2 [&>button]:focus-visible:ring-offset-black/70 [&>button_svg]:h-4 [&>button_svg]:w-4 [&>button_svg]:text-blue-200 [&>button:hover_svg]:text-white">
            <ThemeToggle />
        </div>
    );
}