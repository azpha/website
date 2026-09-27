// the public origin, in one place. previously hardcoded in four separate
// places in index.html, which is why nothing could build a canonical url
export const SITE_ORIGIN = "https://alexav.gg";

export const SITE_NAME = "Alex Frantz";
export const SITE_LOCALE = "en_US";
export const AUTHOR_EMAIL = "alex@alexav.gg";

export const DEFAULT_OG_IMAGE =
  "https://storage.alexav.gg/content/picturev2.jpg";
export const DEFAULT_OG_IMAGE_ALT = "Alex Frantz";

// external properties, kept together so the JSON-LD `sameAs` graph and the
// rendered links cannot drift apart
export const PROFILES = {
  github: "https://github.com/azpha",
  blog: "https://blog.alexav.gg",
  medal: "https://medal.tv/u/alexav",
  gitea: "https://git.alexav.gg/alex",
} as const;

/** absolute url for a site-relative path, with no trailing slash */
export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return SITE_ORIGIN;
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return SITE_ORIGIN + withSlash.replace(/\/+$/, "");
}
