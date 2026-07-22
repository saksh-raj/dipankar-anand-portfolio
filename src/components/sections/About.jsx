import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { about, education } from "@/data/about";
import { stagger, fadeUp, viewportOnce } from "@/utils/motion";

export default function About() {
  return (
    <Section id="about" className="section-blend">
      <SectionHeader
        index="01"
        eyebrow="About"
        title="Engineering with intent."
      />

      <div className="mt-14 grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        {/* Left */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-7"
        >
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="max-w-[68ch] text-lg leading-relaxed text-secondary"
            >
              {p}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="pt-6">
            <span className="eyebrow">Education</span>

            <div className="mt-5 space-y-5">
              {education.map((e) => (
                <div
                  key={`${e.degree}-${e.period}`}
                  className="flex flex-col gap-2 border-l border-line pl-5 transition-colors duration-300 hover:border-accent/40 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div>
                    <h3 className="font-medium text-primary">
                      {e.degree}
                    </h3>

                    <p className="text-sm text-secondary">
                      {e.school}
                    </p>
                  </div>

                  <time
                    className="font-mono text-xs text-muted"
                    dateTime={e.period}
                  >
                    {e.period}
                  </time>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Principles */}
        <div className="space-y-5">
          {about.principles.map((pr, i) => (
            <Reveal
              key={pr.title}
              delay={i * 0.08}
            >
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group rounded-xl2 border border-line bg-card p-6 transition-all duration-500 hover:border-white/[0.16] hover:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-lg text-primary">
                    {pr.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {pr.body}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}