type Props = {
    isOpen: boolean;
    onToggle: () => void;
};

export default function BurgerMenuButton({ isOpen, onToggle }: Props) {
    return (
        <button
            className="md:hidden mr-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={onToggle}
            type="button"
        >
            <svg
                className="site-header-burger-icon w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    );
}
