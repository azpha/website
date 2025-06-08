import { useState, useEffect } from "react";
import { LastFMMusicObject } from "../utils/types";

export default function Music() {
  const [musicState, setMusicState] = useState<LastFMMusicObject | null>(null);

  useEffect(() => {
    const fetchMusic = async () => {
      const res = await fetch("https://api.alexav.gg/v4/social/music");
      if (res.ok) {
        const data = await res.json();
        setMusicState(data.data.tracks[0]);
      } else {
        console.error("failed to load music!");
      }
    };

    fetchMusic();
    setInterval(fetchMusic, 60000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col justify-center items-center">
        <img
          width={150}
          height={150}
          src={musicState?.image.filter((v) => v.size === "large")[0]["#text"]}
        />

        <div className="my-2 text-center">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-[scroll_10s_linear_infinite] flex">
              <span className="flex-shrink-0 px-4 text-2xl font-bold">
                {musicState?.name}
              </span>
            </div>
          </div>
          <p className="font-semibold">{musicState?.artist?.["#text"]}</p>
        </div>
      </div>
    </div>
  );
}
