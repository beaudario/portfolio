import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-xl border border-border bg-surface transition-colors hover:border-accent/50 overflow-hidden"
    >
      {project.coverImage && (
        <div className="relative w-full h-48">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
