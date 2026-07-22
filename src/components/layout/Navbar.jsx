import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SECTION_IDS } from "@/constants/nav";
import { profile } from "@/data/profile";
import Monogram from "@/components/ui/Monogram";
import { useScrolled } from "@/hooks/useScrollState";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ease } from "@/utils/motion";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useScrollLock(open);

  // Close menu on Escape
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between rounded-full transition-all duration-500",
            scrolled &&
            "glass border border-line !max-w-[1080px] px-5 py-2.5 shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55)]"
          )}
        >
          <a
            href="#top"
            aria-label="Dipankar Anand — home"
            className="rounded-lg transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Monogram />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active === link.id
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />
                )}

                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-1.5 md:flex">
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full px-3.5 py-2 text-sm text-secondary transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Resume
            </a>

            <a
              href={profile.socials.email}
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm font-medium text-black shadow-[0_8px_30px_-8px_rgba(34,211,238,0.45)] transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_10px_44px_-8px_rgba(34,211,238,0.65)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
              className="absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col border-l border-line bg-surface p-8"
            >
              <div className="flex items-center justify-between">
                <Monogram />

                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-12 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className={cn(
                      "flex items-baseline gap-3 border-b border-line py-4 text-2xl font-display tracking-tightest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      active === link.id
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    )}
                  >
                    <span className="font-mono text-xs text-muted">
                      0{i + 1}
                    </span>

                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm text-primary transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Resume
                </a>

                <a
                  href={profile.socials.email}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-3 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Get in touch
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}