import { useState } from "react";
import Layout from "../components/Layout";
import Overlay from "../components/Overlay";
import GameComponent from "../components/info/GameComponent";
import PictureCarousel from "../components/modules/PictureCarousel";
import InfoModule from "../components/modules/InfoModule";
import WelcomeModule from "../components/modules/WelcomeModule";
import ScoreModule from "../components/modules/ScoreModule";
import StatModule from "../components/modules/StatModule";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <Layout>
      {selectedImage !== "" && (
        <Overlay onClose={() => setSelectedImage("")}>
          <div className="flex justify-center items-center w-full h-full">
            <img
              draggable={false}
              className="select-none"
              width="400"
              height="400"
              src={selectedImage}
            />
          </div>
        </Overlay>
      )}

      <div className="my-2 mx-auto w-full sm:w-[500px]">
        <div className="space-y-4">
          <img
            className="rounded-lg"
            src={
              "https://storage.alexav.gg/content/55f3eca0-a5a9-4c71-9d92-ba5d669a7a0c.jpg"
            }
          />

          <WelcomeModule />
          <InfoModule />
          <StatModule />
          <PictureCarousel onClick={(url) => setSelectedImage(url)} />
          <GameComponent />
          <ScoreModule type={"bills"} />
          {/* <FantasyStatus /> */}
        </div>
      </div>
    </Layout>
  );
}
