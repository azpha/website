import { useState, useEffect } from "react";

type GameObject = {
  gameextrainfo?: string;
  gameid?: string;
};

export default function GameComponent() {
  const [game, setGame] = useState<GameObject | null>(null);
  const [failedFetch, setFailedFetch] = useState(false);

  useEffect(() => {
    async function fetchGame() {
      const response = await fetch("https://api.alexav.gg/v4/social/steam");
      if (response.ok) {
        const data = await response.json();
        if (data.data && data.data.gameextrainfo) {
          setGame(data.data as GameObject);
        } else setFailedFetch(true);
      } else setFailedFetch(true);
    }

    setTimeout(() => {
      fetchGame();
    }, 60000);
    fetchGame();
  }, []);

  if (game) {
    return (
      <div className="flex align-middle">
        <a
          className="hover:underline"
          href={`https://medal.tv/u/alexav`}
          target="_blank"
        >
          <h1 className="lowercase">playing {game.gameextrainfo}</h1>
        </a>
      </div>
    );
  } else {
    if (failedFetch) {
      return (
        <div>
          <p>not playing anything</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>loading game..</p>
        </div>
      );
    }
  }
}
