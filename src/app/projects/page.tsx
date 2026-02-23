import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { ProjectCard } from "@/components/project/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects built by Dario Douma — from AR mobile apps to full-stack web applications.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <Heading
          label="My Work"
          title="Projects"
          description="A collection of projects I've built. Each one taught me something new."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
