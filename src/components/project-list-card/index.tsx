import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectListCard({ project }: Props) {
    return (
        <div className="project-card-link group flex h-full flex-col rounded-lg border border-gray-700 p-3 shadow-[0_4px_8px_-2px_rgba(59,130,246,0.85),0_14px_18px_-6px_rgba(59,130,246,0.4),0_28px_24px_-10px_rgba(59,130,246,0.25)] transition hover:border-blue-500 sm:mx-4 md:mx-0">
            <a href={project.href} target="_blank" rel="noreferrer" className="flex cursor-pointer flex-row gap-3">
                <div className="flex w-[42%] min-w-[42%] flex-none flex-col gap-2">
                    <div className="relative aspect-4/3 overflow-hidden rounded-md border border-gray-600/60">
                        <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            quality={100}
                            sizes="(max-width: 768px) 42vw, (max-width: 1200px) 44vw, 360px"
                        />
                        <div className="project-card-image-overlay pointer-events-none absolute inset-0 transition-colors duration-300" />
                    </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                    <h4 className="text-base font-semibold leading-tight">{project.listTitle}</h4>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-300">{project.listDescription}</p>
                </div>
            </a>

            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-400">
                <p className="text-sm italic">{project.tags.join(" • ")}</p>
                <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-gray-300 transition hover:text-blue-500"
                >
                    <AiOutlineGithub className="text-lg" />
                </a>
            </div>
        </div>
    );
}