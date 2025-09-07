import { useEffect, useRef, useState, FC } from "react";

interface AutoScrollingTextProps {
  speed?: number;
}
const lyrics: LyricItem[] = [
  {
    string: "and we're laying on the roof of my car",
    url: "https://open.spotify.com/track/4Pt2R2EJ3rZBRn2JpH7WnJ?si=7a167c7b22354d24",
  },
  {
    string: "your funeral was beautiful",
    url: "https://open.spotify.com/track/4ZJ4vzLQekI0WntDbanNC7?si=914245f4e48a4c00",
  },
  {
    string: "she was always the one",
    url: "https://open.spotify.com/track/21n769QrJtrmN0pXuBkYOm?si=b4a5e7f627b54fd9",
  },
  {
    string: "how lucky are we?",
    url: "https://open.spotify.com/track/5iJKGpnFfvbjZJeAtwXfCj?si=a0b160c9cead4863",
  },
  {
    string: "i'm yours to take darlin'",
    url: "https://open.spotify.com/track/2nATTe1i7aMzIZ8klEpgQ7?si=1bcd8e6aa9324b81",
  },
  {
    string: "wet, hot, american nights",
    url: "https://open.spotify.com/track/3c9EsIo34kil8Oj1reaozB?si=8c0aaf0fdb7a4e5f",
  },
  {
    string: "it ain't the whiskey that gets me",
    url: "https://open.spotify.com/track/0AsrOS8HktHe9TaB1i9W3v?si=c186a29f4e804d05",
  },
  {
    string: "i wrote a song for you",
    url: "https://open.spotify.com/track/744zwLqGKbOZW3RnxkRfHE?si=4d2230964fcc4f2f",
  },
  {
    string: "oh madeline, how you been?",
    url: "https://open.spotify.com/track/2DDo2QqElDO9PgOHeGtQiy?si=0fdcbaeb64694249",
  },
  {
    string: "she makes this country boy feel like a king",
    url: "https://open.spotify.com/track/091Ibwvg7tTp7eNGLlT7cT?si=67be323416b24729",
  },
  {
    string: "ain't in it for my health",
    url: "https://open.spotify.com/track/5Mz9T6QGwScq6Yt7DAXxi8?si=f51ff7f76dd24b00",
  },
];

type LyricItem = {
  string: string;
  url: string;
};

const RandomLyric: FC<AutoScrollingTextProps> = ({ speed = 0.5 }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lyric, setLyric] = useState<LyricItem | null>();

  const getRandomLyric = () => {
    const randomNumber = Math.floor(Math.random() * lyrics.length);
    console.log(randomNumber);
    setLyric(lyrics[randomNumber]);
  };
  useEffect(() => {
    getRandomLyric();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const contentElement = contentRef.current;

    if (!scrollContainer || !contentElement) return;

    // Create a clone of the content element
    const clone = contentElement.cloneNode(true) as HTMLDivElement;
    scrollContainer.appendChild(clone);

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!scrollContainer || !contentElement) return;

      // Increment scroll position based on speed
      scrollPosition += speed;

      // Reset position when first element is scrolled out of view
      if (scrollPosition >= contentElement.offsetWidth) {
        scrollPosition = 0;
      }

      // Apply scroll position
      scrollContainer.scrollLeft = scrollPosition;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed, lyric]);

  if (lyric) {
    return (
      <a href={lyric.url} target="_blank">
        <div
          ref={scrollContainerRef}
          className={`w-37 overflow-hidden rounded-lg`}
          style={{ whiteSpace: "nowrap" }}
        >
          <div ref={contentRef} className="inline-block">
            &nbsp;&nbsp;
            <span className={`text-xl font-medium text-white hover:underline`}>
              {lyric?.string}
            </span>
          </div>
        </div>
      </a>
    );
  }
};

export default RandomLyric;
