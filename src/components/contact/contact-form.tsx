"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold">Message sent!</p>
        <p className="mt-2 text-sm text-muted">Thanks for reaching out. I'll get back to you soon.</p>
        <button
          className="mt-4 text-sm text-accent underline-offset-4 hover:underline"
          onClick={() => setState("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent resize-none"
        />
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm text-red-500">
          Something went wrong. Please try again or reach out via socials.
        </p>
      )}

      <Button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
