import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { routes } from "../routes";
import { resolveMeta } from "../utils/resolveMeta";

/**
 * SSR sets the title in the document head; this keeps it correct after a
 * client-side navigation, which never re-runs that head injection.
 */
function TitleSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { meta } = resolveMeta(pathname);
    document.title = meta.title;

    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (canonical) {
      canonical.href = new URL(meta.path, window.location.origin).href;
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <TitleSync />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
}
