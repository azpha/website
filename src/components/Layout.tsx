import type { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen w-full max-w-[42rem] 2xl:max-w-[48rem] mx-auto select-none px-5">
      <Header />
      <div className="relative">{children}</div>
    </div>
  );
}
