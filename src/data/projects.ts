export type Project = {
    id: string;
    title: string;
    description: string;
    listTitle: string;
    listDescription: string;
    href: string;
    tags: string[];
    imageSrc: string;
    featured?: boolean;
};


export type SlideImage = {
    id: string;
    src: string;
    href: string;
    alt: string;
};



export const projects: Project[] = [
    {
        id: "project-1",
        title: "Real Estate Website (responsive)",
        description: "A production-ready real estate web app built for speed, clean UX, and scalable frontend architecture. It delivers a complete property-search journey with dynamic listings, agent profiles, detailed property pages, validated contact forms, and a full authentication system including secure login, protected user-only routes, and favorites for signed-in users.",
        listTitle: "Real Estate",
        listDescription: "Real estate app with search, property pages, auth, and favorites.",
        href: "https://phong-real-estate-website.netlify.app/",
        tags: ["Vite", "React", "TypeScript"],
        imageSrc: "/images/realEstateImage.png",
        featured: true,
    },
    {
        id: "project-2",
        title: "Cinema Booking Mobile-Layout Web App",
        description: "Built an end-to-end cinema booking flow with loader-driven data, interactive seat selection, checkout validation, and e-ticket generation.",
        listTitle: "Cinema Booking",
        listDescription: "Cinema booking flow with seats, checkout, and e-tickets.",
        href: "https://phongs-cinema-app.netlify.app",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/images/cinemaImage.png",
        featured: true,
    },
    {
        id: "project-3",
        title: "Fitness Class Mobile-Layout Booking App",
        description: "A fitness class booking app featuring server-rendered data fetching, type-safe form validation, JWT cookie authentication with server-side route protection, and role-based views for admins and members — built with a clean DAL pattern separating UI from API logic.",
        listTitle: "Fitness Booking",
        listDescription: "Fitness booking app with auth, validation, and role views.",
        href: "https://phong-fitness.netlify.app/",
        tags: ["Next.js", "JavaScript", "Tailwind CSS"],
        imageSrc: "/images/fitnessImage.png",
        featured: true,
    },
    {
        id: "project-4",
        title: "Clean and Care Website (responsive layout)",
        description: "A live responsive website for a cleaning service, featuring a modern design and easy-to-use interface.",
        listTitle: "Clean & Care",
        listDescription: "Responsive cleaning service site with a modern interface.",
        href: "https://phong-clean-and-care.netlify.app/",
        tags: ["HTML", "CSS", "JavaScript"],
        imageSrc: "/images/cleancareImage.png",
        featured: true,
    },
    {
        id: "project-5",
        title: "Portfolio site (responsive layout)",
        description: "A personal portfolio website showcasing projects, skills, and experience with responsive design for both mobile and desktop layouts.",
        listTitle: "Portfolio",
        listDescription: "Responsive portfolio site for projects, skills, and experience.",
        href: "https://phongleduc-portfolio.netlify.app/",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/images/portfolioImage.png",
        featured: true,
    },
    {
        id: "project-6",
        title: "",
        description: "",
        listTitle: "Project Six",
        listDescription: "Placeholder project entry for future work.",
        href: "https://github.com/yourname/project-six",
        tags: [""],
        imageSrc: "/images/project-placeholder.svg",
        featured: true,
    },

];





export const slideImages: SlideImage[] = [
    {
        id: "1",
        src: "/images/cinemaPhone_1.png",
        href: "https://phongs-cinema-app.netlify.app",
        alt: "Project 1",
    },

    {
        id: "2",
        src: "/images/cinemaPhone_2.png",
        href: "https://phongs-cinema-app.netlify.app",
        alt: "Project 1",
    },
    {
        id: "3",
        src: "/images/estatePhone_1.png",
        href: "https://phong-real-estate-website.netlify.app/",
        alt: "Project 2",
    },
    {
        id: "4",
        src: "/images/estatePhone_2.png",
        href: "https://phong-real-estate-website.netlify.app/",
        alt: "Project 2",
    },
    {
        id: "5",
        src: "/images/fitnessPhone_1.png",
        href: "https://phong-fitness.netlify.app/",
        alt: "Project 3",
    },
    {
        id: "7",
        src: "/images/fitnessPhone_2.png",
        href: "https://phong-fitness.netlify.app/",
        alt: "Project 3",
    },
    {
        id: "8",
        src: "/images/landrupPhone_1.png",
        href: "https://landrupdance.netlify.app/",
        alt: "Project 4",
    },
    {
        id: "9",
        src: "/images/landrupPhone_2.png",
        href: "https://landrupdance.netlify.app/",
        alt: "Project 4",
    },
    {
        id: "10",
        src: "/images/cleancarePhone_1.png",
        href: "http://cleancareaps.dk/",
        alt: "Project 5",
    },
    {
        id: "11",
        src: "/images/cleancarePhone_2.png",
        href: "http://cleancareaps.dk/",
        alt: "Project 5",
    },
    {
        id: "12",
        src: "/images/pokemonPhone_1.png",
        href: "https://phong-pokemon.netlify.app/",
        alt: "Project 6",
    },
    {
        id: "13",
        src: "/images/pokemonPhone_2.png",
        href: "https://phong-pokemon.netlify.app/",
        alt: "Project 6",
    },
];