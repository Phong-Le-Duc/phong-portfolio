import styles from "./burger.module.css";

type Props = {
    isOpen: boolean;
    onToggle: () => void;
};

export default function BurgerMenuButton({ isOpen, onToggle }: Props) {
    return (
        <button
            className="md:hidden mr-2 w-8 h-8 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={onToggle}
            type="button"
        >
            <span
                className={`site-header-burger-icon ${styles.burgerBars} ${isOpen ? styles.active : ""}`}
                aria-hidden="true"
            >
                <span className={styles.burgerBar} />
                <span className={styles.burgerBar} />
                <span className={styles.burgerBar} />
            </span>
        </button>
    );
}
