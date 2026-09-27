import type { ReactNode } from "react";
import { InitialDataContext, type InitialData } from "../utils/initialData";

export default function InitialDataProvider({
  value,
  children,
}: {
  value: InitialData;
  children: ReactNode;
}) {
  return (
    <InitialDataContext.Provider value={value}>
      {children}
    </InitialDataContext.Provider>
  );
}
