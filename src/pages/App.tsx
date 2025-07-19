import Layout from "../components/Layout";
import MusicComponent from "../components/MusicComponent";
import TVComponent from "../components/TVComponent";
import GameComponent from "../components/GameComponent";
import RandomLyric from "../components/RandomLyric";

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
                src="https://storage.alexav.gg/content/yeehaw.jpg"
                className="rounded-md w-[150px]"
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
            <p>dexter, tlou, twd</p>

            <h1 className="font-bold text-2xl italic">status</h1>
            <TVComponent />
            <GameComponent />

            <h1 className="font-bold text-2xl italic">reach me</h1>
            <a href="mailto:alex@vierfrantz.com">
              <p className="underline">alex@vierfrantz.com</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
