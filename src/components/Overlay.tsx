import { ReactNode } from "react";

export default function Overlay({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    // <div onClick={onClose} className="fixed bg-black/50">
    //   <p
    //     onClick={onClose}
    //     className="absolute text-2xl font-bold top-4 right-4 bg-white text-black rounded-full p-2"
    //   >
    //     X
    //   </p>
    //   {children}
    // </div>
    <div onClick={onClose} className="fixed bg-black/50 w-full h-full z-1">
      {children}
    </div>
  );
}
