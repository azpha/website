import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/main.css";
import App from "./pages/App.tsx";
import Music from "./pages/Music.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/music",
    element: <Music />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
