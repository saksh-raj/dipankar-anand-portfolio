import { useEffect, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Drives a RAF count-up from 0 → target once `active` is true.
 *
 * Written to be StrictMode-safe: the effect is fully self-cleaning
 * (it cancels its own frame on cleanup and re-runs cleanly), rather than
 * relying on a persistent ref guard — a ref survives StrictMode's
 * mount→cleanup→remount cycle and would permanently block a restart,
 * freezing the value at 0.
 *
 * @param {number} target       final integer value
 * @param {boolean} active       whether the animation may run yet (e.g. in view)
 * @param {object} opts          { duration, reducedMotion }
 * @returns {number} current value to render
 */
export function useCountUp(target, active, { duration = 1400, reducedMotion = false } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (reducedMotion || duration <= 0) {
      setValue(target);
      return;
    }

    let raf = 0;
    let cancelled = false;
    const startTime = performance.now();

    const step = (now) => {
      if (cancelled) return;
      const t = Math.min(1, (now - startTime) / duration);
      setValue(Math.round(easeOutCubic(t) * target));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [active, target, duration, reducedMotion]);

  return value;
}
