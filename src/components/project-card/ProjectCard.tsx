import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
    return (
        <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-gray-700 p-4 hover:border-blue-500 transition"
            aria-label={project.title}
        >
            <div className="relative mb-3 aspect-4/3 w-full overflow-hidden rounded-md border border-gray-600/60">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 360px"
                />
            </div>

            <h4 className="text-lg font-semibold">{project.title}</h4>
            <p className="mt-2 text-sm text-gray-300">{project.description}</p>
            <p className="mt-3 text-xs text-gray-400">{project.tags.join(" • ")}</p>
        </a>
    );
}