import { useEffect, useState } from "react";
import { type NFLAPIData, type NFLMatchupState } from "../utils/types";
import { TeamRow } from "./fantasy/TeamRow";

export default function FantasyStatus() {
  const [personalRoster, setPersonalRoster] = useState<NFLMatchupState | null>(
    null
  );
  const [opposingRoster, setOpposingRoster] = useState<NFLMatchupState | null>(
    null
  );

  // fetch roster information
  useEffect(() => {
    async function fetchData() {
      const data = (await fetch("https://api.alexav.gg/v4/football").then(
        (res) => res.json()
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
    <div className="border border-white border-solid rounded-lg w-full sm:w-[500px] p-2">
      <div className="mb-4 space-y-4">
        <a
          href="https://sleeper.com/leagues/1263620000418119680/matchup"
          target="_blank"
          className="underline"
        >
          <h1 className="font-semibold text-2xl mb-2">fantasy</h1>
        </a>

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
