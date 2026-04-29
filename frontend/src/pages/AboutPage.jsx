import SkillsSection from "@/components/about/SkillsSection";
import InterestsSection from "@/components/about/InterestsSection";
import EducationSection from "@/components/about/EducationSection";
import HeroSection from "@/components/about/HeroSection";
import PersonalSection from "@/components/about/PersonalSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl space-y-8 px-4 py-10 md:py-14">

        <HeroSection />
        {/* intro */}
        <div className="space-y-4 text-sm text-muted-foreground md:text-base">
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

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" /> 

      <EducationSection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

      <SkillsSection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

      <InterestsSection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

      <PersonalSection />
      </section>
    </main>
  );
}