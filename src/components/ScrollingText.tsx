import { useEffect, useRef } from "react";

const ScrollingText = ({
  speed = 0.5,
  size = "37",
  text,
}: {
  speed?: number;
  size?: string;
  text: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
  }, [speed, text]);

  if (text) {
    return (
      <div
        ref={scrollContainerRef}
        className={`w-${size} overflow-hidden rounded-lg whitespace-nowrap`}
      >
        <div ref={contentRef} className="inline-block">
          &nbsp;&nbsp;
          <span className="text-xl font-medium text-white hover:underline">
            {text}
          </span>
        </div>
      </div>
    );
  }
};

export default ScrollingText;
