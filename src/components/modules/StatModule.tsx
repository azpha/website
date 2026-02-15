import { useState, useEffect } from "react";
import ErrorState from "../ErrorState";

type ContentObject = {
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

export default function StatModule() {
  const [data, setData] = useState<ContentObject | null>(null);
  const [failedFetch, setFailedFetch] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/items?sort=desc&limit=3",
      );
      if (response.ok) {
        const data = await response.json();
        if (data && data.length <= 0) {
          setFailedFetch(true);
        } else setData(data.data[0] as ContentObject);
      } else setFailedFetch(true);
    }

    fetchData();
  }, []);

  if (!failedFetch) {
    if (data) {
      return (
        <a href={`https://tracker.alexav.gg/info/${data?.id}`} target="_blank">
          <div className="flex flex-col bg-black border border-black text-white">
            <div className="flex">
              <div className="pl-2 pr-1">
                <p className="w-[150px] truncate flex justify-end overflow-hidden whitespace-nowrap">
                  {data?.title}
                </p>
                <p className="flex justify-end">
                  {" "}
                  {data?.finished
                    ? "finished"
                    : data?.paused
                      ? "paused"
                      : data?.startedOn
                        ? "started"
                        : "not started"}
                </p>
              </div>
              <img
                className="w-[50px] h-[50px] object-cover"
                src={data?.image}
              />
            </div>
          </div>
        </a>
      );
    } else {
      return <ErrorState type="loading" />;
    }
  } else {
    return <ErrorState type="error" />;
  }
}
