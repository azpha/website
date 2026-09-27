import {
  SITE_NAME,
  SITE_LOCALE,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  absoluteUrl,
} from "./site";

export type PageMeta = {
  /** full <title> text, already including any " — Alex Frantz" suffix */
  title: string;
  description: string;
  /** site-relative path, used for the canonical and og:url */
  path: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** og:type, defaults to "website" */
  type?: string;
  noindex?: boolean;
  /** one or more JSON-LD objects to emit as ld+json */
  jsonLd?: object[];
};

/** escape a value for interpolation into a double-quoted html attribute */
function attr(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** escape for text content, e.g. inside <title> */
function text(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// </script> inside a json string would close the tag early. escaping the
// slash keeps the json valid while making the sequence un-parseable as a tag
function jsonLdPayload(data: object) {
  return JSON.stringify(data).replace(/</g, "\u003c");
}

/**
 * Build the per-route <head> fragment injected at the `<!--app-head-->`
 * placeholder in index.html. Plain string building rather than a helmet-style
 * library, because SSR already owns the document head.
 */
export function renderHead(meta: PageMeta): string {
  const canonical = absoluteUrl(meta.path);
  const image = meta.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = meta.imageAlt ?? DEFAULT_OG_IMAGE_ALT;
  const type = meta.type ?? "website";

  // a noindex page should not claim a canonical url of its own
  const canonicalTags = meta.noindex
    ? []
    : [
        `<link rel="canonical" href="${attr(canonical)}" />`,
        `<meta property="og:url" content="${attr(canonical)}" />`,
      ];

  const tags: string[] = [
    `<title>${text(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    ...canonicalTags,
    meta.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large" />`,

    `<meta property="og:type" content="${attr(type)}" />`,
    `<meta property="og:site_name" content="${attr(SITE_NAME)}" />`,
    `<meta property="og:locale" content="${attr(SITE_LOCALE)}" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:image" content="${attr(image)}" />`,
    `<meta property="og:image:alt" content="${attr(imageAlt)}" />`,

    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
    `<meta name="twitter:image" content="${attr(image)}" />`,
    `<meta name="twitter:image:alt" content="${attr(imageAlt)}" />`,
  ];

  if (meta.imageWidth && meta.imageHeight) {
    tags.push(
      `<meta property="og:image:width" content="${meta.imageWidth}" />`,
      `<meta property="og:image:height" content="${meta.imageHeight}" />`,
    );
  }

  for (const block of meta.jsonLd ?? []) {
    tags.push(
      `<script type="application/ld+json">${jsonLdPayload(block)}</script>`,
    );
  }

  return tags.join("\n    ");
}
