import { useState, useEffect } from "react";
import { PROFILES } from "../../utils/site";

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

  return (
    <a
      href={PROFILES.medal}
      target="_blank"
      rel="me noopener noreferrer"
      aria-label="My Medal.tv profile"
    >
      <div className="bg-white p-2 rounded-lg w-full min-h-full flex justify-center text-black">
        <div className="flex justify-center items-center">
          <div className="px-2">
            <p className="text-sm font-semibold">
              {game?.currentlyPlaying.game || "Nothing playing"}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
