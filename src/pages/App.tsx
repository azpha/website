import Layout from "../components/Layout";
import MusicComponent from "../components/MusicComponent";
import TVComponent from "../components/TVComponent";
import GameComponent from "../components/GameComponent";
import FantasyStatus from "../components/FantasyStatus";
import Picture from "../components/Picture";
import Overlay from "../components/Overlay";
import { useState } from "react";

const images = [
  "https://storage.alexav.gg/content/1f822215-0768-424d-893a-13bcd10aa98b.jpg",
  "https://storage.alexav.gg/content/de890eaf-fc73-42a4-9fbe-a62313394a4c.jpg",
  "https://storage.alexav.gg/content/d057af80-3d03-45ca-88b2-680c1e7c63c1.jpg",
  "https://storage.alexav.gg/content/1d717aab-3058-405a-b04d-324d7ab3e658.jpg",
  "https://storage.alexav.gg/content/2f36c1dd-eaf8-4fd3-a3cd-1d25fe8f5a07.jpg",
];
// const lyrics: LyricItem[] = [
//   {
//     string: "and we're laying on the roof of my car",
//     url: "https://open.spotify.com/track/4Pt2R2EJ3rZBRn2JpH7WnJ?si=7a167c7b22354d24",
//   },
//   {
//     string: "your funeral was beautiful",
//     url: "https://open.spotify.com/track/4ZJ4vzLQekI0WntDbanNC7?si=914245f4e48a4c00",
//   },
//   {
//     string: "she was always the one",
//     url: "https://open.spotify.com/track/21n769QrJtrmN0pXuBkYOm?si=b4a5e7f627b54fd9",
//   },
//   {
//     string: "how lucky are we?",
//     url: "https://open.spotify.com/track/5iJKGpnFfvbjZJeAtwXfCj?si=a0b160c9cead4863",
//   },
//   {
//     string: "i'm yours to take darlin'",
//     url: "https://open.spotify.com/track/2nATTe1i7aMzIZ8klEpgQ7?si=1bcd8e6aa9324b81",
//   },
//   {
//     string: "wet, hot, american nights",
//     url: "https://open.spotify.com/track/3c9EsIo34kil8Oj1reaozB?si=8c0aaf0fdb7a4e5f",
//   },
//   {
//     string: "it ain't the whiskey that gets me",
//     url: "https://open.spotify.com/track/0AsrOS8HktHe9TaB1i9W3v?si=c186a29f4e804d05",
//   },
//   {
//     string: "i wrote a song for you",
//     url: "https://open.spotify.com/track/744zwLqGKbOZW3RnxkRfHE?si=4d2230964fcc4f2f",
//   },
//   {
//     string: "oh madeline, how you been?",
//     url: "https://open.spotify.com/track/2DDo2QqElDO9PgOHeGtQiy?si=0fdcbaeb64694249",
//   },
//   {
//     string: "she makes this country boy feel like a king",
//     url: "https://open.spotify.com/track/091Ibwvg7tTp7eNGLlT7cT?si=67be323416b24729",
//   },
//   {
//     string: "ain't in it for my health",
//     url: "https://open.spotify.com/track/5Mz9T6QGwScq6Yt7DAXxi8?si=f51ff7f76dd24b00",
//   },
// ];
// type LyricItem = {
//   string: string;
//   url: string;
// };

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string>("");

  // const [lyric, setLyric] = useState<LyricItem | null>();
  // const getRandomLyric = () => {
  //   const randomNumber = Math.floor(Math.random() * lyrics.length);
  //   setLyric(lyrics[randomNumber]);
  // };
  // useEffect(() => {
  //   getRandomLyric();
  // }, []);

  return (
    <Layout>
      {selectedImage !== "" && (
        <Overlay onClose={() => setSelectedImage("")}>
          <img width="400" height="400" src={selectedImage} />
        </Overlay>
      )}

      <div className="my-2 space-y-4">
        <div className="border border-white border-solid p-2 rounded-lg flex justify-between">
          <h1 className="text-2xl font-bold">welcome to my site !</h1>
        </div>

        <div className="border border-white border-solid rounded-lg p-2">
          <h1 className="text-2xl font-bold italic">pictures</h1>

          <div className="whitespace-nowrap overflow-x-auto">
            <div className="my-2 space-x-2">
              {images.map((v, k) => {
                return (
                  <Picture
                    key={k}
                    image={v}
                    onClick={() => setSelectedImage(v)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <GameComponent />

        <div className="border border-white border-solid rounded-lg p-2">
          <div className="flex flex-wrap justify-between p-2">
            <div>
              <h1 className="text-2xl font-bold italic opacity-95">alex, 18</h1>
              <img
                src="https://storage.alexav.gg/content/yeehaw.jpg"
                className="rounded-md w-[150px] h-[110px] object-cover object-left-top"
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
            <div>
              <h1 className="font-bold text-2xl italic">what i do</h1>
              <p>
                qa @{" "}
                <a
                  href="https://medal.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#bff83e]"
                >
                  medal.tv
                </a>
                , game, code
              </p>
              <h1
                className="italic opacity-50 font-semibold underline"
                onClick={() =>
                  navigator.clipboard.writeText("alex@vierfrantz.com")
                }
              >
                alex@vierfrantz.com
              </h1>

              <hr className="my-2" />

              <h1 className="font-bold text-2xl italic">obsessed with</h1>
              <p>dexter, tlou, twd</p>

              <hr className="my-2" />

              <h1 className="font-bold text-2xl italic">status</h1>
              <TVComponent />
            </div>
          </div>
        </div>
        <FantasyStatus />
      </div>
    </Layout>
  );
}
