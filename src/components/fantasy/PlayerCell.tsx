import type { NFLMatchupState, NFLPlayer } from "../../utils/types";

export default function PlayerCell({
  player,
  matchupData,
}: {
  player: NFLPlayer | null;
  matchupData: NFLMatchupState | null;
}) {
  const getScoreForPlayer = () => {
    const rosterPosition = matchupData?.starters.findIndex(
      (v) => v === player?.player_id
    );

    return matchupData?.starters_points[rosterPosition!] || 0;
  };
  const truncatedName = () => {
    if (player) {
      const firstName = player?.full_name.split(" ")[0];
      const shortened =
        firstName[0].toUpperCase() + "." + " " + player.last_name;

      return shortened;
    }
  };

  if (player && player.full_name) {
    return (
      <div className="flex-wrap flex space-x-2">
        <div>
          <h1 className="font-semibold text-1xl">{truncatedName()}</h1>
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
          <span className="font-semibold">{getScoreForPlayer()}</span>
        </p>
        <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/30"></div>
      </div>
    );
  }
}
