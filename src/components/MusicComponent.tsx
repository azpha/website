import { useState, useEffect } from "react";
import type { LastFMMusicObject } from "../utils/types";

export default function MusicComponent() {
  const [music, setMusic] = useState<LastFMMusicObject | null>(null);
  const [failedFetch, setFailedFetch] = useState(false);

  useEffect(() => {
    async function fetchMusic() {
      const response = await fetch("https://api.alexav.gg/v4/social/music");
      if (response.ok) {
        const data = await response.json();
        setMusic(data.data.tracks[0] as LastFMMusicObject);
      } else setFailedFetch(true);
    }

    setTimeout(() => {
      fetchMusic();
    }, 60000);
    fetchMusic();
  }, []);

  if (music) {
    return (
      <div className="flex align-middle">
        <img width="50" src={music.image[1]["#text"]} />
        <div className="pl-2 max-w-25">
          <h1 className="truncate">{music.name}</h1>
          <p className="truncate">{music.artist["#text"]}</p>
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
