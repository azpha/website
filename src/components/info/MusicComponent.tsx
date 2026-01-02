import { useState, useEffect } from "react";
import ScrollingText from "../ScrollingText";
import type { LastFMMusicObject } from "../../utils/types";

export default function MusicComponent() {
  const [music, setMusic] = useState<LastFMMusicObject | null>(null);
  const [failedFetch, setFailedFetch] = useState(false);

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

  if (music) {
    return (
      <div className="flex align-middle">
        <img width="50" src={music.images[1]?.url} />
        <div className="pl-2 max-w-25">
          <ScrollingText size="24" speed={0.1} text={music.title} />
          <p className="truncate">{music.artist}</p>
        </div>
      </div>
    );
  } else {
    if (failedFetch) {
      return (
        <div>
          <h1>uh oh!</h1>
          <p>failed to get music :(</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>loading music..</h1>
          <p>loading artist..</p>
        </div>
      );
    }
  }
}
