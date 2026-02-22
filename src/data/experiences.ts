import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "senior-engineer",
    title: "Senior Software Engineer",
    organization: "Acme Corp",
    startDate: "2023-01",
    description:
      "Leading frontend architecture and building scalable web applications for enterprise clients.",
    highlights: [
      "Led migration from legacy codebase to Next.js, improving page load times by 40%",
      "Mentored a team of 4 junior developers",
      "Designed and implemented a component library used across 3 products",
    ],
    type: "work",
    skills: ["React", "Next.js", "TypeScript", "AWS"],
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    organization: "StartupCo",
    startDate: "2021-03",
    endDate: "2022-12",
    description:
      "Full-stack development on a SaaS platform serving 10k+ users. Worked across the entire stack from database design to UI implementation.",
    highlights: [
      "Built real-time collaboration features using WebSockets",
      "Reduced API response times by 60% through query optimization",
      "Implemented CI/CD pipeline reducing deployment time from hours to minutes",
    ],
    type: "work",
    skills: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    id: "junior-dev",
    title: "Junior Developer",
    organization: "Digital Agency",
    startDate: "2019-06",
    endDate: "2021-02",
    description:
      "Developed responsive websites and web applications for a variety of clients across different industries.",
    highlights: [
      "Delivered 15+ client projects on time and within budget",
      "Introduced automated testing, increasing code coverage from 20% to 80%",
    ],
    type: "work",
    skills: ["JavaScript", "React", "CSS", "Node.js"],
  },
  {
    id: "bs-cs",
    title: "B.S. Computer Science",
    organization: "State University",
    startDate: "2015-09",
    endDate: "2019-05",
    description:
      "Studied computer science with a focus on software engineering and distributed systems.",
    highlights: [
      "Dean's List — 6 semesters",
      "Senior capstone: distributed task scheduling system",
    ],
    type: "education",
  },
  {
    id: "aws-cert",
    title: "AWS Solutions Architect Associate",
    organization: "Amazon Web Services",
    startDate: "2022-08",
    description:
      "Certified in designing distributed systems and deploying applications on AWS infrastructure.",
    type: "certification",
    skills: ["AWS", "Cloud Architecture"],
  },
];
