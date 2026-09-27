import type { NFLPlayer } from "../../utils/types";
import { useMemo } from "react";

export default function PlayerCell({ player }: { player: NFLPlayer | null }) {
  const injuryStatus = useMemo(() => {
    if (player && player.injury_status) {
      if (player.injury_status.toLowerCase() === "ir") {
        return player.injury_status;
      } else {
        return `${player.injury_status[0]}.`;
      }
    }
  }, [player?.injury_status]);

  if (player && player.full_name) {
    return (
      <div className="flex items-center gap-2">
        <div>
          {/* a player name is data, not a document section — this was an <h1>,
              and with a full roster per team it produced most of the page's
              heading elements */}
          <p className="font-semibold text-base">{player.full_name}</p>
          <p>
            {player?.position} · {player?.team} {injuryStatus && "·"}{" "}
            {player?.injury_status && (
              <span className="text-red-500 font-semibold">{injuryStatus}</span>
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
