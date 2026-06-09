import ProjectsGrid from "@/components/projects-grid";

export default function MyProjectsPage() {
    return (
        <main className="mx-8 pt-10">
            <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">My Projects</h1>
            <p className="mt-2 text-xs italic">Note: Render may take a few seconds to wake up.</p>
            <ProjectsGrid />
        </main>
    );
}