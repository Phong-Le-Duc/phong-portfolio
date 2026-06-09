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
        title: "Fitness Class Mobile-Layout Booking App",
        description: "A fitness class booking app featuring server-rendered data fetching, type-safe form validation, JWT cookie authentication with server-side route protection, and role-based views for admins and members — built with a clean DAL pattern separating UI from API logic.",
        href: "https://phong-fitness.netlify.app/",
        tags: ["Next.js", "JavaScript", "Tailwind CSS"],
        imageSrc: "/images/fitnessImage.png",
        featured: true,
    },
    {
        id: "project-2",
        title: "Cinema Booking Mobile-Layout Web App",
        description: "Built an end-to-end cinema booking flow with loader-driven data, interactive seat selection, checkout validation, and e-ticket generation.",
        href: "https://phongs-cinema-app.netlify.app",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/images/cinemaImage.png",
        featured: true,
    },
    {
        id: "project-3",
        title: "Real Estate Website Desktop-Layout",
        description: "A production-ready real estate web app built for speed, clean UX, and scalable frontend architecture. It delivers a complete property-search journey with dynamic listings, agent profiles, detailed property pages, validated contact forms, and a full authentication system including secure login, protected user-only routes, and favorites for signed-in users.",
        href: "https://phong-real-estate-website.netlify.app/",
        tags: ["Vite", "React", "TypeScript"],
        imageSrc: "/images/realEstateImage.png",
        featured: true,
    },
    {
        id: "project-4",
        title: "Portfolio site mobile and desktop layout",
        description: "A personal portfolio website showcasing projects, skills, and experience with responsive design for both mobile and desktop layouts.",
        href: "https://phongleduc-portfolio.netlify.app/",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/images/portfolioImage.png",
        featured: true,
    },
    {
        id: "project-5",
        title: "",
        description: "",
        href: "",
        tags: [""],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },
    {
        id: "project-6",
        title: "",
        description: "",
        href: "https://github.com/yourname/project-six",
        tags: [""],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },

];