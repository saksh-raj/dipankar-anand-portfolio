import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

/**
 * A row of pill buttons with a shared animated highlight that slides
 * between the active option. Used for skill categories and project filters.
 *
 * @param {Array<{id:string,label:string}>} options
 * @param {string} value        currently active id
 * @param {(id:string)=>void} onChange
 * @param {string} layoutId     unique id for the sliding highlight per instance
 * @param {string} ariaLabel    group label for assistive tech
 */
export default function FilterPills({ options, value, onChange, layoutId, ariaLabel }) {
  return (
    <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.id)}
            className={cn(
              "relative rounded-full border px-4 py-2 text-sm transition-colors duration-300 sm:px-5",
              active
                ? "border-accent/40 text-primary"
                : "border-line text-secondary hover:border-white/20 hover:text-primary"
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-accent/[0.08]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
