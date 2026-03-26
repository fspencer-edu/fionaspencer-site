export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 md:py-14 space-y-10">

      {/* header */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          About
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">
          Fiona Spencer
        </h1>
      </div>

      {/* intro */}
      <div className="space-y-4 text-sm md:text-base text-muted-foreground">
        <p>
          I’m a Computer Science student at Toronto Metropolitan University
          with an interest in software development, machine learning, and
          building modern web applications.
        </p>

        <p>
          My work focuses on creating clean, structured, and practical systems,
          ranging from full-stack applications to data-driven and machine
          learning projects.
        </p>
      </div>

      {/* education */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Education</h2>
        <p className="text-sm text-muted-foreground">
          BSc Computer Science — Toronto Metropolitan University (2023 – Present)
        </p>
      </div>

      {/* skills */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Skills</h2>

        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "Python",
            "Java",
            "JavaScript",
            "React",
            "SQL",
            "Machine Learning",
            "Computer Vision",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* interests */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Interests</h2>
        <p className="text-sm text-muted-foreground">
          I’m interested in building scalable software systems, exploring
          machine learning applications, and designing clean, user-focused
          web experiences.
        </p>
      </div>

    </section>
  );
}