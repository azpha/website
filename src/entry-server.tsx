import { renderToString } from "react-dom/server";
import * as RouterExports from "react-router-dom";
import App from "./pages/App";

// Vite's SSR runner resolves react-router-dom to its CommonJS build, so the
// named exports land on `.default`; fall back to the namespace when not.
const { StaticRouter } =
  (RouterExports as { default?: typeof RouterExports }).default ?? RouterExports;

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
  return { html };
}
