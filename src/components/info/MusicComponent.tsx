import { useState, useEffect } from "react";
import type { LastFMMusicObject } from "../../utils/types";
import ErrorState from "../ErrorState";

export default function MusicComponent() {
  const [music, setMusic] = useState<LastFMMusicObject | null>(null);
  const [failedFetch, setFailedFetch] = useState<boolean>(false);

  useEffect(() => {
    async function fetchMusic() {
      try {
        const response = await fetch("https://api.alexav.gg/v4/social/music");
        if (response.ok) {
          const data = await response.json();
          setMusic(data as LastFMMusicObject);
        } else setFailedFetch(true);
      } catch (e) {
        console.error("Failed to fetch music!", e);
        setFailedFetch(true);
      }
    }

    setTimeout(() => {
      fetchMusic();
    }, 60000);
    fetchMusic();
  }, []);

  if (!failedFetch) {
    if (music) {
      return (
        <a href="https://koito.fntz.net" target="_blank">
          <div className="w-full bg-zinc-800">
            <div className="flex align-middle">
              <div className="pl-2 pr-1">
                <p>
                  <span className="font-semibold">Currently Playing</span>:{" "}
                  <span className="underline">{music.title}</span> by{" "}
                  <span className="underline">{music.artist}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      );
    } else {
      return <ErrorState type="loading" />;
    }
  } else {
    return <ErrorState type="error" />;
  }
}
