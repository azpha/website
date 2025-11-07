import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center sm:justify-center mx-auto select-none">
      <div className="w-full sm:w-[500px] relative">{children}</div>
    </div>
  );
}
