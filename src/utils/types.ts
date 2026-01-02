type LastFMMusicObject = {
  artist: string;
  title: string;
  images: LastFMImageObject[];
  url: string;
};
type LastFMImageObject = {
  size: "small" | "medium" | "large" | "extralarge";
  url: string;
};

// nfl stuff
interface NFLAPIData {
  nflState: NFLState;
  matchups: NFLMatchupState[];
  users: SleeperUser[];
}
interface NFLMatchupState {
  points: number;
  owner: SleeperUser;
  starters: NFLPlayer[];
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
  abv_name: string;
  position: string;
  full_name: string;
  team: string;
  player_id: string;
  points: number;
}
interface SleeperUser {
  avatar: string;
  name: string;
  metadata: {
    team_name: string;
    avatar: string;
  };
}

// scores
type BillsScore = {
  name: string;
  date: string;
  score: string;
};
type SabresScore = {
  gameDate: string;
  wonInRegulation: boolean;
  sabresScore: number;
  oppScore: number;
  homeTeam: NHLTeam;
  awayTeam: NHLTeam;
};
type NHLTeam = {
  id: number;
  name: {
    default: string;
    fr: string;
  };
  commonName: {
    default: string;
  };
  placeNameWithPreposition: {
    default: string;
    fr: string;
  };
  abbrev: string;
  score: number;
  logo: string;
};

export type {
  LastFMMusicObject,
  LastFMImageObject,
  NFLState,
  NFLMatchupState,
  SleeperUser,
  NFLAPIData,
  NFLPlayer,
  BillsScore,
  SabresScore,
};
