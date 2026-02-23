import { Briefcase, GraduationCap, Award, Star } from "lucide-react";
import type { Experience, ExperienceType } from "@/lib/types";

const typeIcons: Record<ExperienceType, React.ReactNode> = {
  work: <Briefcase size={16} />,
  education: <GraduationCap size={16} />,
  certification: <Award size={16} />,
  other: <Star size={16} />,
};

const typeLabels: Record<ExperienceType, string> = {
  work: "Work",
  education: "Education",
  certification: "Certification",
  other: "Other",
};

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { title, organization, startDate, endDate, description, highlights, type, skills } =
    experience;

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="mb-3 flex items-center gap-2 text-xs text-muted">
        <span className="text-accent" aria-hidden="true">{typeIcons[type]}</span>
        <span>{typeLabels[type]}</span>
        <span className="text-border">|</span>
        <span>
          {formatDate(startDate)} &mdash; {endDate ? formatDate(endDate) : "Present"}
        </span>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-0.5 font-mono text-sm text-accent">{organization}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {skills && skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-background px-2.5 py-0.5 font-mono text-xs text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
