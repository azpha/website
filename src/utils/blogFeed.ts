import type { BlogPost } from "./types";

const FEED_URL = "https://blog.alexav.gg/api/posts";
const TTL_MS = 5 * 60 * 1000;

let cache: { at: number; posts: BlogPost[] } | null = null;

/**
 * Server-side fetch of the blog index, memoized for a few minutes so a crawl
 * does not hammer blog.alexav.gg. Never throws — a dead feed should degrade to
 * an empty section, not a 500.
 */
export async function fetchPosts(): Promise<BlogPost[]> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.posts;

  try {
    const res = await fetch(FEED_URL, {
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) throw new Error(`feed responded ${res.status}`);

    const data = (await res.json()) as BlogPost[];
    // project down to the fields the ui uses. the api also returns the full
    // post body and internal ids, and all of that would otherwise be inlined
    // into every html response
    const posts = (Array.isArray(data) ? data : []).map(
      ({ id, title, description, slug, createdAt }) => ({
        id,
        title,
        description,
        slug,
        createdAt,
      }),
    );
    cache = { at: Date.now(), posts };
    return posts;
  } catch (e) {
    console.error("Failed to fetch blog posts during SSR:", e);
    // serve the stale copy rather than nothing if we ever had one
    return cache?.posts ?? [];
  }
}
