import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Dario",
  description: "Learn more about me, my skills, and interests.",
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Heading label="Get to Know Me" title="About" />

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Bio</h2>
            <p className="leading-relaxed text-muted">{siteConfig.bio}</p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="border border-border bg-surface px-3 py-1 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {siteConfig.interests.map((interest) => (
                <Badge
                  key={interest}
                  className="border border-border bg-surface px-3 py-1 text-sm"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
