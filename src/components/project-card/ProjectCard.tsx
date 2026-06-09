import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
    return (
        <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-card-link group block rounded-lg border border-gray-700 p-3 hover:border-blue-500 transition"
            aria-label={project.title}
        >
            <div className="relative mb-2 aspect-4/3 w-full overflow-hidden rounded-md border border-gray-600/60">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover  transition-transform duration-300 group-hover:scale-[1.02]"
                    quality={100}
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 360px"
                />
                <div className="project-card-image-overlay pointer-events-none absolute inset-0 transition-colors duration-300" />
            </div>

            <h4 className="text-base font-semibold">{project.title}</h4>
            <p className="mt-2 text-sm text-gray-300">{project.description}</p>
            <p className="mt-3 text-xs text-gray-400">{project.tags.join(" • ")}</p>
        </a>
    );
}