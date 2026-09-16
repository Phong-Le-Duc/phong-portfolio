export type SkillCategory = "stack" | "practice" | "focus";

export type Skill = {
    name: string;
    category: SkillCategory;
};

export type SkillGroup = {
    id: string;
    title: string;
    skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
    {
        id: "core-skillset",
        title: "Core Skillset",
        skills: [
            { name: "TypeScript", category: "stack" },
            { name: "JavaScript (ES6+)", category: "stack" },
            { name: "React", category: "stack" },
            { name: "Next.js", category: "stack" },
            { name: "Node.js / npm", category: "stack" },
            { name: "HTML5", category: "stack" },
            { name: "CSS3", category: "stack" },
            { name: "Tailwind CSS", category: "stack" },
            { name: "SASS / SCSS", category: "stack" },
            { name: "Git & GitHub", category: "stack" },

            { name: "Reusable components", category: "practice" },
            { name: "Form handling", category: "practice" },
            { name: "Data validation", category: "practice" },
            { name: "State management", category: "practice" },
            { name: "React / Custom Hooks", category: "practice" },
            { name: "Client-Side Routing", category: "practice" },
            { name: "API integration", category: "practice" },
            { name: "Postman / Insomnia", category: "practice" },
            { name: "Mobile-first", category: "practice" },
            { name: "Maintainability", category: "practice" },
            { name: "Scalability", category: "practice" },
            { name: "Responsive design", category: "practice" },
            { name: "Debugging", category: "practice" },

            { name: "Digital concept development", category: "focus" },
            { name: "User-centered design", category: "focus" },
            { name: "User research", category: "focus" },
            { name: "User flows", category: "focus" },
            { name: "Customer journeys", category: "focus" },
            { name: "Information architecture", category: "focus" },
            { name: "Wireframing", category: "focus" },
            { name: "Prototyping", category: "focus" },
            { name: "Interaction design", category: "focus" },
            { name: "UX / UI", category: "focus" },
            { name: "Usability", category: "focus" },
            { name: "Design thinking", category: "focus" },
            { name: "Visual communication", category: "focus" },
        ],
    },
    {
        id: "expanding-horizons",
        title: "Expanding Horizons",
        skills: [
            { name: "PHP", category: "stack" },
            { name: "Express.js", category: "stack" },
            { name: "PostgreSQL", category: "stack" },
            { name: "Prisma ORM", category: "stack" },
            { name: "REST APIs", category: "stack" },
            { name: "WordPress", category: "stack" },
            { name: "Elementor", category: "stack" },

            { name: "Vitest", category: "practice" },
            { name: "Jest", category: "practice" },
            { name: "Unit Testing", category: "practice" },
            { name: "Test Automation", category: "practice" },
            { name: "SEO Optimization", category: "practice" },
            { name: "Performance Optimization", category: "practice" },

            { name: "AI Agent Workflows", category: "focus" },
            { name: "AI-Assisted Development", category: "focus" },
            { name: "Automation", category: "focus" },
        ],
    },
];

export const softSkills: string[] = [
    "Problem-solving",
    "Collaboration",
    "Communication",
    "Adaptability",
    "Curiosity",
    "Continuous learning",
    "Creative thinking",
    "Attention to detail",
    "Ownership",
    "Responsibility",
    "User-focused thinking",
    "Analytical thinking",
    "Critical thinking",
    "Self-directed learning",
    "Teamwork",
];
