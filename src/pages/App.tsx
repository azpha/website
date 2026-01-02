import { useState } from "react";
import Layout from "../components/Layout";
import Overlay from "../components/Overlay";
import GameComponent from "../components/info/GameComponent";
import PictureCarousel from "../components/modules/PictureCarousel";
import InfoModule from "../components/modules/InfoModule";
import WelcomeModule from "../components/modules/WelcomeModule";
import FantasyStatus from "../components/FantasyStatus";
import ScoreModule from "../components/modules/ScoreModule";

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

      <div className="my-2 flex flex-col items-center sm:justify-center">
        <div className="space-y-4 sm:w-[500px]">
          <img
            className="rounded-lg"
            src={
              "https://storage.alexav.gg/content/55f3eca0-a5a9-4c71-9d92-ba5d669a7a0c.jpg"
            }
          />

          <WelcomeModule />
          <InfoModule />
          <PictureCarousel onClick={(url) => setSelectedImage(url)} />
          <GameComponent />
          <ScoreModule type={"bills"} />
          <FantasyStatus />
        </div>
      </div>
    </Layout>
  );
}
