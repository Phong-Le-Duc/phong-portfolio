import { MdArrowOutward } from "react-icons/md";
import ProjectsGrid from "@/components/projects-grid";

export default function FeaturedProjects() {
    return (
        <section className=" pt-10">

            <div className="flex justify-between">
                <h3>Featured Projects</h3>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                    <a
                        href="https://github.com/Phong-Le-Duc/Phong-Le-Duc"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View all on GitHub"
                        className="flex items-center gap-2"
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