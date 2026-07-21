import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import TechTag from "@/components/ui/TechTag";
import { experience } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/utils/motion";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader index="03" eyebrow="Experience" title="Where I've built." />

      <ol className="relative mt-14 space-y-12">
        {/* Spine — fades out at both ends so it never dangles past a node.
            Sits at the node centre: 4px (mobile) / 168px (desktop). */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-2 bottom-2 left-[4px] w-px md:left-[168px]"
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
            className="relative grid gap-6 pl-10 md:grid-cols-[168px_1fr] md:gap-10 md:pl-0"
          >
            {/* Node — centred on the spine */}
            <span className="absolute left-0 top-1.5 grid h-2.5 w-2.5 -translate-x-[3.5px] place-items-center rounded-full bg-accent md:left-[168px]">
              {job.current && (
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
            </span>

            <div>
              <span className="font-mono text-xs text-muted">{job.period}</span>
              {job.current && (
                <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                  Current
                </span>
              )}
            </div>

            <div className="rounded-xl2 border border-line bg-card p-6 transition-colors duration-500 hover:border-white/[0.14] md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl text-primary">{job.role}</h3>
                <span className="text-sm text-accent">{job.company}</span>
              </div>
              {job.location && <p className="mt-1 text-xs text-muted">{job.location}</p>}
              <p className="mt-4 text-secondary">{job.summary}</p>

              <ul className="mt-5 space-y-2.5">
                {job.achievements.map((a, j) => (
                  <li key={j} className="flex gap-3 text-sm text-secondary">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
