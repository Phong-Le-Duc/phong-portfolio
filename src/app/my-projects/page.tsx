import ProjectsGrid from "@/components/projects-grid";

export default function MyProjectsPage() {
    return (
        <main className="mx-8 pt-10">
            <h1 className="text-sm uppercase tracking-[0.3em] text-blue-500">My Projects</h1>
            <p className="ambient-text-secondary mt-2 text-xs italic">Note: Render takes a minute to spin up and load data, so sites might look broken at first...</p>
            <ProjectsGrid />
        </main>
    );
}