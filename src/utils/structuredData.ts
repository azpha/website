import {
  SITE_ORIGIN,
  SITE_NAME,
  AUTHOR_EMAIL,
  PROFILES,
  absoluteUrl,
} from "./site";
import type { Project } from "../data/projects";

const PERSON_ID = `${SITE_ORIGIN}/#alex`;

/** the Person + WebSite graph, the main signal for a name-query result */
export function personGraph(): object[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Alex Frantz",
      alternateName: ["alexav", "Alexavier Frantz"],
      url: SITE_ORIGIN,
      email: `mailto:${AUTHOR_EMAIL}`,
      jobTitle: "Senior QA Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Medal.tv",
        url: "https://medal.tv",
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "NY",
        addressCountry: "US",
        addressLocality: "Western New York",
      },
      knowsAbout: [
        "Quality Assurance",
        "Test Automation",
        "JavaScript",
        "TypeScript",
        "React",
        "Python",
        "Java",
        "C#",
        "Docker",
        "Homelab infrastructure",
      ],
      sameAs: [PROFILES.github, PROFILES.blog, PROFILES.medal, PROFILES.gitea],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: SITE_NAME,
      publisher: { "@id": PERSON_ID },
      inLanguage: "en-US",
    },
  ];
}

/** ProfilePage wrapper for the homepage, which is primarily about a person */
export function profilePageGraph(): object[] {
  return [
    ...personGraph(),
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: SITE_ORIGIN,
      mainEntity: { "@id": PERSON_ID },
    },
  ];
}

export function projectListGraph(projects: Project[]): object[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl("/projects"),
      name: "Projects",
      about: { "@id": PERSON_ID },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/projects/${project.slug}`),
          name: project.title,
        })),
      },
    },
  ];
}

export function projectGraph(project: Project): object[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      url: absoluteUrl(`/projects/${project.slug}`),
      codeRepository: project.link,
      programmingLanguage: project.pills,
      author: { "@id": PERSON_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Projects",
          item: absoluteUrl("/projects"),
        },
        { "@type": "ListItem", position: 2, name: project.title },
      ],
    },
  ];
}
