import { useState } from "react";
import Layout from "../components/Layout";
import Clock from "../components/modules/Clock";
import Button from "../components/Button";
import Home from "./Home";
import PicturesPage from "./Pictures";
import Sports from "./Sports";

export default function App() {
  const [tab, setTab] = useState<"home" | "scores" | "sports" | "pictures">(
    "home",
  );

  return (
    <Layout>
      <div className="border-3 bg-gradient-to-t from-[#003087] to-[#FFB81C] border-black w-full sm:w-[500px]">
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
          className="h-[100px] object-[25%_35%] w-full object-cover border-b-black border-b-2 border-t-2 border-t-black"
          style={{
            objectPosition: "",
          }}
          src="https://storage.alexav.gg/content/sabres-board.jpg"
        />

        <div className="flex flex-row space-x-2 justify-center text-2xl my-2">
          <Button active={tab === "home"} onClick={() => setTab("home")}>
            home
          </Button>
          <Button
            active={tab === "pictures"}
            onClick={() => setTab("pictures")}
          >
            pictures
          </Button>
          <Button active={tab === "sports"} onClick={() => setTab("sports")}>
            sports
          </Button>
        </div>

        <hr className="border-black border-1" />

        {tab === "home" && <Home />}
        {tab === "pictures" && <PicturesPage />}
        {tab === "sports" && <Sports />}
      </div>
    </Layout>
  );
}
