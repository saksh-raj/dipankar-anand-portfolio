import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SIZE = 480;

// Premium cursor glow with GPU-friendly transforms.
export default function CursorGlow() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);

  const sx = useSpring(x, {
    stiffness: 100,
    damping: 24,
    mass: 0.8,
  });

  const sy = useSpring(y, {
    stiffness: 100,
    damping: 24,
    mass: 0.8,
  });

  useEffect(() => {
    if (reduced) return;

    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) return;

    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };

    window.addEventListener("pointermove", move, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", move);
    };
  }, [reduced, x, y]);

  if (reduced || !enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden md:block"
      style={{
        x: sx,
        y: sy,
        width: SIZE,
        height: SIZE,
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(34,211,238,0.055) 0%, rgba(34,211,238,0.03) 35%, transparent 70%)",
        filter: "blur(8px)",
        willChange: "transform",
      }}
    />
  );
}