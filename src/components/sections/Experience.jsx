import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import TechTag from "@/components/ui/TechTag";
import { experience } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/utils/motion";

// A small list of achievement bullets, shared by single- and multi-role cards.
function Bullets({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="mt-4 space-y-3">
      {items.map((achievement) => (
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
  );
}

export default function Experience() {
  return (
    <Section id="experience" className="section-blend">
      <SectionHeader
        index="03"
        eyebrow="Experience"
        title="Where I've built."
        lead="4.5+ years across search platforms, high-throughput services and distributed backends."
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

        {experience.map((job) => {
          const multiRole = Array.isArray(job.roles) && job.roles.length > 0;
          const headingPeriod = multiRole ? job.roles[0].period : job.period;

          return (
            <motion.li
              key={`${job.company}-${headingPeriod}`}
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

              {/* Meta rail */}
              <div>
                <time className="font-mono text-xs text-muted" dateTime={headingPeriod}>
                  {headingPeriod}
                </time>

                {job.current && (
                  <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                    Current
                  </span>
                )}

                {job.location && (
                  <p className="mt-1 text-xs text-muted md:mt-2">{job.location}</p>
                )}
              </div>

              {/* Card */}
              <article className="rounded-xl2 border border-line bg-card p-6 transition-all duration-500 hover:border-white/[0.16] hover:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.45)] md:p-8">
                {multiRole ? (
                  <>
                    {/* Company header */}
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl text-primary">
                        {job.company}
                      </h3>
                      <span className="text-xs font-medium uppercase tracking-eyebrow text-muted">
                        {job.roles.length} roles
                      </span>
                    </div>

                    {/* Nested role progression */}
                    <div className="mt-6 space-y-7 border-l border-line pl-5">
                      {job.roles.map((r) => (
                        <div key={`${r.role}-${r.period}`} className="relative">
                          <span
                            aria-hidden
                            className="absolute -left-[23px] top-1.5 h-2 w-2 rounded-full bg-accent/50 ring-4 ring-card"
                          />

                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                            <h4 className="font-display text-base text-primary">
                              {r.role}
                            </h4>
                            <time
                              className="font-mono text-xs text-muted"
                              dateTime={r.period}
                            >
                              {r.period}
                            </time>
                          </div>

                          {r.summary && (
                            <p className="mt-2 text-sm leading-relaxed text-secondary">
                              {r.summary}
                            </p>
                          )}

                          <Bullets items={r.achievements} />
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl text-primary">
                        {job.role}
                      </h3>
                      <span className="text-sm font-medium text-accent">
                        {job.company}
                      </span>
                    </div>

                    {job.summary && (
                      <p className="mt-4 leading-relaxed text-secondary">
                        {job.summary}
                      </p>
                    )}

                    <Bullets items={job.achievements} />
                  </>
                )}

                {job.tech?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                )}
              </article>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
