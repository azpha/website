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
  const [show, setShow] = useState<ContentObject | null>(null);
  const [game, setGame] = useState<ContentObject | null>(null);
  const [book, setBook] = useState<ContentObject | null>(null);

  const [failedFetch, setFailedFetch] = useState({
    tv: false,
    book: false,
    game: false,
  });

  const ErrorState = () => {
    return (
      <div className="text-center p-2">
        <h1 className="text-lg font-semibold">Uh oh :(</h1>
        <p>Something went wrong loading this stat</p>
      </div>
    );
  };

  useEffect(() => {
    async function fetchTV() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/items?type=TV&sort=desc&limit=1&started=true"
      );
      if (response.ok) {
        const data = await response.json();
        if (data && data.length <= 0) {
          setFailedFetch((prev) => {
            return {
              ...prev,
              tv: true,
            };
          });
        } else setShow(data.data[0] as ContentObject);
      } else
        setFailedFetch((prev) => {
          return {
            ...prev,
            tv: true,
          };
        });
    }
    async function fetchBook() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/items?type=BOOK&sort=desc&limit=1&started=true"
      );
      if (response.ok) {
        const data = await response.json();
        if (data && data.length <= 0) {
          setFailedFetch((prev) => {
            return {
              ...prev,
              book: true,
            };
          });
        } else setBook(data.data[0] as ContentObject);
      } else
        setFailedFetch((prev) => {
          return {
            ...prev,
            book: true,
          };
        });
    }
    async function fetchGame() {
      const response = await fetch(
        "https://api.alexav.gg/v4/tracker/items?type=GAME&sort=desc&limit=1&started=true"
      );
      if (response.ok) {
        const data = await response.json();
        if (data && data.length <= 0) {
          setFailedFetch((prev) => {
            return {
              ...prev,
              game: true,
            };
          });
        } else setGame(data.data[0] as ContentObject);
      } else
        setFailedFetch((prev) => {
          return {
            ...prev,
            game: true,
          };
        });
    }

    fetchTV();
    fetchBook();
    fetchGame();
  }, []);

  return (
    <div className="border border-white border-solid rounded-lg w-full mb-4">
      <div className="grid grid-cols-3 gap-2">
        {!failedFetch.tv ? (
          <div className="text-center p-2 space-y-2">
            <img
              src={show?.image}
              className="object-cover w-full h-[50px] object-top"
            />
            <a
              className="hover:underline"
              href={`https://tracker.alexav.gg/info/${show?.id}`}
              target="_blank"
            >
              <h1 className="font-semibold">{show?.title}</h1>
              <p>
                {" "}
                {show?.finished
                  ? "finished"
                  : show?.paused
                    ? "paused"
                    : show?.episode}
              </p>
            </a>
          </div>
        ) : (
          <ErrorState />
        )}
        {!failedFetch.game ? (
          <div className="text-center p-2 space-y-2">
            <img
              src={game?.image}
              className="object-cover w-full h-[50px] object-top"
            />
            <a
              className="hover:underline"
              href={`https://tracker.alexav.gg/info/${game?.id}`}
              target="_blank"
            >
              <h1 className="font-semibold">{game?.title}</h1>
              <p>
                {" "}
                {game?.finished
                  ? "finished"
                  : game?.paused
                    ? "paused"
                    : game?.episode}
              </p>
            </a>
          </div>
        ) : (
          <ErrorState />
        )}
        {!failedFetch.book ? (
          <div className="text-center p-2 space-y-2">
            <img
              src={book?.image}
              className="object-cover w-full h-[50px] object-top"
            />
            <a
              className="hover:underline"
              href={`https://tracker.alexav.gg/info/${book?.id}`}
              target="_blank"
            >
              <h1 className="font-semibold">{book?.title}</h1>
              <p>
                {" "}
                {book?.finished
                  ? "finished"
                  : book?.paused
                    ? "paused"
                    : book?.author}
              </p>
            </a>
          </div>
        ) : (
          <ErrorState />
        )}
      </div>
    </div>
  );

  // if (show) {
  //   return (
  //     <div className="flex align-middle">
  //     </div>
  //   );
  // } else {
  //   if (failedFetch) {
  //     return (
  //       <div>
  //         <p>failed to get show :(</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <p>loading show..</p>
  //       </div>
  //     );
  //   }
  // }
}
