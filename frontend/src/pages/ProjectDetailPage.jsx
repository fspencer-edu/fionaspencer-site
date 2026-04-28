import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12 md:px-12">
      <section className="mx-auto max-w-5xl">
        
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          ← Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="mt-6 overflow-hidden rounded-2xl border shadow-md">
          <img
            src={project.image}
            alt={project.project}
            className="h-[300px] w-full object-cover md:h-[400px]"
          />
        </div>

        {/* Header */}
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {project.field}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            {project.project}
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Tech Stack</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* More Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Project Overview</h3>

          <p className="leading-7 text-muted-foreground">
            {project.moreInfo}
          </p>
        </div>

        {/* Optional Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
            >
              View Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border px-5 py-2.5 text-sm font-medium hover:bg-muted"
            >
              Live Demo
            </a>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProjectDetailPage;