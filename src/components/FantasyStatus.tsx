import { useEffect, useState } from "react";
import PlayerCell from "./fantasy/PlayerCell";
import {
  NFLMatchupState,
  NFLPlayer,
  SleeperUsers,
  type NFLRosterState,
  type NFLState,
} from "../utils/types";

export default function FantasyStatus() {
  const USER_ID = "1263620186439696384";
  const OPP_USER_ID = "1032518341627600896";
  const LEAGUE_BASE_URL =
    "https://api.sleeper.app/v1/league/1263620000418119680/rosters";
  const NFL_STATE_URL = "https://api.sleeper.app/v1/state/nfl";
  const MATCHUPS_URL =
    "https://api.sleeper.app/v1/league/1263620000418119680/matchups/";
  const LEAGUE_USERS =
    "https://api.sleeper.app/v1/league/1263620000418119680/users";
  const PLAYERS_URL = "https://api.alexav.gg/v4/football/players";

  const [personalRoster, setPersonalRoster] = useState<NFLRosterState | null>(
    null
  );
  const [opposingRoster, setOpposingRoster] = useState<NFLRosterState | null>(
    null
  );
  const [nflState, setNflState] = useState<NFLState | null>(null);
  // const [roster, setRoster] = useState<NFLRosterState | null>(null);
  // const [players, setPlayers] = useState<NFLPlayer[] | null>(null);
  // const [matchup, setMatchup] = useState<NFLMatchupState | null>(null);

  // fetch roster information
  useEffect(() => {
    async function fetchData() {
      const nflState = (await fetch(NFL_STATE_URL).then((res) =>
        res.json()
      )) as NFLState;
      const rosters = (await fetch(LEAGUE_BASE_URL).then((res) =>
        res.json()
      )) as NFLRosterState[];
      const matchups = (await fetch(MATCHUPS_URL + nflState.week).then((res) =>
        res.json()
      )) as NFLMatchupState[];
      const users = (await fetch(LEAGUE_USERS).then((res) =>
        res.json()
      )) as SleeperUser[];

      // rosters
      const ownMatchup = matchups[1];
      const oppMatchup = matchups[0];

      const ownMatchupPlayers = await fetch(
        PLAYERS_URL + "?players=" + ownMatchup.starters
      ).then((res) => res.json());
      const oppMatchupPlayers = await fetch(
        PLAYERS_URL + "?players=" + oppMatchup.starters
      ).then((res) => res.json());

      setNflState(nflState);
      setPersonalRoster({
        ...rosters.filter((v) => v.owner_id === USER_ID)[0],
        matchup: matchups[1],
        players: ownMatchupPlayers.playerInfo,
        user: users[1],
      });
      setOpposingRoster({
        ...rosters.filter((v) => v.owner_id === OPP_USER_ID)[0],
        matchup: matchups[0],
        players: oppMatchupPlayers.playerInfo,
        user: users[0],
      });
    }

    fetchData();
  }, []);
  useEffect(() => {
    console.log(personalRoster, opposingRoster);
  }, [personalRoster, opposingRoster]);

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
            src={personalRoster?.user.metadata.avatar}
          />
          <h1 className="flex justify-center items-center mx-2 font-semibold">
            {personalRoster?.user.metadata.team_name} |{" "}
            {personalRoster?.matchup.points}
          </h1>
        </div>

        <div className="space-y-2 space-x-2 whitespace-nowrap overflow-x-scroll">
          {personalRoster?.players?.map((v, k) => {
            return (
              <div className="inline-block" key={k}>
                <PlayerCell matchupData={personalRoster.matchup} player={v} />
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap mb-2">
          <img
            width="30"
            className="rounded-lg"
            src={opposingRoster?.user.metadata.avatar}
          />
          <h1 className="flex justify-center items-center mx-2 font-semibold">
            {opposingRoster?.user.metadata.team_name} |{" "}
            {opposingRoster?.matchup.points}
          </h1>
        </div>

        <div className="space-y-2 space-x-2 whitespace-nowrap overflow-x-scroll">
          {opposingRoster?.players?.map((v, k) => {
            return (
              <div className="inline-block" key={k}>
                <PlayerCell matchupData={opposingRoster.matchup} player={v} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
