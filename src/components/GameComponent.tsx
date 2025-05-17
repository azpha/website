import { useState, useEffect } from "react";

type GameObject = {
  name: string;
  location: string;
  startedOn: number;
  finished: boolean;
};

export default function GameComponent() {
  const [game, setGame] = useState<GameObject | null>(null);
  const [failedFetch, setFailedFetch] = useState(false);

  useEffect(() => {
    async function fetchGame() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/latestGame"
      );
      if (response.ok) {
        const data = await response.json();
        if (data.data && data.data.length <= 0) {
          setFailedFetch(true);
        } else setGame(data.data as GameObject);
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
          <h1 className="lowercase">
            {!game.finished ? "playing" : "last played"} {game.name}
          </h1>
        </a>
      </div>
    );
  } else {
    if (failedFetch) {
      return (
        <div>
          <p>failed to get game :(</p>
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
