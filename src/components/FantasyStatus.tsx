import { useEffect, useState } from "react";
import PlayerCell from "./fantasy/PlayerCell";
import { type NFLAPIData, type NFLMatchupState } from "../utils/types";

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
    <div className="border border-white border-solid rounded-lg w-full sm:w-[500px] mb-4 p-2">
      <div className="mb-4 space-y-4">
        <a
          href="https://sleeper.com/leagues/1263620000418119680/matchup"
          target="_blank"
          className="underline"
        >
          <h1 className="font-semibold text-2xl mb-2">Fantasy</h1>
        </a>
        <div className="flex flex-wrap mb-2">
          <img
            width="30"
            className="rounded-lg"
            src={personalRoster?.owner.metadata.avatar}
          />
          <h1 className="flex justify-center items-center mx-2 font-semibold">
            {personalRoster?.owner.metadata.team_name} |{" "}
            {personalRoster?.points}
          </h1>
        </div>

        <div className="space-y-2 space-x-2 whitespace-nowrap overflow-x-scroll">
          {personalRoster?.starters.map((v, k) => {
            return (
              <div className="inline-block" key={k}>
                <PlayerCell player={v} />
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap mb-2">
          <img
            width="30"
            className="rounded-lg"
            src={opposingRoster?.owner.metadata.avatar}
          />
          <h1 className="flex justify-center items-center mx-2 font-semibold">
            {opposingRoster?.owner.metadata.team_name} |{" "}
            {opposingRoster?.points}
          </h1>
        </div>

        <div className="space-y-2 space-x-2 whitespace-nowrap overflow-x-scroll">
          {opposingRoster?.starters.map((v, k) => {
            return (
              <div className="inline-block" key={k}>
                <PlayerCell player={v} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
