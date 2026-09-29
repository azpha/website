import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { CERTIFICATIONS } from "../data/projects";

export default function Certifications() {
  return (
    <main className="my-12 sm:my-20">
      <div className="py-2">
        <p className="opacity-85 text-sm text-left">CERTIFICATIONS</p>
        <h1 className="text-3xl sm:text-4xl text-balance py-2">
          Professional Certifications
        </h1>
        <p className="py-2">
          All of my personal professional certifications for different things in
          the software dev /QA testing space.
        </p>
      </div>

      <hr className="my-4 border-zinc-800" />

      <section aria-labelledby="all-certifications">
        <h2
          id="all-certifications"
          className="opacity-85 text-sm text-left pb-2"
        >
          ALL CERTIFICATIONS
        </h2>
        <div className="my-2 space-y-2">
          {CERTIFICATIONS.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{ ...project, isCert: true }}
            />
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
