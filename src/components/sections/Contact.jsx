import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import MagneticButton from "@/components/ui/MagneticButton";
import Socials from "@/components/ui/Socials";
import { profile } from "@/data/profile";
import { useToast } from "@/components/ui/Toast";
import { stagger, fadeUp, viewportOnce } from "@/utils/motion";

export default function Contact() {
  const toast = useToast();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast("Email copied to clipboard");
    } catch {
      toast("Couldn't copy — try again");
    }
  };

  return (
    <Section id="contact">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-[2rem] border border-line bg-card px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[620px] -translate-x-1/2 blur-[130px]"
          style={{
            background: "rgba(34,211,238,0.08)",
          }}
        />

        <motion.span
          variants={fadeUp}
          className="eyebrow"
        >
          Contact
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mx-auto mt-6 max-w-3xl font-display text-h2 text-gradient"
        >
          Have something worth building?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-secondary"
        >
          I'm {profile.availability.toLowerCase()}. The fastest way to reach me
          is email—or connect with me below.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton
            href={profile.socials.email}
            variant="primary"
          >
            Send an email
            <ArrowUpRight size={16} />
          </MagneticButton>

          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-primary transition-all duration-300 hover:border-white/25 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {copied ? (
              <Check
                size={15}
                className="text-accent"
              />
            ) : (
              <Copy size={15} />
            )}

            <span className="font-mono">
              {profile.email}
            </span>
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex justify-center"
        >
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download
              size={15}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />

            Download résumé
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex justify-center"
        >
          <Socials />
        </motion.div>
      </motion.div>
    </Section>
  );
}