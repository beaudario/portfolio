import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "de-techniekroute",
    title: "De Techniekroute",
    tagline: "An AR mobile app exploring Hengelo's industrial heritage",
    description:
      "De Techniekroute is a mobile augmented reality app developed during an 8-month internship (November 2022 – June 2023) at Gamelab Oost, in collaboration with TriMotion. The app guides users along a route through Hengelo, revealing the city's industrial history through AR experiences at key locations. Using Unity and AR Foundation, I built interactive AR scenes that overlay historical and technical content onto real-world landmarks. The app was showcased at local venues including the Hengelo train station and is available on the App Store.",
    techStack: ["Unity", "C#", "AR Foundation", "ARCore", "ARKit"],
    coverImage: "/images/projects/de-techniekroute/banner.jpeg",
    images: [
      "/images/projects/de-techniekroute/end-presentation.jpeg",
      "/images/projects/de-techniekroute/playtest-roc.jpeg",
      "/images/projects/de-techniekroute/station-banners.jpeg",
    ],
    liveUrl: "https://www.techniekroutehengelo.nl/",
    appStoreUrl: "https://apps.apple.com/nl/app/techniekroute/id1622025282",
    extraLinks: [
      { label: "TriMotion Case", href: "https://trimotion.nl/cases/de-techniekroute" },
    ],
    featured: true,
    date: "2023-06",
  },
];
