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
      className="absolute bg-black/50 w-full h-full z-1 overflow-hidden flex justify-center items-center"
    >
      {children}
    </div>
  );
}
