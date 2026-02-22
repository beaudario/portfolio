import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    tagline: "A modern project management tool",
    description:
      "A full-stack project management application built with Next.js and PostgreSQL. Features real-time updates, drag-and-drop task boards, and team collaboration tools. Designed for small to medium teams who want a clean, fast alternative to bloated project management software.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    date: "2024-01",
  },
  {
    slug: "devlog",
    title: "DevLog",
    tagline: "A developer-focused blogging platform",
    description:
      "A minimalist blogging platform built for developers. Supports Markdown with syntax highlighting, code snippets, and LaTeX math rendering. Features a built-in analytics dashboard and RSS feed generation.",
    techStack: ["React", "Node.js", "MongoDB", "Markdown"],
    repoUrl: "https://github.com",
    featured: true,
    date: "2023-06",
  },
  {
    slug: "cli-toolkit",
    title: "CLI Toolkit",
    tagline: "A collection of developer CLI utilities",
    description:
      "A set of command-line tools for common developer tasks: project scaffolding, code generation, and automated refactoring. Written in TypeScript with a plugin architecture for extensibility.",
    techStack: ["TypeScript", "Node.js", "Commander.js"],
    repoUrl: "https://github.com",
    featured: false,
    date: "2023-03",
  },
];
