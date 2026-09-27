import { useState, useEffect } from "react";
import type { LastFMMusicObject } from "../../utils/types";

export default function MusicComponent() {
  const [music, setMusic] = useState<LastFMMusicObject | null>(null);

  useEffect(() => {
    async function fetchMusic() {
      try {
        const response = await fetch("https://api.alexav.gg/v4/social/music");
        if (response.ok) {
          const data = await response.json();
          setMusic(data as LastFMMusicObject);
        }
      } catch (e) {
        console.error("Failed to fetch music!", e);
      }
    }

    setTimeout(() => {
      fetchMusic();
    }, 60000);
    fetchMusic();
  }, []);

  return (
    <a
      href="https://koito.fntz.net"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My listening history"
    >
      <div className="bg-white p-2 rounded-lg w-full min-h-full text-black">
        <div className="flex justify-center items-center">
          {music && (
            <img
              src={
                music.images.filter((v) => v.size === "medium")[0]["url"] ||
                music.images[0].url
              }
              alt={`${music.title} by ${music.artist} album artwork`}
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
              className="border-green-500 border-2 h-16 w-16 object-cover"
            />
          )}
          <div className="px-2">
            <p className="text-sm font-semibold">{music?.title}</p>
            <p className="text-xs">{music?.artist}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
