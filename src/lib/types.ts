export type ExperienceType = "work" | "education" | "certification" | "other";

export interface Experience {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights?: string[];
  type: ExperienceType;
  skills?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  coverImage?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  date: string;
}

export interface Social {
  platform: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  bio: string;
  skills: string[];
  interests: string[];
  email: string;
  socials: Social[];
  avatarUrl?: string;
}
