import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="my-12 sm:my-20">
      <div className="py-2">
        <p className="opacity-85 text-sm text-left">404</p>
        <h1 className="text-3xl sm:text-4xl text-balance py-2">
          There's nothing here
        </h1>
        <p className="py-2">
          That page doesn't exist — it may have moved, or it may never have
          existed in the first place.
        </p>
      </div>

      <ul className="py-2 space-y-1 list-disc list-inside">
        <li>
          <Link to="/" className="underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/sports" className="underline">
            Sports
          </Link>
        </li>
      </ul>

      <hr className="my-4 border-zinc-800" />

      <Footer />
    </main>
  );
}
