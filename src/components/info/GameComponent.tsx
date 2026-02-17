import { useState, useEffect } from "react";
import ErrorState from "../ErrorState";
import { Gamepad } from "lucide-react";

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
        "https://api.alexav.gg/v4/tracker/latestGame",
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
    return (
      <a href={`https://medal.tv/u/alexav`} target="_blank">
        <div className="flex flex-col bg-black border border-black text-white">
          <div className="flex">
            <Gamepad className="w-full h-full bg-white text-black" />
            <div className="pl-2 pr-1">
              <p className="w-[150px] truncate overflow-hidden whitespace-nowrap">
                {game.currentlyPlaying.game}
              </p>
              <p>
                {" "}
                since{" "}
                {new Date(
                  game.currentlyPlaying.startedPlayingAt,
                ).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    );
  } else {
    return <ErrorState type="unavailable" />;
  }
}
