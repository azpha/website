import { ReactNode } from "react";

export default function Overlay({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div onClick={onClose} className="fixed bg-black/50 w-full h-full z-1">
      {children}
    </div>
  );
}
