export type Project = {
  slug: string;
  title: string;
  /** one-line summary, used on cards and as the meta description */
  description: string;
  /** where the source lives */
  link: string;
  pills: string[];
  /** paragraphs of prose for the detail page */
  body: string[];
  isCert?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "led-matrix-scoreboard",
    title: "LED Matrix Scoreboard",
    description:
      "A physical scoreboard driven by an LED matrix, pulls live sports data and renders pixel by pixel.",
    link: "https://git.alexav.gg/alex/scoreboard",
    pills: ["Python", "Raspberry Pi", "Hardware"],
    body: [
      "I wanted live scores on a wall instead of on a phone, so I built a physical scoreboard: a Raspberry Pi driving an RGB LED matrix, polling live sports data and drawing the result pixel by pixel.",
      "The interesting constraint is the display itself. An LED matrix has no text rendering, no layout engine, and very few pixels to spend, so every score, team abbreviation, and clock has to be composed by hand and kept legible from across a room. The Python service handles fetching and caching the game state, then hands a frame to the matrix driver.",
      "Written in Python and running on a Raspberry Pi. The source is on my Gitea instance if you want to build one.",
    ],
  },
  {
    slug: "subber",
    title: "Subber",
    description:
      "Keeps track of your subscriptions and generates clear metrics for you to manage.",
    link: "https://github.com/azpha/subber",
    pills: ["TypeScript", "Tailwind", "Prisma"],
    body: [
      "Subber tracks recurring subscriptions and turns them into metrics you can actually act on — what you are paying monthly versus annually, and where the money is going.",
      "The problem with most subscription trackers is that they are a list. A list tells you what you signed up for; it does not tell you what it costs you over a year, or which renewals are about to land in the same week. Subber is built around the aggregate view first and the list second.",
      "TypeScript throughout, Prisma for the data layer, and Tailwind for the interface.",
    ],
  },
  {
    slug: "snapchat-memory-extractor",
    title: "Snapchat Memory Extractor",
    description:
      "Extracts your Snapchat memories from your data export in a cleaner format than their horrible index.html.",
    link: "https://github.com/azpha/snapchat-memory-extractor",
    pills: ["Python", "Automation"],
    body: [
      "When you request your data from Snapchat, your memories arrive as an enormous index.html full of links rather than as files you can actually keep. This tool takes that export and pulls the memories out into a sane folder of real media files.",
      "It is the kind of small, unglamorous automation that saves an afternoon of clicking. Point it at the export, let it walk the index, and it resolves and downloads each memory for you.",
      "Written in Python with no heavy dependencies, so it runs anywhere you can get a Python interpreter.",
    ],
  },
  {
    slug: "homelab",
    title: "Homelab",
    description:
      "My tinkering sandbox. Full CI/CD pipeline for people to learn & take inspiration from.",
    link: "https://git.alexav.gg/alex/homelab",
    pills: ["Docker", "Ansible", "Python", "Automation"],
    body: [
      "My homelab is where everything else on this site actually runs — this website, my Gitea instance, my analytics, my personal API. The whole thing is defined as code and deployed through its own CI/CD pipeline.",
      "I keep the repository public because homelab writeups tend to stop at the hardware photos, and the useful part is the boring middle: how services get configured, how deploys happen, how it recovers when something breaks. Docker for the services, Ansible for the configuration, Python for the glue.",
      "Take whatever is useful. It is a sandbox, so expect it to change.",
    ],
  },
];

export const CERTIFICATIONS: Project[] = [
  {
    slug: "foundational-csharp",
    title: "Foundational C# (Microsoft)",
    description:
      "Foundational C# course created by Microsoft, issued by FreeCodeCamp",
    link: "https://www.freecodecamp.org/certification/alexavf/foundational-c-sharp-with-microsoft",
    pills: ["Software Development", "C#"],
    body: [
      "A course created by Microsoft, a comprehensive intro to the core concepts and the syntax of C#.",
      "Worked with creating basic, logical console applications and how to work with data and properly debug using Visual Studio.",
    ],
  },
  {
    slug: "introduction-to-frontend-development",
    title: "Intro to Frontend Development (Meta)",
    description: "Intro to frontend created by Meta, issued by Coursera",
    link: "https://coursera.org/share/df3426a13f7bcdaa9f82f88e77554425",
    pills: ["Software Development", "JavaScript", "HTML", "CSS"],
    body: [
      "A course that took me through the basics of frontend development with JS, CSS, HTML and more.",
      "Currently working on the full certification from Meta, including experience with React, Git, Figma and more.",
    ],
  },
];

export function findProject(slug: string | undefined) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function findCertification(slug: string | undefined) {
  return CERTIFICATIONS.find((p) => p.slug === slug);
}
