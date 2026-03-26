export default function ResumePage() {
  const resumeUrl = "public/../../fiona_spencer_resume(2026).pdf";

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Resume
            </p>
            <h1 className="text-2xl font-semibold md:text-3xl">
              Fiona Spencer
            </h1>
          </div>

          <div className="flex gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm transition-opacity hover:opacity-70"
            >
              Open PDF
            </a>

            <a
              href={resumeUrl}
              download
              className="rounded-full border border-border px-4 py-2 text-sm transition-opacity hover:opacity-70"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            src={resumeUrl}
            title="Resume PDF"
            className="h-[80vh] w-full"
          />
        </div>

      </div>
    </section>
  );
}