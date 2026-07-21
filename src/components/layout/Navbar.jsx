import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SECTION_IDS } from "@/constants/nav";
import { profile } from "@/data/profile";
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

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between rounded-full transition-all duration-500",
            scrolled &&
              "glass border border-line !max-w-[1080px] px-5 py-2.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
          )}
        >
          <a
            href="#top"
            className="font-display text-lg font-medium tracking-tightest text-primary"
          >
            {profile.firstName}
            <span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active === link.id
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={profile.socials.email}
            className="hidden md:inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-primary transition-colors hover:border-white/25 hover:bg-white/[0.03]"
          >
            Get in touch
          </a>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-line text-primary"
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
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
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
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-line bg-surface p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg tracking-tightest">
                  {profile.firstName}
                  <span className="text-accent">.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line"
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
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className={cn(
                      "flex items-baseline gap-3 border-b border-line py-4 text-2xl font-display tracking-tightest transition-colors",
                      active === link.id ? "text-primary" : "text-secondary"
                    )}
                  >
                    <span className="font-mono text-xs text-muted">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href={profile.socials.email}
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-black"
              >
                Get in touch
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
