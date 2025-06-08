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

export type { LastFMMusicObject, LastFMImageObject };
