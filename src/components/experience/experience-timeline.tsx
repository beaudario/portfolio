import type { Experience } from "@/lib/types";
import { ExperienceCard } from "@/components/experience/experience-card";

export function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative">
          <div className="absolute -left-8 top-7 h-3 w-3 rounded-full bg-accent" />
          <ExperienceCard experience={exp} />
        </div>
      ))}
    </div>
  );
}
