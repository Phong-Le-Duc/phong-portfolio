export type Project = {
    id: string;
    title: string;
    description: string;
    href: string;
    tags: string[];
    imageSrc: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Cinema App",
        description: "Short description",
        href: "https://phongs-cinema-app.netlify.app",
        tags: ["Next.js", "TypeScript"],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },
    {
        id: "project-2",
        title: "Project One",
        description: "Short description",
        href: "https://github.com/yourname/project-one",
        tags: ["Next.js", "TypeScript"],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },
    {
        id: "project-3",
        title: "Project One",
        description: "Short description",
        href: "https://github.com/yourname/project-one",
        tags: ["Next.js", "TypeScript"],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },
    {
        id: "project-4",
        title: "Project One",
        description: "Short description",
        href: "https://github.com/yourname/project-one",
        tags: ["Next.js", "TypeScript"],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },
    {
        id: "project-5",
        title: "Project One",
        description: "Short description",
        href: "https://github.com/yourname/project-one",
        tags: ["Next.js", "TypeScript"],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },

];