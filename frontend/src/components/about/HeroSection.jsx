import profileImage from "@/assets/images/user.jpg";

export default function HeroSection() {
  return (
    <section className="relative grid items-center md:grid-cols-2">
      
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      {/* LEFT: text */}
      <div className="space-y-5 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">
          About
        </p>

        <h1 className="font-display text-4xl font-bold md:text-5xl">
          Fiona Spencer
        </h1>

        <p className="max-w-xl text-muted-foreground">
          Computer Science student focused on building clean, scalable systems
          across full-stack development, machine learning, and data-driven
          applications.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:justify-start pb-8">
          {["Full-Stack", "Machine Learning", "Data Systems"].map((tag) => (
            <span key={tag} className="modern-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT: image */}
        <div className="flex justify-center md:justify-start md:pl-28">        <img
          src={profileImage}
          alt="Fiona Spencer"
          className="h-64 w-64 md:h-75 md:w-75 rounded-full object-cover border border-white/10 shadow-soft transition duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}