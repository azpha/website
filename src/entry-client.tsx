import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.css";
import App from "./pages/App.tsx";

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
