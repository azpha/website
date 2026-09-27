import type { NFLMatchupState } from "../../utils/types";
import PlayerCell from "./PlayerCell";

export function TeamRow({
  roster,
  isWinning = false,
}: {
  roster: NFLMatchupState;
  isWinning?: boolean;
}) {
  const teamName = roster?.owner.metadata.team_name;

  return (
    <div>
      <div className="flex flex-wrap mb-2">
        <img
          width="30"
          height="30"
          loading="lazy"
          decoding="async"
          alt={teamName ? `${teamName} avatar` : ""}
          className="rounded-lg h-[30px] object-cover"
          src={roster?.owner.metadata.avatar}
        />
        <h4 className="flex justify-center items-center mx-2 font-semibold">
          {teamName} |
          <span className={`${isWinning && "text-green-500"} pl-1`}>
            {roster?.points}pt
          </span>
        </h4>
      </div>

      <div className="space-x-2 whitespace-nowrap overflow-x-auto pb-2">
        {roster?.starters.map((v, k) => {
          return (
            <div className="inline-block" key={k}>
              <PlayerCell player={v} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
