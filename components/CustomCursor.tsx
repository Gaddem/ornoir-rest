"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let frame: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const loop = () => {
      setTrail((prev) => ({
        x: lerp(prev.x, pos.x, 0.1),
        y: lerp(prev.y, pos.y, 0.1),
      }));
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [pos]);

  useEffect(() => {
    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.getAttribute("data-cursor") === "hover"
      ) {
        setIsHover(true);
      }
    };
    const onLeave = () => setIsHover(false);
    const onDown = () => setIsClick(true);
    const onUp = () => setIsClick(false);

    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          borderRadius: "9999px",
          width: isClick ? 6 : 8,
          height: isClick ? 6 : 8,
          backgroundColor: "#C9A84C",
          translateX: pos.x - 4,
          translateY: pos.y - 4,
        }}
        transition={{ duration: 0 }}
      />

      {/* Ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9998,
          borderRadius: "9999px",
          border: "1px solid #C9A84C",
          width: isHover ? 56 : isClick ? 24 : 36,
          height: isHover ? 56 : isClick ? 24 : 36,
          translateX: trail.x - (isHover ? 28 : isClick ? 12 : 18),
          translateY: trail.y - (isHover ? 28 : isClick ? 12 : 18),
          opacity: isHover ? 0.6 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      />

      {/* Outer glow on hover */}
      {isHover && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9997,
            borderRadius: "9999px",
            width: 80,
            height: 80,
            translateX: trail.x - 40,
            translateY: trail.y - 40,
            background:
              "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
}
