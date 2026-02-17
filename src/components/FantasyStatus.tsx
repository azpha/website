import { useEffect, useState } from "react";
import { type NFLAPIData, type NFLMatchupState } from "../utils/types";
import { TeamRow } from "./fantasy/TeamRow";

export default function FantasyStatus() {
  const [personalRoster, setPersonalRoster] = useState<NFLMatchupState | null>(
    null,
  );
  const [opposingRoster, setOpposingRoster] = useState<NFLMatchupState | null>(
    null,
  );

  // fetch roster information
  useEffect(() => {
    async function fetchData() {
      const data = (await fetch("https://api.alexav.gg/v4/football").then(
        (res) => res.json(),
      )) as NFLAPIData;

      // rosters
      const ownMatchup = data.matchups[1] as NFLMatchupState;
      const oppMatchup = data.matchups[0] as NFLMatchupState;

      setPersonalRoster({
        ...ownMatchup,
        owner: data.users[1],
      });
      setOpposingRoster({
        ...oppMatchup,
        owner: data.users[0],
      });
    }

    fetchData();
  }, []);

  return (
    <div className="p-2 text-black">
      <div className="mb-4 space-y-4">
        {personalRoster && opposingRoster && (
          <>
            <TeamRow
              isWinning={personalRoster.points > opposingRoster.points}
              roster={personalRoster}
            />
            <TeamRow
              isWinning={opposingRoster.points > personalRoster.points}
              roster={opposingRoster}
            />
          </>
        )}
      </div>
    </div>
  );
}
