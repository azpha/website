import { useState, useEffect } from "react";

type TVObject = {
  id: number;
  type: string;
  title: string;
  author: string | null;
  description: string;
  image: string;
  paused: boolean;
  episode: string;
  tmdbId: string;
  finished: boolean;
  yearReleased: string;
  genre: string;
  startedOn: string;
};

export default function TVComponent() {
  const [show, setShow] = useState<TVObject | null>(null);
  const [failedFetch, setFailedFetch] = useState(false);

  useEffect(() => {
    async function fetchMusic() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/items?type=TV&sort=desc&limit=1"
      );
      if (response.ok) {
        const data = await response.json();
        if (data && data.length <= 0) {
          setFailedFetch(true);
        } else setShow(data[0] as TVObject);
      } else setFailedFetch(true);
    }

    setTimeout(() => {
      fetchMusic();
    }, 60000);
    fetchMusic();
  }, []);

  if (show) {
    return (
      <div className="flex align-middle">
        <a
          className="hover:underline"
          href={`https://tracker.alexav.gg/info/${show.id}`}
          target="_blank"
        >
          <h1 className="lowercase">
            {show.title}
            <br />
            {show.finished ? "finished" : show.paused ? "paused" : show.episode}
          </h1>
        </a>
      </div>
    );
  } else {
    if (failedFetch) {
      return (
        <div>
          <p>failed to get show :(</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>loading show..</p>
        </div>
      );
    }
  }
}
