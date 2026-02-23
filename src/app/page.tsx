import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />,
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Section className="py-24 md:py-32">
        <Container>
          <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 max-w-lg text-muted">{siteConfig.bio}</p>

          <div className="mt-8 flex items-center gap-4">
            {siteConfig.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {socialIcons[social.platform] ?? social.label}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              My Experience
            </Link>
          </div>
        </Container>
      </Section>

      {featured.length > 0 && (
        <Section className="border-t border-border">
          <Container>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 font-mono text-sm text-accent">
                  Featured Work
                </p>
                <h2 className="text-2xl font-bold sm:text-3xl text-balance">Projects</h2>
              </div>
              <Link
                href="/projects"
                className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:flex"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {featured.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
                >
                  <h3 className="text-lg font-semibold group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{project.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-background px-2.5 py-0.5 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/projects"
              className="mt-6 flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:hidden"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </Container>
        </Section>
      )}
    </>
  );
}
