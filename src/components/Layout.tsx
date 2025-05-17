import { useState, useEffect, type ReactNode } from "react";
import { Flashlight, FlashlightOff } from "lucide-react";
import CordycepsImage from "../assets/cordyceps.png";

export default function Layout({ children }: { children: ReactNode }) {
  const [pointerPosition, setPointerPosition] = useState({ x: 500, y: 500 });
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isFlashlightEnabled, setIsFlashlightEnabled] = useState(false);

  // Detect touch device on component mount
  useEffect(() => {
    const isTouchCapable =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setIsTouchDevice(isTouchCapable);
  }, []);

  // Handle mouse events for desktop
  const handleMouseMove = (e: React.MouseEvent) => {
    setPointerPosition({ x: e.clientX, y: e.clientY });
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  // Handle touch events for mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      e.preventDefault(); // Prevent scrolling while touching
      const touch = e.touches[0];
      setPointerPosition({ x: touch.clientX, y: touch.clientY });
      setIsActive(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      setPointerPosition({ x: touch.clientX, y: touch.clientY });
      setIsActive(true);
    }
  };

  const handleTouchEnd = () => {
    // On mobile, we'll keep the last position visible for a moment
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  useEffect(() => {
    // Define window event handlers with correct types
    const windowMouseMove = (e: MouseEvent) => {
      setPointerPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };

    const windowMouseLeave = () => {
      setIsActive(false);
    };

    const windowTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        setPointerPosition({ x: touch.clientX, y: touch.clientY });
        setIsActive(true);
      }
    };

    const windowTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        e.preventDefault?.(); // Optional chaining in case preventDefault isn't available
        const touch = e.touches[0];
        setPointerPosition({ x: touch.clientX, y: touch.clientY });
        setIsActive(true);
      }
    };

    const windowTouchEnd = () => {
      // On mobile, we'll keep the last position visible for a moment
      setTimeout(() => {
        setIsActive(false);
      }, 1000);
    };

    if (isFlashlightEnabled) {
      // Add desktop event listeners
      window.addEventListener("mousemove", windowMouseMove);
      window.addEventListener("mouseleave", windowMouseLeave);

      // Add mobile event listeners
      window.addEventListener("touchstart", windowTouchStart, {
        passive: false,
      });
      window.addEventListener("touchmove", windowTouchMove, { passive: false });
      window.addEventListener("touchend", windowTouchEnd);
    } else {
      // Remove desktop event listeners
      window.removeEventListener("mousemove", windowMouseMove);
      window.removeEventListener("mouseleave", windowMouseLeave);

      // Remove mobile event listeners
      window.removeEventListener("touchstart", windowTouchStart);
      window.removeEventListener("touchmove", windowTouchMove);
      window.removeEventListener("touchend", windowTouchEnd);
    }

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("mousemove", windowMouseMove);
      window.removeEventListener("mouseleave", windowMouseLeave);
      window.removeEventListener("touchstart", windowTouchStart);
      window.removeEventListener("touchmove", windowTouchMove);
      window.removeEventListener("touchend", windowTouchEnd);
    };
  }, [isFlashlightEnabled]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="min-h-screen flex flex-col justify-center items-center mx-auto select-none">
        <div className="border border-white border-solid p-2 rounded-lg w-full sm:w-[500px] mb-4">
          <div className="flex items-center justify-between">
            <div
              className="ml-2"
              onClick={() => setIsFlashlightEnabled(!isFlashlightEnabled)}
            >
              {isFlashlightEnabled ? <Flashlight /> : <FlashlightOff />}
            </div>
            <h1 className="text-2xl font-bold">welcome !</h1>
          </div>
        </div>
        {children}
      </div>

      {isFlashlightEnabled && (
        <>
          <div
            className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 ${
              isActive ? "opacity-95" : "opacity-0"
            }`}
            style={{
              maskImage: `radial-gradient(circle ${isTouchDevice ? "12rem" : "8rem"} at ${pointerPosition.x}px ${pointerPosition.y}px, transparent 0%, black 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${isTouchDevice ? "12rem" : "8rem"} at ${pointerPosition.x}px ${pointerPosition.y}px, transparent 0%, black 100%)`,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              maskImage: `radial-gradient(circle ${isTouchDevice ? "12rem" : "8rem"} at ${pointerPosition.x}px ${pointerPosition.y}px, black 0%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${isTouchDevice ? "12rem" : "8rem"} at ${pointerPosition.x}px ${pointerPosition.y}px, black 0%, transparent 100%)`,
            }}
          >
            <img
              src={CordycepsImage}
              className="absolute bottom-0 select-none"
              draggable={false}
              alt="Cordyceps"
            />
          </div>
          <audio loop autoPlay={true} src={"/clicker-sounds.mp3"} />
        </>
      )}
    </div>
  );
}
