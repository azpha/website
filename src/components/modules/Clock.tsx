import { useState, useEffect } from "react";

export default function Clock() {
  const [clock, setClock] = useState(
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  useEffect(() => {
    setInterval(() => {
      const date = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      if (clock != date) {
        setClock(date);
      }
    }, 500);
  }, []);

  return (
    <h1 className="text-center bg-white text-black max-w-fit mx-auto px-1">
      {clock}
    </h1>
  );
}
