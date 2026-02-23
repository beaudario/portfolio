import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences — Dario",
  description: "Work experience, education, and certifications.",
};

export default function ExperiencesPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="mb-2 font-mono text-sm text-accent">My Journey</p>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Experiences</h1>
        <p className="mt-4 text-muted">
          A timeline of my professional experience, education, and
          certifications.
        </p>

        <div className="mt-12">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </Container>
    </Section>
  );
}
