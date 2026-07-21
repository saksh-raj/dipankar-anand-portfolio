import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/utils/motion";

// Consistent section heading: eyebrow index + title + optional lead.
export default function SectionHeader({ index, eyebrow, title, lead, align = "left" }) {
  return (
    <motion.header
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
        {index && <span className="font-mono text-xs text-muted">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-line max-w-[80px]" />
      </motion.div>
      <motion.h2 variants={fadeUp} className="font-display text-h2 text-gradient">
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-secondary text-lg leading-relaxed max-w-xl"
        >
          {lead}
        </motion.p>
      )}
    </motion.header>
  );
}
