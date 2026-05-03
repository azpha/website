import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-neutral-800 text-white min-h-screen flex justify-center items-center select-none">
      <div className="relative">{children}</div>
    </div>
  );
}
