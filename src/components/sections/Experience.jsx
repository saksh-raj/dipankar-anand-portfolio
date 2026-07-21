import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import TechTag from "@/components/ui/TechTag";
import { experience } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/utils/motion";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index="03"
        eyebrow="Experience"
        title="Where I've built."
      />

      <ol className="relative mt-14 space-y-12">
        {/* Timeline spine */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-2 left-[4px] top-2 w-px md:left-[168px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,255,255,0.10) 12%, rgba(255,255,255,0.10) 88%, transparent)",
          }}
        />

        {experience.map((job) => (
          <motion.li
            key={`${job.company}-${job.period}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative grid gap-6 pl-10 md:grid-cols-[168px_1fr] md:gap-10 md:pl-0"
          >
            {/* Timeline node */}
            <span
              aria-hidden
              className="absolute left-0 top-1.5 grid h-2.5 w-2.5 -translate-x-[3.5px] place-items-center rounded-full bg-accent md:left-[168px]"
            >
              {job.current && (
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
            </span>

            {/* Meta */}
            <div>
              <time
                className="font-mono text-xs text-muted"
                dateTime={job.period}
              >
                {job.period}
              </time>

              {job.current && (
                <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                  Current
                </span>
              )}
            </div>

            {/* Card */}
            <article className="rounded-xl2 border border-line bg-card p-6 transition-all duration-500 hover:border-white/[0.16] hover:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.45)] md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl text-primary">
                  {job.role}
                </h3>

                <span className="text-sm font-medium text-accent">
                  {job.company}
                </span>
              </div>

              {job.location && (
                <p className="mt-1 text-xs text-muted">
                  {job.location}
                </p>
              )}

              <p className="mt-4 leading-relaxed text-secondary">
                {job.summary}
              </p>

              <ul className="mt-5 space-y-3">
                {job.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-sm leading-relaxed text-secondary"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                    />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}