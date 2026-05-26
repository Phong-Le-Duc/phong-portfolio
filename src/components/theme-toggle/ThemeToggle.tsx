import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeToggle() {

    return (
        <button
            className="py-2 px-4 rounded-md border border-white/20 hover:border-white/35 transition-colors"
            aria-label="dark mode toggle"
        >
            <MdOutlineWbSunny className="w-4 h-4" />
        </button>
    )
}




