import { MdArrowOutward } from "react-icons/md";
import ProjectsGrid from "@/components/projects-grid";

export default function FeaturedProjects() {
    return (
        <section className="pt-10">

            <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl max-[420px]:text-sm font-bold">Featured Projects</h3>
                <div className="flex shrink-0 items-center gap-2 text-sm text-blue-700 max-[420px]:text-xs">
                    <a
                        href="https://github.com/Phong-Le-Duc/Phong-Le-Duc"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View all on GitHub"
                        className="inline-flex items-center gap-2 whitespace-nowrap"
                    >
                        View all on GitHub
                        <MdArrowOutward />
                    </a>
                </div>
            </div>

            <ProjectsGrid featuredOnly limit={3} />
        </section>


    )
}