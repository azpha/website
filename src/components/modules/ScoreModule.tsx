import { useEffect, useState } from "react";
import { BillsScore, SabresScore } from "../../utils/types";

interface TeamRowProps {
  functionClick?: () => void;
  width?: number;
  venue: string;
  date: string;
  homeTeam: {
    name: string;
    abbreviation: string;
    score: number;
    logo: string;
  };
  awayTeam: {
    name: string;
    abbreviation: string;
    score: number;
    logo: string;
  };
}
function TeamRow({
  homeTeam,
  awayTeam,
  width = 50,
  venue,
  date,
  functionClick,
}: TeamRowProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row py-2 space-x-2">
        <img width={width} className="object-cover h-20" src={homeTeam.logo} />
        <img
          onClick={() => {
            if (
              (awayTeam.abbreviation === "BUF" ||
                homeTeam.abbreviation === "BUF") &&
              functionClick
            ) {
              functionClick();
            }
          }}
          width={width}
          className="object-cover h-20"
          src={awayTeam.logo}
        />
      </div>
      <div className="p-2 text-2xl flex items-end flex-col justify-center">
        <p>
          {homeTeam.abbreviation} {homeTeam.score} - {awayTeam.abbreviation}{" "}
          {awayTeam.score}
        </p>
        <p className="text-sm">
          {venue} - {new Date(date || Date.now()).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default function ScoreModule() {
  const [billsScore, setBillsScore] = useState<BillsScore | null>(null);
  const [sabresScore, setSabresScore] = useState<SabresScore | null>(null);
  const [warpath, setWarpath] = useState<boolean>(false);

  useEffect(() => {
    async function fetchBillsScore() {
      const res = await fetch("https://api.alexav.gg/v4/sports/scores/bills");
      if (res.ok) {
        const data = await res.json();
        setBillsScore(data);
      } else {
        console.error("Failed to fetch Bills score; " + res.statusText);
      }
    }
    async function fetchSabresScore() {
      const res = await fetch("https://api.alexav.gg/v4/sports/scores/sabres");
      if (res.ok) {
        const data = await res.json();
        setSabresScore(data);
      } else {
        console.error("Failed to fetch Sabresscore; " + res.statusText);
      }
    }

    fetchBillsScore();
    fetchSabresScore();
  }, []);

  return (
    <div className="rounded-lg w-full">
      {sabresScore?.homeTeam && sabresScore.awayTeam && (
        <TeamRow
          homeTeam={sabresScore.homeTeam}
          awayTeam={sabresScore.awayTeam}
          date={sabresScore.date}
          venue={sabresScore.venue}
          functionClick={() => setWarpath(true)}
        />
      )}
      {billsScore?.homeTeam && billsScore.awayTeam && (
        <TeamRow
          homeTeam={billsScore.homeTeam}
          awayTeam={billsScore.awayTeam}
          width={50}
          date={billsScore.gameDay}
          venue={billsScore.venue}
        />
      )}

      {warpath && (
        <audio
          src={"https://storage.alexav.gg/content/warpath.mp3"}
          autoPlay={true}
          onTimeUpdate={(e) => {
            if (e.currentTarget.duration === e.currentTarget.currentTime) {
              setWarpath(false);
            }
          }}
        />
      )}
    </div>
  );
}
