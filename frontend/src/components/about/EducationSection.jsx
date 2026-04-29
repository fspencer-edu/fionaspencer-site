const education = [
  {
    school: "Toronto Metropolitan University",
    degree: "BSc Computer Science",
    years: "2023 – Present",
    details: [
      "Minor in Biology with interests in bioinformatics, neuroscience, and cognitive machine learning",
      "Focus on software development and machine learning",
      "Coursework: Data Mining, Algorithms, Software Engineering",
    ],
  },
];

export default function EducationSection() {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="font-display text-2xl font-bold">
          Academic Background
        </h2>
      </div>

      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.school}
                className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md p-5 shadow-soft transition hover:bg-card/70 hover:shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.school}
                </p>
              </div>

              <span className="text-sm font-medium text-muted-foreground">
                {edu.years}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {edu.details.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}