import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import { findProject } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = findProject(slug);

  if (!project) return <NotFound />;

  return (
    <main className="my-12 sm:my-20">
      <nav aria-label="Breadcrumb" className="py-2">
        <p className="opacity-85 text-sm text-left">
          <Link to="/projects" className="hover:underline">
            PROJECTS
          </Link>
        </p>
      </nav>

      <div className="py-2">
        <h1 className="text-3xl sm:text-4xl text-balance py-2">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 py-2">
          {project.pills.map((pill) => (
            <div
              key={pill}
              className="bg-zinc-500 rounded-lg text-xs p-1 font-semibold"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>

      <div className="py-2 space-y-6">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="py-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-300 hover:underline"
        >
          View the source &gt;
        </a>
      </div>

      <hr className="my-4 border-zinc-800" />

      <p className="text-sm">
        <Link to="/projects" className="underline">
          &lt; All projects
        </Link>
      </p>

      <hr className="my-4 border-zinc-800" />

      <Footer />
    </main>
  );
}
