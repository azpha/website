import { createContext, useContext } from "react";
import type { BlogPost } from "./types";

export type InitialData = {
  posts?: BlogPost[];
};

/**
 * Data fetched during SSR and handed to the client, so content that used to
 * appear only after a `useEffect` is present in the served HTML. Passed
 * through context rather than a module global, because a module global on the
 * server would be shared between concurrent requests.
 */
export const InitialDataContext = createContext<InitialData>({});

export function useInitialData() {
  return useContext(InitialDataContext);
}

export const INITIAL_DATA_GLOBAL = "__INITIAL_DATA__";

/** the <script> that carries SSR data across to hydration */
export function serializeInitialData(data: InitialData) {
  // </script> inside a json string would close the tag early; escaping the
  // slash keeps the json valid while making the sequence un-parseable
  const json = JSON.stringify(data).replace(/</g, "\u003c");
  return `<script>window.${INITIAL_DATA_GLOBAL}=${json}</script>`;
}
