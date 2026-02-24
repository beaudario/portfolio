import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Dario Douma - his skills, interests, and background as a software engineer.",
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Heading label="Get to Know Me" title="About" />

        <div className="mt-12 space-y-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0 w-full md:w-auto">
              <div className="relative mx-auto md:mx-0 h-[320px] w-[220px] overflow-hidden rounded-2xl border border-border" style={{ boxShadow: "0 0 40px 0 rgba(232, 151, 58, 0.15)" }}>
                <Image
                  src="/images/me.jpg"
                  alt="Dario"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display mb-4 text-xl font-semibold">Bio</h2>
              <p className="leading-relaxed text-muted">{siteConfig.bio}</p>
            </div>
          </div>

          <div>
            <h2 className="font-display mb-4 text-xl font-semibold">Skills</h2>
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
            <h2 className="font-display mb-4 text-xl font-semibold">Interests</h2>
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
