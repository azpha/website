import { matchRoutes } from "react-router-dom";
import { routes, NOT_FOUND_META, type AppRoute } from "../routes";
import type { PageMeta } from "./seo";

export type Resolved = { meta: PageMeta; status: 200 | 404 };

/**
 * Map a request url to its head metadata and http status. Shared by the server
 * (which needs the status) and the client (which needs the title on
 * navigation), so the two can never disagree about what a url is.
 */
export function resolveMeta(url: string): Resolved {
  const pathname = normalizePath(url);

  const matches = matchRoutes(
    routes.map((route) => ({ path: route.path, meta: route.meta })),
    pathname,
  );
  const match = matches?.[matches.length - 1];
  if (!match) return { meta: NOT_FOUND_META, status: 404 };

  const route = match.route as unknown as AppRoute;
  // the in-app catch-all resolves, but it is still a miss
  if (route.path === "*") return { meta: NOT_FOUND_META, status: 404 };

  // meta() returns null when the path shape matched but the resource does not
  // exist, e.g. /projects/not-a-real-slug
  const meta = route.meta(match.params);
  if (!meta) return { meta: NOT_FOUND_META, status: 404 };

  return { meta, status: 200 };
}

export function normalizePath(url: string) {
  const pathname = url.split("?")[0].split("#")[0];
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}
