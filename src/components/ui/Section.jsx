import { cn } from "@/utils/cn";

// Semantic section wrapper with consistent spacing and anchor offset.
//
// A soft, edge-masked ambient glow sits at the top of each section so the
// boundary between sections reads as a gradient rather than a hard seam —
// this is what makes the scroll feel continuous and cinematic.
export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  blend = true,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative z-10 scroll-mt-24 py-24 sm:py-32",
        className
      )}
      {...props}
    >
      {blend && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-[1] h-40 opacity-40"
          style={{
            background:
              "radial-gradient(70% 100% at 50% 0%, rgba(34,211,238,0.035), transparent 72%)",
            WebkitMaskImage:
              "linear-gradient(180deg, #000, transparent)",
            maskImage: "linear-gradient(180deg, #000, transparent)",
          }}
        />
      )}

      <div className={cn("container-x", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
