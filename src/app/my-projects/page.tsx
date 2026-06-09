import ProjectsGrid from "@/components/projects-grid";

export default function MyProjectsPage() {
    return (
        <main className="mx-8 pt-10">
            <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">My Projects</h1>
            <ProjectsGrid />
        </main>
    );
}