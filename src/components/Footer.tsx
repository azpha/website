export default function Footer() {
  return (
    <div className="w-full flex justify-between">
      <a
        href="#"
        onClick={() => navigator.clipboard.writeText("alex@alexav.gg")}
        className="text-xs opacity-85 hover:underline"
      >
        alex@alexav.gg
      </a>
      <p className="text-xs opacity-85">&copy; 2026 Alex Frantz</p>
    </div>
  );
}
