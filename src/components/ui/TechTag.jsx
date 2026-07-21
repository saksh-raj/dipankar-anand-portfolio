import { cn } from "@/utils/cn";

// Small bordered monospace chip used for technologies across sections.
export default function TechTag({ children, className = "" }) {
  return (
    <span
      className={cn(
        "rounded-full border border-line px-3 py-1 font-mono text-xs text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
