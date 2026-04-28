import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group cursor-pointer overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={project.image}
        alt={project.project}
        className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-primary">
          {project.field}
        </p>

        <h2 className="text-xl font-semibold">{project.project}</h2>

        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.languages.map((language) => (
            <span
              key={language}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {language}
            </span>
          ))}
        </div>

        <button className="mt-5 text-sm font-semibold text-primary">
          View project →
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;