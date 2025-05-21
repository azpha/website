import { Twitter, Github } from "lucide-react";
import MusicComponent from "./components/MusicComponent";
import TVComponent from "./components/TVComponent";
import Layout from "./components/Layout";
import GameComponent from "./components/GameComponent";
import RandomLyric from "./components/RandomLyric";

export default function App() {
  return (
    <Layout>
      <div className="border border-white border-solid rounded-lg w-full sm:w-[500px] p-2">
        <div className="grid grid-cols-1 xs:grid-cols-2">
          <div className="mx-auto">
            <div>
              <h1 className="text-2xl font-bold italic opacity-95 inline">
                alex, 18
              </h1>
              <RandomLyric speed={0.2} />
              <img
                src="https://storage.alexav.gg/content/picture.gif"
                width="150"
                className="rounded-md"
                alt="Profile"
              />

              <div className="pt-2">
                <MusicComponent />
                <a
                  href="https://last.fm/user/lulawex"
                  target="_blank"
                  className="hover:underline w-fit opacity-50"
                >
                  powered by last.fm
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <h1 className="font-bold text-2xl italic">what i do</h1>
            <p>
              qa @{" "}
              <a
                href="https://medal.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                medal.tv
              </a>
              , game, code
            </p>

            <h1 className="font-bold text-2xl italic">obsessed with</h1>
            <p>tlou, twd, rdr, dexter</p>

            <h1 className="font-bold text-2xl italic">status</h1>
            <TVComponent />
            <GameComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
}
