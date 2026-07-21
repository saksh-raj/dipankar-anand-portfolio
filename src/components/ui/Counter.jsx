import { useMemo, useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Scroll-triggered count-up that preserves any non-digit prefix/suffix
 * (e.g. "5+", "~12", "99%"). Non-numeric values render as-is.
 */
export default function Counter({ value, duration = 1400, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  // Parse once; stable reference so it never re-triggers the animation.
  const { prefix, target, suffix, isNumeric } = useMemo(() => {
    const m = String(value).match(/^(\D*)(\d+)(\D*)$/);
    if (!m) return { prefix: "", target: 0, suffix: "", isNumeric: false };
    return { prefix: m[1], target: parseInt(m[2], 10), suffix: m[3], isNumeric: true };
  }, [value]);

  const count = useCountUp(target, inView, { duration, reducedMotion: reduced });

  if (!isNumeric) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {/* tabular-nums keeps digit width fixed so siblings never shift */}
      <span className="tabular-nums">{prefix}{count}{suffix}</span>
    </span>
  );
}
