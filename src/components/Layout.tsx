import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen select-none">
      <div className="relative">{children}</div>
    </div>
  );
}
