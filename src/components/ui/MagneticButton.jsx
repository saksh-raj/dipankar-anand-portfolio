import { useCallback, useEffect, useRef } from "react";
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

// A button/link that subtly follows the cursor. Renders <a> if href is provided.
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

  const sx = useSpring(x, {
    stiffness: 180,
    damping: 20,
  });

  const sy = useSpring(y, {
    stiffness: 180,
    damping: 20,
  });

  const onMove = useCallback(
    (e) => {
      if (reduced || !ref.current) return;

      if (e.pointerType === "touch") return;

      const rect = ref.current.getBoundingClientRect();

      const factor = Math.min(Math.max(strength, 0), 0.6);

      x.set((e.clientX - (rect.left + rect.width / 2)) * factor);
      y.set((e.clientY - (rect.top + rect.height / 2)) * factor);
    },
    [reduced, strength, x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    window.addEventListener("blur", reset);
    return () => window.removeEventListener("blur", reset);
  }, [reset]);

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.08 }
      }}
      ref={ref}
      href={href}
      type={href ? undefined : type || "button"}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-[background-color,border-color,box-shadow,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        VARIANTS[variant] ?? VARIANTS.primary,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}