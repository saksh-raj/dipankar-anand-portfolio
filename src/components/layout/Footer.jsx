import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import Socials from "@/components/ui/Socials";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="container-x flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#top"
            className="font-display text-xl tracking-tightest text-primary transition-opacity duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {profile.name}
            <span className="text-accent">.</span>
          </a>

          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {profile.role} — building for the web with care.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:items-end">
          <Socials />

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Back to top

            <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25">
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>

        <span className="font-mono">
          Built with React · Vite · Tailwind CSS · Framer Motion
        </span>
      </div>
    </footer>
  );
}