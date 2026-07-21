import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ease } from "@/utils/motion";

// Brief intro overlay: counts to 100, then wipes away.
export default function Loader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);
  const count = useCountUp(100, true, { duration: 1100, reducedMotion: reduced });

  // Dismiss when the count completes (or immediately for reduced motion).
  useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }
    if (count >= 100) {
      const t = setTimeout(() => setDone(true), 350);
      return () => clearTimeout(t);
    }
  }, [count, reduced]);

  // Failsafe: never let the overlay trap the page, even if the count stalls.
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2500);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll while the overlay is visible.
  useScrollLock(!done);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl tracking-tightest text-primary"
          >
            {profile.firstName}
            <span className="text-accent">.</span>
          </motion.span>
          <span className="mt-4 font-mono text-xs text-muted tabular-nums">
            {String(count).padStart(3, "0")}
          </span>
          <div className="mt-4 h-px w-40 overflow-hidden bg-white/10">
            <span
              className="block h-full bg-accent"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
