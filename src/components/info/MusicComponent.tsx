import { useState, useEffect } from "react";
import type { LastFMMusicObject } from "../../utils/types";
import ErrorState from "../ErrorState";

export default function MusicComponent() {
  const [music, setMusic] = useState<LastFMMusicObject | null>(null);
  const [failedFetch, setFailedFetch] = useState<boolean>(false);

  useEffect(() => {
    async function fetchMusic() {
      try {
        const response = await fetch("https://api.alexav.gg/v4/social/music");
        if (response.ok) {
          const data = await response.json();
          setMusic(data as LastFMMusicObject);
        } else setFailedFetch(true);
      } catch (e) {
        console.error("Failed to fetch music!", e);
        setFailedFetch(true);
      }
    }

    setTimeout(() => {
      fetchMusic();
    }, 60000);
    fetchMusic();
  }, []);

  if (!failedFetch) {
    if (music) {
      return (
        <a href="https://last.fm/user/lulawex" target="_blank">
          <div className="flex flex-col bg-black border border-black text-white">
            <div className="flex align-middle">
              <img
                className="w-[50px] h-[50px] object-cover"
                src={music.images[1]?.url}
              />
              <div className="pl-2 pr-1">
                <p className="w-[150px] truncate overflow-hidden whitespace-nowrap">
                  {music.title}
                </p>
                <p> {music.artist}</p>
              </div>
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

  // if (music) {
  //   return (
  //     <a href="https://last.fm/user/lulawex" target="_blank">
  //       <div className="flex flex-col bg-black border border-black text-white">
  //         <div className="flex align-middle">
  //           <img
  //             className="w-[50px] h-[50px] object-cover"
  //             src={music.images[1]?.url}
  //           />
  //           <div className="pl-2 pr-1">
  //             <p className="w-[150px] truncate overflow-hidden whitespace-nowrap">
  //               {music.title}
  //             </p>
  //             <p> {music.artist}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </a>
  //   );
  // } else {
  //   if (failedFetch) {
  //     return (
  //       <div>
  //         <h1>uh oh!</h1>
  //         <p>failed to get music :(</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>loading music..</h1>
  //         <p>loading artist..</p>
  //       </div>
  //     );
  //   }
  // }
}
