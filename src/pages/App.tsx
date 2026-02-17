import { useState } from "react";
import Layout from "../components/Layout";
import GameComponent from "../components/info/GameComponent";
import PictureCarousel from "../components/modules/PictureCarousel";
import ScoreModule from "../components/modules/ScoreModule";
import StatModule from "../components/modules/StatModule";
import FantasyStatus from "../components/FantasyStatus";
import Clock from "../components/modules/Clock";
import MusicComponent from "../components/info/MusicComponent";

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

      <div className="min-h-screen flex justify-center items-center">
        <div className="border-3 bg-[#ebebeb] border-black w-full sm:w-[500px]">
          <div className="] text-black">
            <div className="bg-black w-full text-white">
              <div className="grid grid-cols-3 gap-2 p-2 text-2xl">
                <h1 className="font-semibold">welcome</h1>
                <Clock />
                <h1 className="text-right">let it rip</h1>
              </div>
            </div>

            <img
              className="h-[100px] object-[25%_75%] w-full object-cover"
              src="https://storage.alexav.gg/content/1f822215-0768-424d-893a-13bcd10aa98b.jpg"
            />
            <hr className="border-black" />
            <div className="p-2">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <img
                    className="h-40 w-50 object-cover object-top"
                    src="https://storage.alexav.gg/content/f49b355a-25cd-48ba-8421-da702620fcc6.jpeg"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">hi, i'm alex!</h1>
                  <p className="text-lg">
                    i do QA stuff at{" "}
                    <a
                      className="underline"
                      href="https://medal.tv/u/alexav"
                      target="_blank"
                    >
                      Medal.tv{" "}
                    </a>
                    and write mediocre code sometimes
                  </p>
                  <hr />
                  <div className="block space-x-1">
                    <a
                      href="https://twitter.com/lostinmyyabyss_"
                      className="hover:underline"
                      target="_blank"
                    >
                      twt
                    </a>
                    <span>•</span>
                    <a
                      className="hover:underline"
                      href="https://instagram.com/alexfrantz07"
                      target="_blank"
                    >
                      instagram
                    </a>
                    <span>•</span>
                    <a
                      className="hover:underline"
                      href="https://tiktok.com/@lostinherabyss_"
                      target="_blank"
                    >
                      tiktok
                    </a>
                  </div>
                  <div className="block space-x-2">
                    <a
                      className="hover:underline"
                      href="https://steamcommunity.com/id/bayharborsmoocher/"
                      target="_blank"
                    >
                      steam
                    </a>
                    <span>•</span>
                    <a
                      className="hover:underline"
                      href="https://medal.tv/u/alexav"
                      target="_blank"
                    >
                      medal
                    </a>
                  </div>
                </div>
                <div className="text-2xl">
                  <div>
                    {" "}
                    <span className="bg-black text-white px-1">shows</span>{" "}
                    dexter, the pitt, tlou, twd
                  </div>
                  <div>
                    <span className="bg-black text-white px-1">music</span> ptv,
                    treaty oak, zach top, she wants revenge
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-black" />
            <div className="px-2">
              <div className="grid grid-cols-2">
                <div>
                  <h1 className="text-2xl font-bold">about me</h1>
                  <p>
                    born & raised western new yorker. i've been doing QA work
                    for the past 4 years and learning software engineering in
                    between. i also play acoustic guitar, am really into gaming
                    and love travelling to NYC. i am also incredibly awkward,
                    but that's besides the point
                  </p>
                </div>
                <div className="mx-auto">
                  <div className="p-2">
                    <div className="mb-2">
                      <MusicComponent />
                    </div>
                    <div className="mb-2">
                      <StatModule />
                    </div>
                    <div>
                      <GameComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 text-center border-b">
              <h1
                onClick={() => setTab("home")}
                className={`border-r-1 border-t-1 border-black hover:cursor-pointer ${tab === "home" && "underline"}`}
              >
                home
              </h1>
              <h1
                onClick={() => setTab("fantasy")}
                className={`border-r-1 border-t-1 border-black hover:cursor-pointer ${tab === "fantasy" && "underline"}`}
              >
                fantasy
              </h1>
              <h1
                onClick={() => setTab("pictures")}
                className={`border-r-1 border-t-1 border-black hover:cursor-pointer ${tab === "pictures" && "underline"}`}
              >
                pictures
              </h1>
              <h1
                onClick={() => setTab("scores")}
                className={`border-r-1 border-t-1 border-black hover:cursor-pointer ${tab === "scores" && "underline"}`}
              >
                scores
              </h1>
            </div>
          </div>
          {tab === "fantasy" && <FantasyStatus />}
          {tab === "pictures" && (
            <PictureCarousel onClick={(url: string) => setOverlayImage(url)} />
          )}
          {tab === "scores" && <ScoreModule type="sabres" />}
        </div>
      </div>
    </Layout>
  );
}
