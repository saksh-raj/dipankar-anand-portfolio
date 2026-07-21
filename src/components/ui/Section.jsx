import { cn } from "@/utils/cn";

// Semantic section wrapper with consistent spacing and anchor offset.
export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
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
      <div className={cn("container-x", containerClassName)}>
        {children}
      </div>
    </section>
  );
}