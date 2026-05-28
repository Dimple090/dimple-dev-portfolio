import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !("ontouchstart" in window || navigator.maxTouchPoints > 0);
  });

  useEffect(() => {
    if (!visible) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Find closest interactive element
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hoverable") ||
        target.getAttribute("role") === "button";

      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [visible]);

  // Smooth trail effect
  useEffect(() => {
    let animationFrameId;
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease value: smaller = slower trail
        const ease = 0.15;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hovered ? "hovered" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-glow ${hovered ? "hovered" : ""}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />
    </>
  );
}
