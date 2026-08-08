export default function Header() {
  return (
    <div className="flex justify-between py-4">
      <h1 className="font-bold">
        Alex <span className="font-normal text-blue-500">/</span> dev + QA
      </h1>
      <div className="space-x-2">
        <a
          href="https://github.com/azpha"
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="#"
          className="hover:underline"
          onClick={() => navigator.clipboard.writeText("alex@alexav.gg")}
        >
          alex@alexav.gg
        </a>
      </div>
    </div>
  );
}
