export type Project = {
    id: string;
    title: string;
    description: string;
    listTitle: string;
    listDescription: string;
    href: string;
    githubHref: string;
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
        githubHref: "https://github.com/Phong-Le-Duc/dinmaegler-Phong-Le-Duc",
        tags: ["Vite", "React", "TypeScript"],
        imageSrc: "/images/realEstateImage.png",
        featured: true,
    },
    {
        id: "project-2",
        title: "Cinema booking app (mobile)",
        description: "Built an end-to-end cinema booking flow with loader-driven data, interactive seat selection, checkout validation, and e-ticket generation.",
        listTitle: "Cinema Booking",
        listDescription: "Cinema booking flow with seats, checkout, and e-tickets.",
        href: "https://phongs-cinema-app.netlify.app",
        githubHref: "https://github.com/Phong-Le-Duc/Phongs-cinema-app",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/images/cinemaImage.png",
        featured: true,
    },
    {
        id: "project-3",
        title: "Fitness booking App (mobile)",
        description: "A fitness class booking app featuring server-rendered data fetching, type-safe form validation, JWT cookie authentication with server-side route protection, and role-based views for admins and members — built with a clean DAL pattern separating UI from API logic.",
        listTitle: "Fitness Booking",
        listDescription: "Fitness booking app with auth, validation, and role views.",
        href: "https://phong-fitness.netlify.app/",
        githubHref: "https://github.com/Phong-Le-Duc/BelieveFitness",
        tags: ["Next.js", "JavaScript", "Tailwind CSS"],
        imageSrc: "/images/fitnessImage.png",
        featured: true,
    },
    {
        id: "project-4",
        title: "Business card website (responsive)",
        description: "A live responsive website for a cleaning service, featuring a modern design and easy-to-use interface.",
        listTitle: "Clean & Care",
        listDescription: "Responsive cleaning service site with a modern interface.",
        href: "https://phong-clean-and-care.netlify.app/",
        githubHref: "https://github.com/Phong-Le-Duc/REPLACE_ME_7",
        tags: ["HTML", "CSS", "JavaScript"],
        imageSrc: "/images/cleancareImage.png",
        featured: true,
    },
    {
        id: "project-5",
        title: "Newsify website (mobile)",
        description: "A mobile news website, featuring a news feed, search function, and category filters.",
        listTitle: "Newsify",
        listDescription: "Mobile news website with search and category filters.",
        href: "https://phong-newsify.netlify.app/",
        githubHref: "https://github.com/Phong-Le-Duc/newsify",
        tags: ["React", "JavaScript", "Sass/SCSS"],
        imageSrc: "/images/newsifyImage_1.png",
        featured: true,
    },
    {
        id: "project-6",
        title: "Dance Studio Website (mobile)",
        description: "Booking and information website for a dance studio, featuring class schedules, instructor profiles, and an easy-to-navigate interface.",
        listTitle: "Landrup Dans",
        listDescription: "Booking app with login, auth, and class schedules and more.",
        href: "https://landrupdance.netlify.app/",
        githubHref: "https://github.com/Phong-Le-Duc/landrup-dans",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/images/landrupImage_2.png",
        featured: true,
    },
    {
        id: "project-7",
        title: "Pokemon Website (responsive)",
        description: "a pokemon website with responsive design, featuring a Pokedex, type charts, and search elements.",
        listTitle: "Pokemon",
        listDescription: "Responsive website with search function and list/detail views.",
        href: "https://github.com/Phong-Le-Duc/pokemon",
        githubHref: "",
        tags: ["React", "JavaScript", "Tailwind CSS"],
        imageSrc: "/images/pokemonImage_1.png",
        featured: true,
    },
    {
        id: "project-8",
        title: "Portfolio site (responsive)",
        description: "A personal portfolio website showcasing projects, skills, and experience with responsive design for both mobile and desktop layouts.",
        listTitle: "Portfolio",
        listDescription: "Responsive portfolio site for projects, skills, and experience.",
        href: "https://phongleduc-portfolio.netlify.app/",
        githubHref: "https://github.com/Phong-Le-Duc/phong-portfolio",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/images/portfolioImage.png",
        featured: true,
    },

];





export const slideImages: SlideImage[] = [
    {
        id: "1",
        src: "/images/cinemaPhone_1.png",
        href: "https://phongs-cinema-app.netlify.app",
        alt: "Cinema app preview 1",
    },
    {
        id: "2",
        src: "/images/cinemaPhone_2.png",
        href: "https://phongs-cinema-app.netlify.app",
        alt: "Cinema app preview 2",
    },
    {
        id: "3",
        src: "/images/estatePhone_1.png",
        href: "https://phong-real-estate-website.netlify.app/",
        alt: "Real estate app preview 1",
    },
    {
        id: "4",
        src: "/images/estatePhone_2.png",
        href: "https://phong-real-estate-website.netlify.app/",
        alt: "Real estate app preview 2",
    },
    {
        id: "5",
        src: "/images/fitnessPhone_1.png",
        href: "https://phong-fitness.netlify.app/",
        alt: "Fitness app preview 1",
    },
    {
        id: "6",
        src: "/images/fitnessPhone_2.png",
        href: "https://phong-fitness.netlify.app/",
        alt: "Fitness app preview 2",
    },
    {
        id: "7",
        src: "/images/cleancarePhone_1.png",
        href: "http://cleancareaps.dk/",
        alt: "Clean & Care preview 1",
    },
    {
        id: "8",
        src: "/images/cleancarePhone_2.png",
        href: "http://cleancareaps.dk/",
        alt: "Clean & Care preview 2",
    },
    {
        id: "9",
        src: "/images/portfolioPhone_1.png",
        href: "https://phongleduc-portfolio.netlify.app/",
        alt: "Portfolio preview 1",
    },
    {
        id: "10",
        src: "/images/portfolioPhone_2.png",
        href: "https://phongleduc-portfolio.netlify.app/",
        alt: "Portfolio preview 2",
    },
    {
        id: "11",
        src: "/images/landrupPhone_1.png",
        href: "https://landrupdance.netlify.app/",
        alt: "Dance studio preview 1",
    },
    {
        id: "12",
        src: "/images/landrupPhone_2.png",
        href: "https://landrupdance.netlify.app/",
        alt: "Dance studio preview 2",
    },
    {
        id: "13",
        src: "/images/pokemonPhone_1.png",
        href: "https://phong-pokemon.netlify.app/",
        alt: "Pokemon preview 1",
    },
    {
        id: "14",
        src: "/images/pokemonPhone_2.png",
        href: "https://phong-pokemon.netlify.app/",
        alt: "Pokemon preview 2",
    },
    {
        id: "15",
        src: "/images/newsifyPhone_1.png",
        href: "https://phong-newsify.netlify.app/",
        alt: "Newsify preview 1",
    },
    {
        id: "16",
        src: "/images/newsifyPhone_2.png",
        href: "https://phong-newsify.netlify.app/",
        alt: "Newsify preview 2",
    },
];