import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <h1 className="font-display text-3xl font-bold md:text-5xl">
            Fiona Spencer
          </h1>
          <p className="text-sm text-muted-foreground">
            Toronto, Canada
          </p>
        </div>

        {/* WHO AM I */}
        <Section
          title="Who I Am"
          subtitle="Background"
        >
          <p>
            Computer Science student at Toronto Metropolitan University with a
            focus on software development, machine learning, and data-driven
            applications.
          </p>
        </Section>

        {/* EDUCATION */}
        <Section
          title="Education"
          subtitle="Academic Background"
        >
          <div className="space-y-2">
            <p className="font-medium">
              Toronto Metropolitan University
            </p>
            <p className="text-muted-foreground text-sm">
              BSc Computer Science (2023 – Present)
            </p>
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          title="Skills"
          subtitle="Technologies & Tools"
        >
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
        </Section>

        {/* PROJECTS */}
        <Section
          title="Projects"
          subtitle="Selected Work"
        >
          <div className="space-y-2">
            <Link to="/projects" className="minimal-link">
              View all projects →
            </Link>
          </div>
        </Section>

        {/* INTERESTS */}
        <Section
          title="Interests"
          subtitle="Areas of Focus"
        >
          <p>
            Software engineering, machine learning systems, data analysis,
            and building clean, scalable web applications.
          </p>
        </Section>

        {/* ACTIONS */}
        <div className="flex justify-center flex-wrap gap-2 pt-4 border-t border-border">
          <Button asChild className="rounded-full px-4 py-2 text-sm">
            <Link to="/projects">Projects</Link>
          </Button>

          <Button asChild variant="outline" className="rounded-full px-4 py-2 text-sm">
            <Link to="/contact">Contact</Link>
          </Button>

          <Button asChild variant="ghost" className="rounded-full px-4 py-2 text-sm">
            <a href="https://github.com/fspencer-edu" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>

          <Button asChild variant="ghost" className="rounded-full px-4 py-2 text-sm">
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}

/* reusable section component */
function Section({ title, subtitle, children }) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {subtitle}
        </p>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      <div className="text-sm md:text-base text-muted-foreground space-y-2">
        {children}
      </div>
    </div>
  );
}