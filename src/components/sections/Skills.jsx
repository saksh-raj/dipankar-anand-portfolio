import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FilterPills from "@/components/ui/FilterPills";
import { skillGroups } from "@/data/skills";
import { ease } from "@/utils/motion";

const list = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const chip = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease,
    },
  },
};

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);

  const group =
    skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  return (
    <Section
      id="skills"
      className="bg-surface/40"
    >
      <SectionHeader
        index="02"
        eyebrow="Skills"
        title="A stack, end to end."
        lead="The tools I reach for most — grouped by where they live in the system."
      />

      <div className="mt-14">
        <FilterPills
          options={skillGroups}
          value={active}
          onChange={setActive}
          layoutId="skill-tab"
          ariaLabel="Skill categories"
        />
      </div>

      {/* Reserve height to avoid layout shift */}
      <div className="mt-10 min-h-[188px]">
        <AnimatePresence mode="popLayout">
          <motion.ul
            key={active}
            variants={list}
            initial="hidden"
            animate="show"
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            }}
            className="flex flex-wrap gap-3"
          >
            {group.items.map((item) => (
              <motion.li
                key={item}
                variants={chip}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-2.5 rounded-xl border border-line bg-card px-4 py-3 transition-all duration-300 hover:border-white/[0.16] hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.45)]"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-accent/60 transition-colors group-hover:bg-accent"
                />

                <span className="text-sm font-medium text-primary">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </Section>
  );
}