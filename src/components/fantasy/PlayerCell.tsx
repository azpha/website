import type { NFLPlayer } from "../../utils/types";

export default function PlayerCell({ player }: { player: NFLPlayer | null }) {
  if (player && player.full_name) {
    return (
      <div className="flex-wrap flex space-x-2">
        <div>
          <h1 className="font-semibold text-1xl">{player.abv_name}</h1>
          <p>
            {player?.position} · {player?.team} {player?.injury_status && "·"}{" "}
            {player?.injury_status && (
              <span className="text-red-500 font-semibold">
                {player?.injury_status}
              </span>
            )}
          </p>
        </div>
        <p className="flex justify-center items-center">
          <span className="font-semibold">{player.points}</span>
        </p>
        <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/30"></div>
      </div>
    );
  }
}
