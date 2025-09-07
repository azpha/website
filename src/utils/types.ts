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
interface NFLState {
  week: number;
  season_type: "pre" | "post" | "regular";
  display_week: number;
}
interface NFLRosterState {
  league_id: string;
  owner_id: string;
  players: string[];
  starters: string[];
}
interface NFLMatchupState {
  points: number;
  players: string[];
  starters: string[];
  starters_points: number[];
  players_points: object;
}
interface NFLPlayer {
  last_name: string;
  injury_status: string | null;
  position: string;
  full_name: string;
  team: string;
  player_id: string;
}

export type {
  LastFMMusicObject,
  LastFMImageObject,
  NFLState,
  NFLRosterState,
  NFLPlayer,
  NFLMatchupState,
};
