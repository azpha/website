import { Link } from "react-router-dom";
import { PROFILES } from "../utils/site";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4">
      {/* site chrome, not the page topic — this was an <h1> on every page */}
      <p className="font-bold">
        <Link to="/">
          Alex <span className="font-normal text-blue-500">/</span> dev + QA
        </Link>
      </p>
      <nav
        aria-label="Site"
        className="flex flex-wrap gap-3 text-sm sm:text-base"
      >
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>
        <Link to="/certifications" className="hover:underline">
          Certifications
        </Link>
        <a
          href={PROFILES.github}
          target="_blank"
          rel="me noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a href={PROFILES.blog} rel="me" className="hover:underline">
          Blog
        </a>
      </nav>
    </header>
  );
}
