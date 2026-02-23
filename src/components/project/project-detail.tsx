import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div>
      <Button href="/projects" variant="ghost" className="mb-8 -ml-2">
        <ArrowLeft size={16} /> Back to Projects
      </Button>

      <p className="mb-2 font-mono text-sm text-accent">{project.date}</p>
      <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
      <p className="mt-2 text-lg text-muted">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl && (
          <Button href={project.liveUrl} external>
            <ExternalLink size={16} /> Site
          </Button>
        )}
        {project.appStoreUrl && (
          <Button href={project.appStoreUrl} external>
            <ExternalLink size={16} /> App Store
          </Button>
        )}
        {project.repoUrl && (
          <Button href={project.repoUrl} variant="secondary" external>
            <Github size={16} /> Source Code
          </Button>
        )}
        {project.extraLinks?.map((link) => (
          <Button key={link.href} href={link.href} variant="secondary" external>
            <ExternalLink size={16} /> {link.label}
          </Button>
        ))}
      </div>

      {project.coverImage && (
        <div className="mt-8 overflow-hidden rounded-xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">About</h2>
        <p className="leading-relaxed text-muted">{project.description}</p>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} className="border border-border bg-surface px-3 py-1 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-semibold">Images</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((src, i) => (
              <div key={src} className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
