import { useEffect, useState } from "react";
import { BillsScore, SabresScore } from "../../utils/types";

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
    <div className="rounded-lg w-full mb-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row py-2">
          <img
            onClick={() => {
              if (sabresScore?.homeTeam.abbreviation === "BUF")
                setWarpath(true);
            }}
            width="80"
            className="shrink-0"
            src={sabresScore?.homeTeam.logo}
          />
          <img
            onClick={() => {
              if (sabresScore?.awayTeam.abbreviation === "BUF")
                setWarpath(true);
            }}
            width="80"
            className="shrink-0"
            src={sabresScore?.awayTeam.logo}
          />
        </div>
        <div className="p-2 text-2xl flex items-end flex-col">
          <p>
            {sabresScore?.homeTeam.abbreviation} {sabresScore?.homeTeam.score} -{" "}
            {sabresScore?.awayTeam.abbreviation} {sabresScore?.awayTeam.score}
          </p>
          <p className="text-sm">
            {sabresScore?.venue} -{" "}
            {new Date(sabresScore?.date || Date.now()).toLocaleDateString()}
          </p>
        </div>

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
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-6 px-4 items-center">
          <img
            width="80"
            className="w-full h-[50px]"
            src={billsScore?.homeTeam.logo}
          />
          <img
            width="80"
            className="w-full h-[50px]"
            src={billsScore?.awayTeam.logo}
          />
        </div>
        <div className="p-2 text-2xl flex items-end flex-col">
          <p>
            {billsScore?.homeTeam.abbreviation} {billsScore?.homeTeam.score} -{" "}
            {billsScore?.awayTeam.abbreviation} {billsScore?.awayTeam.score}
          </p>
          <p className="text-sm">
            {billsScore?.venue} -{" "}
            {new Date(billsScore?.gameDay || Date.now()).toLocaleDateString()}
          </p>
        </div>
      </div>
      {/* <div className="flex justify-between">
        <div>
          <img
            onClick={() => {
              if (type === "sabres") {
                setWarpath(true);
              }
            }}
            width="100"
            className="p-4"
            src={IMAGES[type]}
          />
        </div>
        <div className="flex justify-center items-center px-6">
          <div>
            <h1 className="text-2xl">
              {type === "bills"
                ? billsScore?.name
                : `${sabresScore?.awayTeam.abbrev || "BUF"} @ ${sabresScore?.homeTeam.abbrev || "BUF"}`}
            </h1>
            <p className="float-right text-[20px]">
              {type === "bills"
                ? billsScore?.score
                : `${sabresScore && sabresScore?.sabresScore > sabresScore?.oppScore ? "W" : "L"} ${sabresScore?.sabresScore || 0}-${sabresScore?.oppScore || 0}`}
            </p>
          </div>
        </div>
      </div>
       */}
    </div>
  );
}
