import ProjectCard from "@/components/project-card/ProjectCard";
import { projects as allProjects, type Project } from "@/data/projects";

type Props = {
    projects?: Project[];
    featuredOnly?: boolean;
    limit?: number;
    className?: string;
};

export default function ProjectsGrid({
    projects,
    featuredOnly = false,
    limit,
    className,
}: Props) {
    const source = projects ?? allProjects;
    const filtered = featuredOnly ? source.filter((project) => project.featured) : source;
    const visible = typeof limit === "number" ? filtered.slice(0, limit) : filtered;

    const gridClassName = className ?? "mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3";

    return (
        <div className={gridClassName}>
            {visible.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
