import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/project/project-card";
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
      <Section className="relative overflow-hidden py-24 md:py-32">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-20 h-[700px] w-[700px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #e8973a 0%, transparent 65%)", opacity: 0.13 }}
        />
        <Container>
          <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
            {/* Left: text content */}
            <div>
              <p className="mb-4 font-mono text-sm text-accent animate-fade-up">Hi, my name is</p>
              <h1
                className="font-display text-4xl font-bold sm:text-5xl md:text-6xl text-balance animate-fade-up"
                style={{ animationDelay: "80ms" }}
              >
                {siteConfig.name}
              </h1>
              <p
                className="mt-3 font-display text-xl font-light italic text-muted sm:text-2xl animate-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                {siteConfig.tagline}
              </p>
              <p
                className="mt-6 text-muted animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                {siteConfig.bio}
              </p>

              <div
                className="mt-8 flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: "320ms" }}
              >
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

              <div
                className="mt-10 flex flex-wrap gap-4 animate-fade-up"
                style={{ animationDelay: "420ms" }}
              >
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
            </div>

            {/* Right: photo */}
            <div className="flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 rounded-3xl blur-2xl"
                  style={{ background: "radial-gradient(circle, #e8973a 0%, transparent 70%)", opacity: 0.19 }}
                />
                <div className="relative h-[380px] w-[260px] overflow-hidden rounded-2xl border border-border transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/images/me.jpg"
                    alt="Dario"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
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
                <h2 className="font-display text-2xl font-bold sm:text-3xl text-balance">Projects</h2>
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
                <ProjectCard key={project.slug} project={project} />
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
