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
  team1: NFLMatchupState;
  team2: NFLMatchupState;
  users: SleeperUser[];
}
interface NFLMatchupState {
  points: number;
  owner: SleeperUser;
  starters: NFLPlayer[];
  players: NFLPlayer[];
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
  season: string;
  gameType: string;
  week: string;
  gameDay: string;
  gameTime: string;
  venue: string;
  homeTeam: NFLTeam;
  awayTeam: NFLTeam;
};
type SabresScore = {
  date: string;
  venue: string;
  awayTeam: NHLTeam;
  homeTeam: NHLTeam;
};
type YankeesScore = {
  season: number;
  week: number;
  date: string;
  venue: string;
  awayTeam: MLBTeam;
  homeTeam: MLBTeam;
};
type NFLTeam = {
  abbreviation: string;
  score: number;
  name: string;
  nickname: string;
  logo: string;
};
type NHLTeam = {
  abbreviation: string;
  name: string;
  score: number;
  logo: string;
};
type MLBTeam = {
  name: string;
  abbreviation: string;
  logo: string;
  score: number;
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
  YankeesScore,
};
