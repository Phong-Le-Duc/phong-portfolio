import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "../project-card/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {

    const featured = projects.filter((p) => p.featured).slice(0, 3);

    return (
        <section className=" pt-10">

            <div className="flex justify-between">
                <h3>Featured Projects</h3>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                    <Link href="/" aria-label="About">View all on Github</Link>
                    <MdArrowOutward />
                </div>
            </div>




            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>


    )
}