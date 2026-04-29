const interests = [
  {
    title: "Machine Learning",
    text: "Applying models and data analysis to solve real-world problems, including classification and prediction tasks.",
  },
  {
    title: "Computer Vision",
    text: "Working with image processing, gesture recognition, and visual systems using tools like OpenCV and MediaPipe.",
  },
  {
    title: "3D Modeling",
    text: "Designing and building 3D models using Blender and Fusion 360 for visualization and prototyping.",
  },
  {
    title: "3D Printing",
    text: "Creating physical prototypes from digital designs, exploring rapid prototyping and hardware integration.",
  },
  {
    title: "Bioinformatics",
    text: "Exploring computational approaches to biological data, including genomics and data-driven analysis.",
  },
];

export default function InterestsSection() {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="font-display text-2xl font-bold">Focus Areas</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {interests.map((interest) => (
          <div
            key={interest.title}
            className="rounded-2xl border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="font-semibold">{interest.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {interest.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}