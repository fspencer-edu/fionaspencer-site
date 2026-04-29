import { useState, useEffect } from "react";

// automatically import all images from folder
const imageModules = import.meta.glob(
  "@/assets/personal/*.{jpg,jpeg,png}",
  { eager: true }
);

// convert to array
const images = Object.values(imageModules).map((mod) => mod.default);

export default function PersonalSection() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // optional auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-8">
      <h2 className="font-display text-2xl font-bold">Personal</h2>

      {/* Location */}
      <div>
        <h3 className="font-semibold">Location</h3>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Based in Toronto, Canada.
        </p>
      </div>

      {/* Interests */}
      <div>
        <h3 className="font-semibold">Interests</h3>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          I’m interested in cognitive machine learning, neuroscience, biology,
          economics, and emerging areas like 3D printing. I enjoy exploring how
          these fields connect, especially where technology intersects with human cognition.
        </p>
      </div>

      {/* Lifestyle */}
      <div>
        <h3 className="font-semibold">Lifestyle</h3>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Outside of my academic and technical work, I enjoy biking and running,
          and I have two dogs.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto w-full max-w-3xl justify-self-center">
        <img
          src={images[index]}
          alt="Personal"
          className="mx-auto w-1/2  rounded-xl object-cover shadow-soft transition duration-300"
        />

        {/* prev */}
        <button
          onClick={prev}
          className="absolute left-28 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-1 text-white backdrop-blur hover:bg-black/60"
        >
          ‹
        </button>

        {/* next */}
        <button
          onClick={next}
          className="absolute right-28 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-1 text-white backdrop-blur hover:bg-black/60"
        >
          ›
        </button>

        {/* dots */}
        <div className="mt-3 flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-foreground" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}