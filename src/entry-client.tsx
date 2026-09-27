import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.css";
import App from "./pages/App.tsx";
import InitialDataProvider from "./components/InitialDataProvider";
import { INITIAL_DATA_GLOBAL, type InitialData } from "./utils/initialData";

const initialData: InitialData =
  (window as unknown as Record<string, InitialData | undefined>)[
    INITIAL_DATA_GLOBAL
  ] ?? {};

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <InitialDataProvider value={initialData}>
      <App />
    </InitialDataProvider>
  </BrowserRouter>,
);
