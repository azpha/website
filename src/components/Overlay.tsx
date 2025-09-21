import { ReactNode } from "react";

export default function Overlay({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="absolute bg-black/50 min-h-screen w-full z-1 overflow-hidden flex justify-center items-center"
    >
      <div className="max-w-fit max-h-fit">{children}</div>
    </div>
  );
}
