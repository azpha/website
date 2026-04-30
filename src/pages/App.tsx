import { useState } from "react";
import Layout from "../components/Layout";
import PictureCarousel from "../components/modules/PictureCarousel";
import ScoreModule from "../components/modules/ScoreModule";
import FantasyStatus from "../components/FantasyStatus";
import Clock from "../components/modules/Clock";
import MusicComponent from "../components/info/MusicComponent";

const HomePage = () => {
  return (
    <>
      <div className="p-2">
        <div className="flex flex-row space-x-2">
          <img
            className="h-40 w-40 object-cover object-top rounded-lg"
            src="https://storage.alexav.gg/content/f49b355a-25cd-48ba-8421-da702620fcc6.jpeg"
          />
          <div>
            <p className="text-lg">@onelonesabre -- alex</p>
            <hr />
            <p>
              professional yapper
              <br />
              qa stuff @ medal
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">links</h1>
            <table className="border border-white border-solid sm:w-42 h-fit">
              <tr className="border-b border-white border-solid flex">
                <a
                  href="https://twitter.com/onelonesabre"
                  target="_blank"
                  className="hover:underline"
                >
                  <td className="px-2">twitter</td>
                </a>
              </tr>
              <tr className="border-b border-white border-solid flex">
                <a
                  href="https://instagram.com/alexfrantz07"
                  target="_blank"
                  className="hover:underline"
                >
                  <td className="px-2">instagram</td>
                </a>
              </tr>
              <tr className="border-b border-white border-solid flex">
                <a
                  href="https://medal.tv/u/alexav"
                  target="_blank"
                  className="hover:underline"
                >
                  <td className="px-2">medal</td>
                </a>
              </tr>
              <tr className="border-b border-white border-solid flex">
                <a
                  href="https://steampowered.com/id/bayharborsmoocher"
                  target="_blank"
                  className="hover:underline"
                >
                  <td className="px-2">steam</td>
                </a>
              </tr>
              <tr className="border-b border-white border-solid flex">
                <a
                  href="https://open.spotify.com/user/vdcj47vkp0cp9jkusnz5nckbj?si=c2a6473dc2294317"
                  target="_blank"
                  className="hover:underline"
                >
                  <td className="px-2">spotify</td>
                </a>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <hr className="border-black" />

      <div>
        <div className="grid grid-cols-2 mt-2">
          <div className="px-2 pb-2">
            <h1 className="text-2xl font-bold">about me</h1>
            <p>
              born and raised buffalonian + wnyer. doing qa work for 4 years and
              learning software engineering on the side. i also play acoustic
              guitar, been gaming since i was 4 and love going to games in
              Buffalo. incredibly awkward, but that's besides the point
            </p>
          </div>
          <div className="text-2xl w-[200px] mx-auto my-auto">
            <div>
              <span className="bg-black text-white px-1">shows</span> dexter,
              pitt, tlou, twd, yellowstone
            </div>
            <div>
              <span className="bg-black text-white px-1">music</span> ptv, 5sos,
              treaty oak, zach top, zach bryan
            </div>
          </div>
        </div>

        <MusicComponent />
      </div>
    </>
  );
};

const PicturesPage = ({
  setOverlayImage,
}: {
  setOverlayImage: (v: string | null) => void;
}) => {
  return (
    <div className="p-2 flex flex-col justify-center">
      <h1 className="text-2xl font-bold">pictures</h1>

      <div className="h-96 overflow-y-auto">
        <PictureCarousel onClick={(url: string) => setOverlayImage(url)} />
      </div>
    </div>
  );
};

export default function App() {
  const [tab, setTab] = useState<string>("home");
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  return (
    <Layout>
      {overlayImage && (
        <div
          onClick={() => setOverlayImage(null)}
          className="absolute min-h-screen min-w-screen bg-black/75"
        >
          <div className="flex justify-center items-center h-screen">
            <img className="w-[400px]" src={overlayImage} />
          </div>
        </div>
      )}

      {/* bg-[#ebebeb] */}
      <div className="min-h-screen flex justify-center items-center text-white">
        <div className="border-3 bg-gradient-to-t from-[#003087] to-[#FFB81C] border-black w-full sm:w-[500px]">
          <div>
            <div className="bg-[#003087] w-full">
              <div className="grid grid-cols-3 gap-2 p-2 text-2xl">
                <h1 className="font-semibold text-white">welcome</h1>
                <Clock />
                <h1 className="text-right text-transparent font-bold bg-clip-text bg-gradient-to-t from-[#003087] to-[#FFB81C]">
                  GO SABRES!
                </h1>
              </div>
            </div>

            <img
              className="h-[100px] object-[25%_35%] w-full object-cover"
              // src="https://storage.alexav.gg/content/1f822215-0768-424d-893a-13bcd10aa98b.jpg"
              src="https://storage.alexav.gg/content/sabres-board.jpg"
            />
            <hr className="border-black" />

            {tab === "home" && <HomePage />}
            {tab === "fantasy" && <FantasyStatus />}
            {tab === "pictures" && (
              <PicturesPage setOverlayImage={setOverlayImage} />
            )}
            {tab === "scores" && <ScoreModule />}

            <div className="grid grid-cols-4 text-center border-b border-b-black">
              <h1
                onClick={() => setTab("home")}
                className={`border-r-1 border-t-1 border-black hover:cursor-pointer ${tab === "home" && "underline"}`}
              >
                home
              </h1>
              <h1
                onClick={() => setTab("pictures")}
                className={`border-r-1 border-t-1 border-black hover:cursor-pointer ${tab === "pictures" && "underline"}`}
              >
                pictures
              </h1>
              <h1
                onClick={() => setTab("scores")}
                className={`border-t-1 border-black hover:cursor-pointer ${tab === "scores" && "underline"}`}
              >
                scores
              </h1>
              <h1
                onClick={() => setTab("fantasy")}
                className={`border-l-1 border-t-1 border-black hover:cursor-pointer ${tab === "fantasy" && "underline"}`}
              >
                fantasy
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
