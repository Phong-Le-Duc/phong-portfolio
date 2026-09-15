export type SkillGroup = {
    id: string;
    title: string;
    skills: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        id: "core-skillset",
        title: "Core Skillset",
        skills: [
            "TypeScript",
            "JavaScript (ES6+)",
            "React",
            "Next.js",
            "Node.js / npm",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "SASS / SCSS",
            "Git & GitHub",
            "Component-based development",
            "API integration",
            "mobile-first",
            "Responsive design",
            "Debugging",
            "concept development",
            "problem-solving",
            "collaboration",
            "UX / UI",
            "maintainability",
            "scalability",
        ],
    },
    {
        id: "expanding-horizons",
        title: "Expanding Horizons",
        skills: [
            "PHP",
            "Express.js",
            "PostgreSQL",
            "Prisma ORM",
            "REST APIs",
            "Postman / Insomnia",
            "AI agent-based workflows",
            "AI-assisted development",
            "automation",
            "Wordpress",
            "Elementor",
            "SEO  optimization",
            "performance optimization",
            "Translating wireframes and mockups into functional UI",
            "User-centered development and UX thinking",
            "Cross-disciplinary collaboration between design, UX, and development",
        ],
    },
];
