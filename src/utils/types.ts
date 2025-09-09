type LastFMMusicObject = {
  artist: {
    mbid: string;
    "#text": string;
  };
  name: string;
  image: LastFMImageObject[];
  url: string;
};
type LastFMImageObject = {
  size: "small" | "medium" | "large" | "extralarge";
  "#text": string;
};

// nfl stuff
interface NFLAPIData {
  nflState: NFLState;
  matchups: NFLMatchupState[];
  users: SleeperUser[];
}
interface NFLMatchupState {
  owner: SleeperUser;
  points: number;
  players: string[];
  playerInfo: NFLPlayer[];
  starters: string[];
  starters_points: number[];
  players_points: object;
}
interface NFLState {
  week: number;
  season_type: "pre" | "post" | "regular";
  display_week: number;
}
interface NFLPlayer {
  last_name: string;
  injury_status: string | null;
  position: string;
  full_name: string;
  team: string;
  player_id: string;
}
interface SleeperUser {
  avatar: string;
  name: string;
  metadata: {
    team_name: string;
    avatar: string;
  };
}

export type {
  LastFMMusicObject,
  LastFMImageObject,
  NFLState,
  NFLMatchupState,
  SleeperUser,
  NFLAPIData,
  NFLPlayer,
};
