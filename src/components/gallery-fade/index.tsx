"use client";

import { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProjectCard from "@/components/project-card/ProjectCard";
import { projects, type Project } from "@/data/projects";
import styles from "./fade.module.css";

type GalleryFadeProps = {
    items?: Project[];
};

const defaultItems = projects.filter(
    (project) => project.featured && project.title && project.description,
);

export default function GalleryFade({
    items = defaultItems,
}: GalleryFadeProps) {
    const [displayIndex, setDisplayIndex] = useState(0);
    const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
    const [pressedButton, setPressedButton] = useState<"prev" | "next" | null>(null);
    const [pulseState, setPulseState] = useState<"idle" | "pressed" | "releasing">("idle");
    const timeoutRef = useRef<number | null>(null);
    const pressTimeoutRef = useRef<number | null>(null);

    const startTransition = (nextIndex: number) => {
        if (phase !== "idle" || items.length <= 1 || nextIndex === displayIndex) {
            return;
        }

        setPhase("out");

        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            setDisplayIndex(nextIndex);
            setPhase("in");

            timeoutRef.current = window.setTimeout(() => {
                setPhase("idle");
            }, 420);
        }, 420);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
            }

            if (pressTimeoutRef.current) {
                window.clearTimeout(pressTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (items.length <= 1 || phase !== "idle") {
            return;
        }

        const intervalId = window.setInterval(() => {
            const nextIndex = (displayIndex + 1) % items.length;
            startTransition(nextIndex);
        }, 10000);

        return () => window.clearInterval(intervalId);
    }, [displayIndex, items.length, phase]);

    if (!items.length) {
        return null;
    }

    const currentProject = items[displayIndex];
    const cardClass =
        phase === "out"
            ? styles.fadeOut
            : phase === "in"
                ? styles.fadeIn
                : styles.fadeVisible;

    const triggerPressEffect = (button: "prev" | "next") => {
        setPressedButton(button);
        setPulseState("pressed");

        if (pressTimeoutRef.current) {
            window.clearTimeout(pressTimeoutRef.current);
        }
    };

    const releasePressEffect = () => {
        if (!pressedButton) {
            return;
        }

        setPulseState("releasing");

        if (pressTimeoutRef.current) {
            window.clearTimeout(pressTimeoutRef.current);
        }

        pressTimeoutRef.current = window.setTimeout(() => {
            setPressedButton(null);
            setPulseState("idle");
        }, 260);
    };

    const goToPrevious = () => {
        const previousIndex = (displayIndex - 1 + items.length) % items.length;
        startTransition(previousIndex);
    };

    const goToNext = () => {
        const nextIndex = (displayIndex + 1) % items.length;
        startTransition(nextIndex);
    };

    return (
        <section className={styles.gallery} aria-label="Featured project gallery">
            <p className="mt-4 mb-2 font-bold">My projects</p>
            <p className="my-2 text-xs italic">Note: Render takes a minute to spin up and load data.</p>
            <div className={styles.viewport}>
                <div className={cardClass}>
                    <ProjectCard key={currentProject.id} project={currentProject} />
                </div>
            </div>

            <div className={styles.controls} aria-label="Gallery controls">
                <button
                    type="button"
                    onPointerDown={() => triggerPressEffect("prev")}
                    onPointerUp={releasePressEffect}
                    onPointerLeave={releasePressEffect}
                    onPointerCancel={releasePressEffect}
                    onClick={goToPrevious}
                    className={`${styles.arrowButton} ${pressedButton === "prev" && pulseState === "pressed" ? styles.arrowButtonPressed : ""} ${pressedButton === "prev" && pulseState === "releasing" ? styles.arrowButtonReleasing : ""}`}
                    aria-label="Previous project"
                >
                    <MdChevronLeft size={20} />
                </button>
                <button
                    type="button"
                    onPointerDown={() => triggerPressEffect("next")}
                    onPointerUp={releasePressEffect}
                    onPointerLeave={releasePressEffect}
                    onPointerCancel={releasePressEffect}
                    onClick={goToNext}
                    className={`${styles.arrowButton} ${pressedButton === "next" && pulseState === "pressed" ? styles.arrowButtonPressed : ""} ${pressedButton === "next" && pulseState === "releasing" ? styles.arrowButtonReleasing : ""}`}
                    aria-label="Next project"
                >
                    <MdChevronRight size={20} />
                </button>
            </div>
        </section>
    );
}
