import { renderToString } from "react-dom/server";
import App from "./pages/App";
import { StaticRouter } from "react-router-dom";
import { resolveMeta, normalizePath } from "./utils/resolveMeta";
import { renderHead } from "./utils/seo";
import { fetchPosts } from "./utils/blogFeed";
import { sitemapPaths } from "./routes";
import { absoluteUrl } from "./utils/site";
import InitialDataProvider from "./components/InitialDataProvider";
import { serializeInitialData, type InitialData } from "./utils/initialData";

export async function render(url: string) {
  const location = normalizePath(url);
  const { meta, status } = resolveMeta(location);

  // fetched here rather than in a useEffect so the content is in the served
  // html. memoized in blogFeed, and it never throws.
  const posts = await fetchPosts();
  const data: InitialData = { posts: posts.slice(0, 3) };

  const html = renderToString(
    <StaticRouter location={location}>
      <InitialDataProvider value={data}>
        <App />
      </InitialDataProvider>
    </StaticRouter>,
  );

  return {
    html,
    // the data script goes in the head so it runs before the deferred client
    // module reads it, and so it cannot cause a hydration mismatch inside #root
    head: `${renderHead(meta)}\n    ${serializeInitialData(data)}`,
    statusCode: status,
  };
}

/**
 * sitemap.xml, generated from the same route table the router uses, so it can
 * never list a url that does not exist or miss one that does. No lastmod:
 * fabricated dates are worse than none, and Google ignores unreliable ones.
 */
export function renderSitemap() {
  const urls = sitemapPaths()
    .map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
