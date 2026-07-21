import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/utils/motion";
import { cn } from "@/utils/cn";

// Consistent section heading: eyebrow + title + optional lead.
export default function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <motion.header
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"
      )}
    >
      <motion.div
        variants={fadeUp}
        className={cn(
          "mb-5 flex items-center gap-3",
          centered && "justify-center"
        )}
      >
        {index && (
          <span className="font-mono text-xs text-muted">
            {index}
          </span>
        )}

        <span className="eyebrow">{eyebrow}</span>

        {!centered && (
          <span
            aria-hidden
            className="h-px max-w-[80px] flex-1 bg-line"
          />
        )}
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="font-display text-h2 text-gradient"
      >
        {title}
      </motion.h2>

      {lead && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-5 text-lg leading-relaxed text-secondary",
            centered ? "mx-auto max-w-xl" : "max-w-xl"
          )}
        >
          {lead}
        </motion.p>
      )}
    </motion.header>
  );
}