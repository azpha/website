import type { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen sm:w-[95%] md:w-[75%] lg:w-[50%] xl:w-[25%] mx-auto select-none px-4 md:px-0">
      <Header />
      <div className="relative">{children}</div>
    </div>
  );
}
