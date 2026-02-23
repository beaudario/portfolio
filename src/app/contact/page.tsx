import type { Metadata } from "next";
import { Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Dario",
  description: "Get in touch with me.",
};

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />,
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Heading
          label="Get in Touch"
          title="Contact"
          description="Feel free to reach out — I'm always open to new opportunities and conversations."
        />

        <div className="mt-12 space-y-8">
          <ContactForm />

          <div>
            <h2 className="font-display mb-4 text-xl font-semibold">Socials</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
                >
                  <span className="text-accent">
                    {socialIcons[social.platform]}
                  </span>
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
