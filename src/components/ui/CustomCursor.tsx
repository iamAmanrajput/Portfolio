import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-16 h-16 border-2 border-blue-500 rounded-full pointer-events-none transition-all duration-300 mix-blend-difference ease-out z-50`}
        style={{ transform: `translate(${position.x - 32}px, ${position.y - 32}px)` }}
      />

      {/* Inner Cursor */}
      <div
        className={`fixed w-8 h-8 bg-blue-500 rounded-full pointer-events-none transition-all duration-300 mix-blend-difference ease-out z-50`}
        style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px)` }}
      />
    </>
  );
}
