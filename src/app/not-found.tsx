import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function NotFound() {
  return (
    <Section>
      <Container className="max-w-2xl text-center">
        <p className="mb-2 font-mono text-sm text-accent">404</p>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Back to Home
        </Link>
      </Container>
    </Section>
  );
}
