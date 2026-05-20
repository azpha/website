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
      const data = (await fetch("https://api.alexav.gg/v4/sports/fantasy").then(
        (res) => res.json(),
      )) as NFLAPIData;

      // rosters
      const ownMatchup = data.team2 as NFLMatchupState;
      const oppMatchup = data.team1 as NFLMatchupState;

      setPersonalRoster(ownMatchup);
      setOpposingRoster(oppMatchup);
    }

    fetchData();
  }, []);

  return (
    <div className="mt-2 space-y-4">
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
  );
}
