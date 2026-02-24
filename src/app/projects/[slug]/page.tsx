import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectDetail } from "@/components/project/project-detail";
import { projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: `${project.tagline} - A project by Dario Douma.`,
    openGraph: {
      title: project.title,
      description: project.tagline,
      ...(project.coverImage && {
        images: [{ url: project.coverImage, alt: project.title }],
      }),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <Section>
      <Container className="max-w-3xl">
        <ProjectDetail project={project} />
      </Container>
    </Section>
  );
}
