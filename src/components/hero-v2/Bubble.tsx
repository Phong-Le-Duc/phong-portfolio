import React from "react";
import styles from "./bubble.module.css";



type Props = {
    text: string;
    color?: string; // hex or CSS color
    size?: number; // px
    ariaLabel?: string;
    className?: string;
};


export function Bubble({ text, color = "#3b82f6", size = 96, ariaLabel, className }: Props) {

    const vars = React.useMemo(() => ({
        ["--bubble-color" as any]: color,
        ["--bubble-size" as any]: `${size}px`,
    }) as React.CSSProperties, [color, size]);


    return (
        <div
            className={`${styles.bubble} ${className ?? ""}`.trim()}
            style={vars}
            aria-label={ariaLabel ?? text}
        >
            <span className={styles.label}>{text}</span>
        </div>
    );
}
export default React.memo(Bubble);