export default function HomePage() {
  return (
    <main className="">
      <section className="minimal-shell rounded-lg border border-border">
        <div className="flex items-center justify-between border-b border-border px-8 py-6">
          <div className="font-display text-2xl font-bold">mnmlst.</div>

          <nav className="hidden gap-8 md:flex">
            <a href="#" className="minimal-link">Home</a>
            <a href="#" className="minimal-link">Product</a>
            <a href="#" className="minimal-link">Store</a>
            <a href="#" className="minimal-link">About Us</a>
          </nav>

          <button className="text-2xl">☰</button>
        </div>

        <div className="grid items-center gap-10 px-8 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="minimal-muted max-w-xs">
              Clean design, strong typography, and intentional space create a
              calm minimal interface.
            </p>

            <button className="minimal-link">Read More</button>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="minimal-accent-circle absolute h-72 w-72" />

            <div className="relative z-10 text-right">
              <h1 className="font-display text-6xl font-black leading-none text-foreground md:text-7xl">
                less is
                <br />
                more.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}