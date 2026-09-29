import type { ReactElement } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Sports from "./pages/Sports";
import Pictures from "./pages/Pictures";
import NotFound from "./pages/NotFound";
import {
  CERTIFICATIONS,
  PROJECTS,
  findProject,
  findCertification,
} from "./data/projects";
import type { PageMeta } from "./utils/seo";
import {
  profilePageGraph,
  projectListGraph,
  projectGraph,
  certificationGraph,
  certificationListGraph,
} from "./utils/structuredData";
import Certifications from "./pages/Certifications";
import CertificationDetail from "./pages/CertificationDetail";

type Params = Record<string, string | undefined>;

export type AppRoute = {
  path: string;
  element: ReactElement;
  /**
   * Head metadata for the route. Returns null when the path matched but the
   * resource does not exist (an unknown project slug), which the server turns
   * into a real 404 rather than a soft one.
   */
  meta: (params: Params) => PageMeta | null;
  /** concrete urls to list in the sitemap; omit to exclude the route */
  sitemapPaths?: () => string[];
};

export const NOT_FOUND_META: PageMeta = {
  title: "Page not found — Alex Frantz",
  description: "That page doesn't exist.",
  path: "/404",
  noindex: true,
};

export const routes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
    sitemapPaths: () => ["/"],
    meta: () => ({
      title: "Alex Frantz — Senior QA Engineer & Developer",
      description:
        "Senior QA engineer at Medal.tv, based in Western New York. I write software, then spend twice as long breaking it — homelab, JavaScript and Python projects.",
      path: "/",
      type: "profile",
      jsonLd: profilePageGraph(),
    }),
  },
  {
    path: "/projects",
    element: <Projects />,
    sitemapPaths: () => ["/projects"],
    meta: () => ({
      title: "Projects — Alex Frantz",
      description:
        "The things I've built: an LED matrix scoreboard, a subscription tracker, a Snapchat export extractor, and the homelab that runs all of it.",
      path: "/projects",
      jsonLd: projectListGraph(PROJECTS),
    }),
  },
  {
    path: "/projects/:slug",
    element: <ProjectDetail />,
    sitemapPaths: () => PROJECTS.map((p) => `/projects/${p.slug}`),
    meta: (params) => {
      const project = findProject(params.slug);
      if (!project) return null;

      return {
        title: `${project.title} — Alex Frantz`,
        description: project.description,
        path: `/projects/${project.slug}`,
        type: "article",
        jsonLd: projectGraph(project),
      };
    },
  },
  {
    path: "/certifications",
    element: <Certifications />,
    sitemapPaths: () => ["/certifications"],
    meta: () => ({
      title: "Certifications — Alex Frantz",
      description:
        "All of my professionally-issued certifications. From software development to software testing, I am always studying something.",
      path: "/certifications",
      jsonLd: certificationListGraph(PROJECTS),
    }),
  },
  {
    path: "/certifications/:slug",
    element: <CertificationDetail />,
    sitemapPaths: () => CERTIFICATIONS.map((p) => `/certifications/${p.slug}`),
    meta: (params) => {
      const certification = findCertification(params.slug);
      if (!certification) return null;

      return {
        title: `${certification.title} — Alex Frantz`,
        description: certification.description,
        path: `/certifications/${certification.slug}`,
        type: "article",
        jsonLd: certificationGraph(certification),
      };
    },
  },
  {
    path: "/sports",
    element: <Sports />,
    sitemapPaths: () => ["/sports"],
    meta: () => ({
      title: "Bills, Sabres & Yankees Scores — Alex Frantz",
      description:
        "Live Buffalo Bills and Buffalo Sabres scores, plus how my fantasy football matchup is going this week.",
      path: "/sports",
    }),
  },
  {
    path: "/pictures",
    element: <Pictures />,
    sitemapPaths: () => ["/pictures"],
    meta: () => ({
      title: "Pictures — Alex Frantz",
      description:
        "Photos from my camera roll: Western New York, the homelab rack, and whatever else I pointed a camera at.",
      path: "/pictures",
    }),
  },
  {
    // the in-app catch-all. the server independently answers 404 for anything
    // that lands here, so this never becomes a soft 404
    path: "*",
    element: <NotFound />,
    meta: () => NOT_FOUND_META,
  },
];

/** every indexable url, for sitemap.xml */
export function sitemapPaths(): string[] {
  return routes.flatMap((route) => route.sitemapPaths?.() ?? []);
}
