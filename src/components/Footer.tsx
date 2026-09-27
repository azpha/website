import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between">
      <EmailLink className="text-xs opacity-85 hover:underline" />
      <p className="text-xs opacity-85">&copy; 2026 Alex Frantz</p>
    </footer>
  );
}
