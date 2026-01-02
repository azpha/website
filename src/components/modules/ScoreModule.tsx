import { useEffect, useState } from "react";
import { BillsScore, SabresScore } from "../../utils/types";

const IMAGES = {
  bills: "https://storage.alexav.gg/content/bills.png",
  sabres: "https://storage.alexav.gg/content/sabres.png",
};

export default function ScoreModule({ type }: { type: "sabres" | "bills" }) {
  const [billsScore, setBillsScore] = useState<BillsScore | null>(null);
  const [sabresScore, setSabresScore] = useState<SabresScore | null>(null);

  useEffect(() => {
    async function fetchBillsScore() {
      const res = await fetch("https://api.alexav.gg/v4/scores/bills");
      if (res.ok) {
        const data = await res.json();
        setBillsScore(data);
      } else {
        console.error("Failed to fetch Bills score; " + res.statusText);
      }
    }
    async function fetchSabresScore() {
      const res = await fetch("https://api.alexav.gg/v4/scores/sabres");
      if (res.ok) {
        const data = await res.json();
        setSabresScore(data);
      } else {
        console.error("Failed to fetch Sabresscore; " + res.statusText);
      }
    }

    if (type == "bills" && !billsScore) {
      fetchBillsScore();
    } else if (type === "sabres" && !sabresScore) {
      fetchSabresScore();
    }
  }, []);

  return (
    <div className="border border-white border-solid rounded-lg w-full mb-4">
      <div className="flex justify-between">
        <div>
          <img width="100" className="p-4" src={IMAGES[type]} />
        </div>
        <div className="flex justify-center items-center px-6">
          <div>
            <h1 className="text-2xl">
              {type === "bills"
                ? billsScore?.name
                : `${sabresScore?.awayTeam.abbrev} @ ${sabresScore?.homeTeam.abbrev}`}
            </h1>
            <p className="float-right text-[20px]">
              {type === "bills"
                ? billsScore?.score
                : `${sabresScore && sabresScore?.sabresScore > sabresScore?.oppScore ? "W" : "L"} ${sabresScore?.sabresScore}-${sabresScore?.oppScore}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
