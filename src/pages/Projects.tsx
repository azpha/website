import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <main className="my-12 sm:my-20">
      <div className="py-2">
        <p className="opacity-85 text-sm text-left">THINGS I'VE BUILT</p>
        <h1 className="text-3xl sm:text-4xl text-balance py-2">Projects</h1>
        <p className="py-2">
          Mostly pointless software, built for the fun of building it — a
          physical scoreboard, a subscription tracker, a data-export scraper,
          and the homelab that runs all of this.
        </p>
      </div>

      <hr className="my-4 border-zinc-800" />

      <section aria-labelledby="all-projects">
        <h2 id="all-projects" className="opacity-85 text-sm text-left pb-2">
          ALL PROJECTS
        </h2>
        <div className="my-2 space-y-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <hr className="my-4 border-zinc-800" />

      <p className="text-sm">
        <Link to="/" className="underline">
          &lt; Back home
        </Link>
      </p>

      <hr className="my-4 border-zinc-800" />

      <Footer />
    </main>
  );
}
