import { cn } from "@/utils/cn";

// Base card with a hover gradient-border effect (via pseudo layers).
export default function Card({ children, className = "", hover = true, ...props }) {
  return (
    <div
      className={cn(
        "relative rounded-xl2 border border-line bg-card overflow-hidden",
        hover &&
          "transition-colors duration-500 hover:border-white/[0.14]",
        className
      )}
      {...props}
    >
      {hover && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(600px_circle_at_var(--x,50%)_var(--y,0%),rgba(34,211,238,0.06),transparent_40%)] group-hover:opacity-100"
        />
      )}
      {children}
    </div>
  );
}
