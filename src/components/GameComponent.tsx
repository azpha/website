import { useState, useEffect } from "react";

type GameObject = {
  currentlyPlaying: CurrentlyPlaying;
  history: CurrentlyPlaying[];
};
type CurrentlyPlaying = {
  game: string;
  startedPlayingAt: number;
  finishedAt?: number;
};

export default function GameComponent() {
  const [game, setGame] = useState<GameObject | null>(null);

  useEffect(() => {
    if (game) return;

    async function fetchGame() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/latestGame"
      );
      if (response.ok) {
        const data = await response.json();

        if (data) {
          setGame(data as GameObject);
        }
      }
    }

    fetchGame();
  }, []);

  if (game) {
    const dateOrTime = (game: CurrentlyPlaying) => {
      if (game.finishedAt) {
        const currentDate = new Date();
        const finishedDate = new Date(game.finishedAt);

        if (
          currentDate.toLocaleDateString() === finishedDate.toLocaleDateString()
        ) {
          return `at ${finishedDate.toLocaleTimeString()}`;
        } else {
          return `on ${finishedDate.toLocaleDateString()}`;
        }
      }
    };

    return (
      <div className="border border-white border-solid p-2 rounded-lg space-y-2">
        {game.currentlyPlaying && (
          <>
            <h1 className="text-2xl font-bold italic">currently playing</h1>
            <p>
              <span className="font-semibold">
                {game.currentlyPlaying.game}
              </span>{" "}
              since{" "}
              {new Date(
                game.currentlyPlaying.startedPlayingAt
              ).toLocaleTimeString()}
            </p>
          </>
        )}

        {game.history.length > 0 && (
          <>
            <h1 className="text-2xl font-bold italic">previously played</h1>
            <div className="flex flex-wrap space-x-2">
              {game.history.splice(0, 5).map((v, k) => {
                return (
                  <div key={k}>
                    <p className="font-semibold">{v.game}</p>
                    <p>{dateOrTime(v)}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}
