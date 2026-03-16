import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="px-6 py-10 md:py-16">
      <div className="minimal-shell rounded-3xl border border-border">
        <div className="grid min-h-[78vh] items-center gap-12 px-8 py-12 md:grid-cols-2 md:px-14 md:py-16">
          <div className="space-y-8">
            <p className="minimal-link">WELCOME</p>

            <div className="space-y-5">
              <h1 className="font-display text-5xl font-bold leading-[0.95] text-foreground md:text-7xl">
                Build calm,
                <br />
                modern digital
                <br />
                experiences.
              </h1>

              <p className="minimal-muted max-w-md text-base md:text-lg">
                I design and build clean web experiences, software projects,
                and machine learning applications with a focus on clarity,
                structure, and thoughtful detail.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full px-6">
                <Link to="/projects">View Projects</Link>
              </Button>

              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[520px]">
            <div className="minimal-accent-circle absolute md:h-80 md:w-80" />

            <div className="relative z-10 text-center md:text-right">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Fiona Spencer
              </p>

              <h2 className="font-display text-5xl font-black leading-[0.9] text-foreground md:text-7xl">
                hello,
                <br />
                there.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}