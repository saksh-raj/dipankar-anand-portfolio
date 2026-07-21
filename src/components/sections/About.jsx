import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { about, education } from "@/data/about";
import { stagger, fadeUp, viewportOnce } from "@/utils/motion";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        index="01"
        eyebrow="About"
        title="Engineering with intent."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6"
        >
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-lg leading-relaxed text-secondary"
            >
              {p}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="pt-4">
            <span className="eyebrow">Education</span>
            <div className="mt-4 space-y-4">
              {education.map((e, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 border-l border-line pl-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-primary">{e.degree}</p>
                    <p className="text-sm text-secondary">{e.school}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Principles */}
        <div className="space-y-4">
          {about.principles.map((pr, i) => (
            <Reveal key={pr.title} delay={i * 0.08}>
              <div className="group rounded-xl2 border border-line bg-card p-6 transition-colors duration-500 hover:border-white/[0.14]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg text-primary">
                    {pr.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {pr.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
