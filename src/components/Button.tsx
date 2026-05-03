import { ReactNode } from "react";

export default function Button({
  onClick,
  active = false,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  children: string | ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-black hover:cursor-pointer rounded-lg text-white px-4 ${active && "underline"}`}
    >
      {children}
    </button>
  );
}
