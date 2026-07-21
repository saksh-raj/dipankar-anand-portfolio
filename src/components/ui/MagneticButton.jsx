import { useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const VARIANTS = {
  primary:
    "bg-accent text-black font-medium shadow-[0_8px_30px_-8px_rgba(34,211,238,0.45)] hover:shadow-[0_10px_44px_-8px_rgba(34,211,238,0.65)]",
  outline:
    "border border-line text-primary hover:border-white/25 hover:bg-white/[0.03]",
  ghost: "text-secondary hover:text-primary",
};

// A button/link that subtly follows the cursor. Renders <a> if href given.
export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  strength = 0.35,
  type,
  ...props
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = useCallback(
    (e) => {
      if (reduced || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      x.set((e.clientX - (r.left + r.width / 2)) * strength);
      y.set((e.clientY - (r.top + r.height / 2)) * strength);
    },
    [reduced, strength, x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      type={href ? undefined : type || "button"}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-[background-color,border-color,box-shadow,color] duration-300 will-change-transform",
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
