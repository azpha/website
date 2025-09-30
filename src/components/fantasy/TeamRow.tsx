import type { NFLMatchupState } from "../../utils/types";
import PlayerCell from "./PlayerCell";

export function TeamRow({
  roster,
  isWinning = false,
}: {
  roster: NFLMatchupState;
  isWinning?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-wrap mb-2">
        <img
          width="30"
          className="rounded-lg"
          src={roster?.owner.metadata.avatar}
        />
        <h1 className="flex justify-center items-center mx-2 font-semibold">
          {roster?.owner.metadata.team_name} |
          <span className={`${isWinning && "text-green-500"} pl-1`}>
            {roster?.points}pt
          </span>
        </h1>
      </div>

      <div className="space-y-2 space-x-2 whitespace-nowrap overflow-x-scroll">
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
