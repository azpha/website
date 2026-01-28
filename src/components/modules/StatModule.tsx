import { useState, useEffect } from "react";

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
  const [data, setData] = useState<ContentObject[] | null>(null);

  const [failedFetch, setFailedFetch] = useState<boolean>(false);

  const ErrorState = () => {
    return (
      <div className="text-center p-2">
        <h1 className="text-lg font-semibold">Uh oh :(</h1>
        <p>Something went wrong loading this stat</p>
      </div>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/items?sort=desc&limit=3&started=true",
      );
      if (response.ok) {
        const data = await response.json();
        if (data && data.length <= 0) {
          setFailedFetch(true);
        } else setData(data.data as ContentObject[]);
      } else setFailedFetch(true);
    }

    fetchData();
  }, []);

  return (
    <div className="border border-white border-solid rounded-lg w-full mb-4">
      <div className="grid grid-cols-3 gap-2">
        {data && data.length > 0 && !failedFetch ? (
          data?.map((v, k) => {
            return (
              <div key={k} className="text-center p-2 space-y-2">
                <img
                  src={v?.image}
                  className="object-cover w-full h-[50px] object-top"
                />
                <a
                  className="hover:underline"
                  href={`https://tracker.alexav.gg/info/${v?.id}`}
                  target="_blank"
                >
                  <h1 className="font-semibold">{v?.title}</h1>
                  <p>
                    {" "}
                    {v?.finished
                      ? "finished"
                      : v?.paused
                        ? "paused"
                        : v.startedOn
                          ? "started"
                          : "not started"}
                  </p>
                </a>
              </div>
            );
          })
        ) : (
          <ErrorState />
        )}
      </div>
    </div>
  );
}
