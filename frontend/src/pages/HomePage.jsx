import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl text-center space-y-8">

        {/* NAME */}
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-bold md:text-5xl">
            Fiona Spencer
          </h1>
          <p className="text-sm text-muted-foreground">
            Toronto, Canada
          </p>
        </div>

        {/* INFO */}
        <div className="space-y-4 text-sm md:text-base text-muted-foreground">
          <p>
            Computer Science student at Toronto Metropolitan University.
          </p>

          <p>
            Interested in software development, machine learning, data analysis,
            and building modern web applications.
          </p>

          <p>
            Experience with Python, Java, JavaScript, React, SQL, and computer
            vision.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-center flex-wrap gap-2">
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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* PROJECT PREVIEW */}
        <div className="pt-8 border-t border-border space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Applications
          </p>

          <div className="flex flex-col gap-2">
            <Link to="/projects" className="minimal-link">
              View my projects →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}