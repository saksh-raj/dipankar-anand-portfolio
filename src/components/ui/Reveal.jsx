import { motion } from "framer-motion";
import { fadeUp, viewportOnce, ease } from "@/utils/motion";

// Reusable scroll reveal wrapper.
export default function Reveal({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
  duration = 0.7,
  viewport = viewportOnce,
  once,
  amount,
  margin,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;

  const resolvedViewport = {
    ...viewport,
    ...(once !== undefined && { once }),
    ...(amount !== undefined && { amount }),
    ...(margin !== undefined && { margin }),
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={resolvedViewport}
      transition={{
        duration,
        ease,
        delay,
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}