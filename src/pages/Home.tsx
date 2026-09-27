import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import FantasyStatus from "../components/FantasyStatus";
import PictureCarousel from "../components/modules/PictureCarousel";
import Footer from "../components/Footer";
import BlogRow from "../components/BlogRow";
import GameComponent from "../components/info/GameComponent";
import MusicComponent from "../components/info/MusicComponent";
import EmailLink from "../components/EmailLink";
import { PROJECTS } from "../data/projects";
import { PROFILES } from "../utils/site";

export default function Home() {
  return (
    <main className="my-12 sm:my-20">
      <div className="py-2">
        <p className="opacity-85 text-sm text-left">HI, I'M ALEX</p>
        <h1 className="text-3xl sm:text-4xl text-balance py-2">
          I write software sometimes, then I spend twice as long breaking it
        </h1>
      </div>
      <div className="py-2 space-y-6">
        <p>
          My day job is Senior QA at{" "}
          <a
            className="text-lime-300 hover:underline"
            href={PROFILES.medal}
            target="_blank"
            rel="me noopener noreferrer"
          >
            Medal.tv
          </a>{" "}
          (
          <a
            href="https://medal.tv/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            we're hiring!
          </a>
          ), then by night I play with my{" "}
          <Link to="/projects/homelab" className="underline">
            homelab rack
          </Link>{" "}
          or write some mediocre JavaScript.
        </p>
        <p>
          Based in Western New York (go bills, go sabres). Working on learning
          Java, C#. Pointless software for funzies is my passion. You can see{" "}
          <Link to="/sports" className="underline">
            what my teams are doing
          </Link>{" "}
          or reach me at <EmailLink className="underline" />.
        </p>
      </div>

      <hr className="my-4 border-zinc-800" />

      <section aria-labelledby="latest-post">
        <h2
          id="latest-post"
          className="opacity-85 text-sm text-left pb-2 underline"
        >
          <a href={PROFILES.blog} rel="me">
            LATEST BLOG POST
          </a>
        </h2>
        <BlogRow />
      </section>

      <hr className="my-4 border-zinc-800" />

      <section aria-labelledby="things-ive-built">
        <h2 id="things-ive-built" className="opacity-85 text-sm text-left pb-2">
          THINGS I'VE BUILT
        </h2>
        <div className="my-2 space-y-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <hr className="my-4 border-zinc-800" />

      <section aria-labelledby="my-activities">
        <h2 id="my-activities" className="opacity-85 text-sm text-left pb-2">
          MY ACTIVITIES
        </h2>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
          <GameComponent />
          <MusicComponent />
        </div>

        <div className="my-2 space-y-6">
          <div>
            <h3 className="text-sm opacity-85 font-semibold">Fantasy</h3>
            <FantasyStatus />
          </div>
          <div>
            <h3 className="text-sm opacity-85 font-semibold">
              My Life, Pictured
            </h3>
            <PictureCarousel />
          </div>
        </div>
      </section>

      <hr className="my-4 border-zinc-800" />

      <Footer />
    </main>
  );
}
