import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Plus, Minus } from "lucide-react";
import TechTag from "@/components/ui/TechTag";
import { ease } from "@/utils/motion";

// A single project case study: screenshot, meta, expandable detail.
export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const frame = useRef(0);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el || frame.current) return;

    const { clientX, clientY } = e;

    frame.current = requestAnimationFrame(() => {
      frame.current = 0;

      const r = el.getBoundingClientRect();

      el.style.setProperty("--x", `${clientX - r.left}px`);
      el.style.setProperty("--y", `${clientY - r.top}px`);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      exit={{
        opacity: 0,
        scale: 0.97,
        transition: { duration: 0.25, ease },
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        ease,
        delay: (index % 2) * 0.08,
      }}
      className="group relative flex flex-col overflow-hidden rounded-xl2 border border-line bg-card transition-all duration-500 hover:border-white/[0.16] hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.55)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(500px_circle_at_var(--x,50%)_var(--y,50%),rgba(34,211,238,0.07),transparent_45%)]"
      />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-card">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.12), transparent 55%)",
              }}
            />
            <span className="font-display text-5xl text-white/[0.06]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}

        <span className="absolute right-4 top-4 rounded-full border border-line bg-black/40 px-3 py-1 font-mono text-[11px] text-secondary backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-muted">
              {project.year}
            </span>

            <h3 className="mt-1 font-display text-2xl text-primary">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={
              open
                ? `Hide details for ${project.title}`
                : `Show details for ${project.title}`
            }
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-secondary transition-colors hover:border-white/25 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-secondary">
          <span className="text-muted">Problem — </span>
          {project.problem}
        </p>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-secondary">
                <span className="text-muted">Solution — </span>
                {project.solution}
              </p>

              <div className="mt-5">
                <span className="eyebrow">Features</span>

                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm text-secondary"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-line pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Github size={15} aria-hidden />
              Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Live demo
              <ArrowUpRight size={15} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}