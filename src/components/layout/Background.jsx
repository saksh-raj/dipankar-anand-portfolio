import { motion } from "framer-motion";

// Premium ambient background with subtle motion.
export default function Background() {
  return (
    <>
      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 65% at 50% 0%, #000 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 65% at 50% 0%, #000 45%, transparent 100%)",
        }}
      />

      {/* Main cyan glow */}
      <motion.div
        aria-hidden
        animate={{
          x: [-20, 20, -20],
          y: [-10, 15, -10],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-1/2 top-[-12%] z-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background: "rgba(34,211,238,0.07)",
        }}
      />

      {/* Indigo glow */}
      <motion.div
        aria-hidden
        animate={{
          x: [10, -15, 10],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed right-[-10%] top-[35%] z-0 h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{
          background: "rgba(99,102,241,0.05)",
        }}
      />

      {/* Warm accent */}
      <motion.div
        aria-hidden
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-[-10%] bottom-[-12%] z-0 h-[340px] w-[340px] rounded-full blur-[130px]"
        style={{
          background: "rgba(168,85,247,0.035)",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Grain */}
      <div
        aria-hidden
        className="grain-overlay animate-grain"
      />
    </>
  );
}