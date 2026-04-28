import ProjectCard from "@/components/common/ProjectCard";
import { projects } from "@/data/projects";

function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Projects
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            A collection of projects involving web development, data analysis,
            machine learning, and software engineering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;