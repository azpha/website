import { useState, useEffect } from "react";

type GameObject = {
  game: string;
  startedOn: number;
  finishedAt?: number;
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
        if (data.data && data.data.game) {
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
    const dateOrTime = () => {
      if (game.finished && game.finishedAt) {
        const currentDate = new Date();
        const finishedDate = new Date(game.finishedAt);

        if (
          currentDate.toLocaleDateString() === finishedDate.toLocaleDateString()
        ) {
          return `last played ${game.game} at ${finishedDate.toLocaleTimeString()}`;
        } else {
          return `last played ${game.game} on ${finishedDate.toLocaleDateString()}`;
        }
      } else {
        return `playing ${game.game}`;
      }
    };

    return (
      <div className="flex align-middle">
        <a
          className="hover:underline"
          href={`https://medal.tv/u/alexav`}
          target="_blank"
        >
          <h1 className="lowercase">{dateOrTime()}</h1>
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
