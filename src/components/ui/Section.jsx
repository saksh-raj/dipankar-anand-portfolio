import { cn } from "@/utils/cn";

// Semantic section with consistent vertical rhythm + anchor id.
export default function Section({ id, children, className = "", ...props }) {
  return (
    <section
      id={id}
      className={cn("relative z-10 scroll-mt-24 py-24 sm:py-32", className)}
      {...props}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
