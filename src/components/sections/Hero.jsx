import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, MousePointer2 } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { stagger, fadeUp, ease } from "@/utils/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Socials from "@/components/ui/Socials";
import Counter from "@/components/ui/Counter";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-16"
    >
      <div className="container-x w-full">
        <motion.div
          variants={stagger(0.12, 0.2)}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]"
        >
          {/* Left: copy */}
          <div>
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs uppercase tracking-eyebrow text-secondary">
                {profile.availability}
              </span>
            </motion.div>

            <h1 className="font-display text-display font-semibold text-primary">
              <motion.span variants={fadeUp} className="block">
                {profile.firstName}
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block text-white/40"
              >
                Anand<span className="text-accent">.</span>
              </motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-accent"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-secondary"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                View projects
                <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton
                href={profile.resumeUrl}
                variant="outline"
                download
              >
                <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                Resume
              </MagneticButton>
              <div className="ml-1">
                <Socials />
              </div>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-4"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-semibold tabular-nums text-primary">
                    <Counter value={s.value} duration={5200} />
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: portrait */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl2 border border-line bg-card"
            >
              {imgOk ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-card to-surface">
                  <span className="font-display text-6xl text-white/10">DA</span>
                  <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                    Full Stack Developer
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              <div className="pointer-events-none absolute -inset-px rounded-xl2 bg-gradient-to-t from-accent/10 to-transparent opacity-60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        aria-label="Scroll to About section"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-eyebrow text-muted md:flex"
      >
        <MousePointer2 size={13} />
        <span>Scroll</span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
