import { useEffect, useRef } from "react";

export default function Countdown() {
  const countdownRef = useRef<HTMLParagraphElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const dateOfStart = new Date("Sep 7, 2025 20:15:00").getTime();

    setInterval(() => {
      const currentDate = new Date().getTime();
      const difference = dateOfStart - currentDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (countdownRef?.current) {
        let timerString = "";
        timerString += `${days || "0"}d, `;
        timerString += `${hours || "0"}h, `;
        timerString += `${minutes || "0"}m, `;
        timerString += `${seconds || "0"}s`;

        if (
          days <= 0 &&
          hours <= 0 &&
          minutes <= 0 &&
          seconds <= 0 &&
          timerString === ""
        ) {
          timerString = "GO BILLS";
        }

        countdownRef.current.innerText = timerString;
      }
    }, 1000);
  }, []);

  return (
    <div className="border border-white bg-blue-800 border-solid rounded-lg w-full sm:w-[500px] mb-4">
      <div className="flex items-center justify-between p-2">
        <img
          onClick={() => {
            if (audioRef?.current) {
              audioRef.current.play();
            }
          }}
          width="50"
          height="50"
          className="hover:cursor-pointer"
          src={"https://storage.alexav.gg/content/bills.png"}
        />
        <p className="text-2xl font-bold" ref={countdownRef}></p>
      </div>
      <audio
        ref={audioRef}
        autoPlay={false}
        src={
          "https://storage.alexav.gg/content/0f4ce103-62d0-4ff1-8b8b-e38becced35d.mp3"
        }
      />
    </div>
  );
}
