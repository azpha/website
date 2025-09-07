import { useEffect, useState } from "react";
import PlayerCell from "./fantasy/PlayerCell";
import {
  type NFLRosterState,
  type NFLPlayer,
  NFLState,
  NFLMatchupState,
} from "../utils/types";

export default function FantasyStatus() {
  const USER_ID = "1263620186439696384";
  const LEAGUE_BASE_URL =
    "https://api.sleeper.app/v1/league/1263620000418119680/rosters";
  const NFL_STATE_URL = "https://api.sleeper.app/v1/state/nfl";
  const MATCHUPS_URL =
    "https://api.sleeper.app/v1/league/1263620000418119680/matchups/";

  const [roster, setRoster] = useState<NFLRosterState | null>(null);
  const [players, setPlayers] = useState<NFLPlayer[] | null>(null);
  const [nflState, setNflState] = useState<NFLState | null>(null);
  const [matchup, setMatchup] = useState<NFLMatchupState | null>(null);

  useEffect(() => {
    fetch(NFL_STATE_URL).then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        setNflState(data);
      }
    });
    fetch(LEAGUE_BASE_URL).then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        setRoster(
          data.filter((v: NFLRosterState) => v.owner_id === USER_ID)[0]
        );
      }
    });
  }, []);
  useEffect(() => {
    if (roster) {
      const players = roster.starters.join(",");

      fetch(
        "https://api.alexav.gg/v4/football/players?players=" + players
      ).then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setPlayers(data.playerInfo);
        }
      });
    }
  }, [roster]);
  useEffect(() => {
    if (nflState && !matchup) {
      fetch(MATCHUPS_URL + nflState.display_week).then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setMatchup(data[1]);
        }
      });
    }
  }, [nflState]);

  return (
    <div className="border border-white border-solid rounded-lg w-full sm:w-[500px] mb-4 p-2">
      <a href="https://sleeper.com/leagues/1263620000418119680" target="_blank">
        <h1 className="text-2xl font-bold underline">Fantasy</h1>
      </a>

      <div className="space-y-2 space-x-2 whitespace-nowrap overflow-x-scroll">
        {players?.map((v, k) => {
          return (
            <div className="inline-block" key={k}>
              <PlayerCell matchupData={matchup} player={v} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
