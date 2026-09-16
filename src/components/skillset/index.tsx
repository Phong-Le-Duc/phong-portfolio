"use client";

import { useState } from "react";
import styles from "./skillset.module.css";
import { skillGroups, softSkills } from "@/data/skills";

const FADE_DURATION_MS = 200;

export default function Skillset() {
    const [activeId, setActiveId] = useState(skillGroups[0].id);
    const [visible, setVisible] = useState(true);

    const activeGroup = skillGroups.find((group) => group.id === activeId) ?? skillGroups[0];

    const handleSelect = (id: string) => {
        if (id === activeId) return;

        setVisible(false);
        window.setTimeout(() => {
            setActiveId(id);
            setVisible(true);
        }, FADE_DURATION_MS);
    };

    return (
        <section className={styles.skillset} aria-label="Skillset">
            {/* <h2 className={styles.title}>Core Skillset &amp; Expanding Horizons</h2> */}

            <div className={styles.tabs} role="tablist">
                {skillGroups.map((group) => (
                    <button
                        key={group.id}
                        type="button"
                        role="tab"
                        aria-selected={group.id === activeId}
                        onClick={() => handleSelect(group.id)}
                        className={`${styles.tabButton} ${group.id === activeId ? styles["tabButton--active"] : ""
                            }`}
                    >
                        <span className={styles.tabButtonLabel}>{group.title}</span>
                    </button>
                ))}
            </div>

            <ul
                className={`${styles.chipList} ${visible ? styles.visible : styles.hidden}`}
            >
                {activeGroup.skills.map((skill) => (
                    <li
                        key={skill.name}
                        className={`${styles.chip} ${styles[`chip--${skill.category}`]}`}
                    >
                        {skill.name}
                    </li>
                ))}
            </ul>

            <div className={styles.softSkills}>
                <div className={styles.softSkillsHeading}>
                    <span className={styles.softSkillsHeadingLabel}>Soft Skills</span>
                </div>

                <ul className={styles.chipList}>
                    {softSkills.map((skill) => (
                        <li key={skill} className={`${styles.chip} ${styles["chip--soft"]}`}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

