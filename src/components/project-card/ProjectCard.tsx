import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
    return (
        <>

            <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-card-link group flex h-full flex-col gap-3 rounded-lg border border-gray-700 p-3 transition hover:border-blue-500 sm:mx-4 md:mx-0 md:flex-row md:items-stretch"
                aria-label={project.title}
            >
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-md border border-gray-600/60 md:w-[42%] md:min-w-[42%]">
                    <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        quality={100}
                        sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 360px"
                    />
                    <div className="project-card-image-overlay pointer-events-none absolute inset-0 transition-colors duration-300" />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center md:justify-between md:pt-1">
                    <div>
                        <h4 className="text-base font-semibold leading-tight">{project.title}</h4>
                        <p className="mt-2 line-clamp-4 text-sm leading-6 text-gray-300">{project.description}</p>
                    </div>
                    <p className="mt-3 text-xs text-gray-400 md:mt-4">{project.tags.join(" • ")}</p>
                </div>
            </a>
        </>
    );
}