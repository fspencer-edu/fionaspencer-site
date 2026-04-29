const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "R"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Data Science & ML",
    skills: [
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
],
  },
  {
  title: "3D & Visualization",
  skills: ["Blender", "Fusion 360", "Three.js", "Unity", "OpenCV"],
  },
  {
    title: "Bioinformatics",
    skills: ["Bioinformatics", "Data Analysis", "Computational Biology"],
  },
  {
    title: "Cloud & Deployment",
    skills: ["Docker", "Kubernetes", "AWS", "GCP"],
  },
];

export default function SkillsSection() {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="font-display text-2xl font-bold">Skills</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="font-semibold">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="modern-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}