import { motion } from "framer-motion";
import { fadeUp, viewportOnce, ease } from "@/utils/motion";

/**
 * Reusable scroll-reveal wrapper.
 * `delay` is applied without discarding the variant's duration/easing —
 * element-level `transition` fully replaces the variant transition in
 * Framer Motion, so we re-supply the base timing here.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
  duration = 0.7,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ duration, ease, delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
