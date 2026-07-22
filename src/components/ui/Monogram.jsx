import { cn } from "@/utils/cn";

/**
 * DA monogram — a compact, premium personal mark.
 * A rounded square tile with an "DA" wordmark and a subtle accent hairline,
 * paired with the "Dipankar Anand" wordmark on wider viewports.
 */
export default function Monogram({ showWordmark = true, className = "" }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[0.7rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        {/* accent glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-2 opacity-70 blur-md"
          style={{
            background:
              "radial-gradient(50% 50% at 30% 20%, rgba(34,211,238,0.30), transparent 70%)",
          }}
        />
        <span className="relative font-display text-[13px] font-semibold leading-none tracking-tightest text-primary">
          DA
        </span>
        <span
          aria-hidden
          className="absolute inset-x-1.5 bottom-1 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        />
      </span>

      {showWordmark && (
        <span className="hidden font-display text-[15px] font-medium tracking-tightest text-primary sm:inline">
          Dipankar&nbsp;Anand
        </span>
      )}
    </span>
  );
}
