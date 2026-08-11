import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import FantasyStatus from "../components/FantasyStatus";
import PictureCarousel from "../components/modules/PictureCarousel";
import Footer from "../components/Footer";

export default function App() {
  return (
    <Layout>
      <main className="my-12 sm:my-20">
        <div className="py-2">
          <p className="opacity-85 text-sm text-left">HI, I'M ALEX</p>
          <h1 className="text-3xl sm:text-4xl text-balance py-2">
            I write software sometimes, then I spend twice as long breaking it
          </h1>
        </div>
        <div className="py-2 space-y-6">
          <p>
            My day job is software QA at{" "}
            <a
              className="text-lime-300 hover:underline"
              href="https://medal.tv/u/alexav"
              target="_blank"
            >
              Medal.tv
            </a>{" "}
            (
            <a
              href="https://medal.tv/careers"
              target="_blank"
              className="underline"
            >
              we're hiring!
            </a>
            ), then by night I play with my homelab rack or write some mediocre
            JavaScript.
          </p>
          <p>
            Based in Western New York (go bills, go sabres). Working on learning
            Java, C#. Pointless software for funzies is my passion.
          </p>
        </div>

        <hr className="my-4 border-zinc-800" />

        <p className="opacity-85 text-sm text-left pb-2">THINGS I'VE BUILT</p>
        <div className="my-2 space-y-2">
          <ProjectCard
            title={"LED Matrix Scoreboard"}
            description={
              "A physical scoreboard driven by an LED matrix, pulls live sports data and renders pixel by pixel."
            }
            link="https://git.alexav.gg/alex/scoreboard"
            pills={["Python", "Raspberry Pi", "Hardware"]}
          />
          <ProjectCard
            title={"Subber"}
            description={
              "Keeps track on your subscriptions and generates clear metrics for you to manage."
            }
            link="https://github.com/azpha/subber"
            pills={["TypeScript", "Tailwind", "Prisma"]}
          />
          <ProjectCard
            title={"Snapchat Memory Extractor"}
            description={
              "Extracts your Snapchat memories from your data export in a cleaner format than their horrible index.html."
            }
            link="https://github.com/azpha/snapchat-memory-extractor"
            pills={["Python", "Automation"]}
          />
          <ProjectCard
            title={"Homelab"}
            description={
              "My tinkering sandbox. Full CI/CD pipeline for people to learn & take inspiration from."
            }
            link="https://git.alexav.gg/alex/homelab"
            pills={["Docker", "Ansible", "Python", "Automation"]}
          />
        </div>

        <hr className="my-4 border-zinc-800" />

        <p className="opacity-85 text-sm text-left pb-2">FUN STUFF</p>
        <div className="my-2 space-y-6">
          <div>
            <h1 className="text-sm opacity-85 font-semibold">Fantasy</h1>
            <FantasyStatus />
          </div>
          <div>
            <h1 className="text-sm opacity-85 font-semibold">
              My Life, Pictured
            </h1>
            <PictureCarousel />
          </div>
        </div>

        <hr className="my-4 border-zinc-800" />

        <Footer />
      </main>
    </Layout>
  );
}
