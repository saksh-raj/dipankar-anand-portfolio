import { Award, Code2, Trophy, Milestone } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { achievements } from "@/data/achievements";

const iconFor = {
  Certification: Award,
  "Open Source": Code2,
  Hackathon: Trophy,
  Award: Trophy,
  Milestone: Milestone,
};

export default function Achievements() {
  // Only render entries that have real content — hides TODO scaffolding.
  const items = achievements.filter(
    (a) => a.title && !a.title.startsWith("TODO")
  );

  if (items.length === 0) return null;

  return (
    <Section id="achievements" className="section-blend">
      <SectionHeader
        index="04"
        eyebrow="Recognition"
        title="Certifications & wins."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((a, i) => {
          const Icon = iconFor[a.type] || Award;
          return (
            <Reveal key={i} delay={(i % 4) * 0.06}>
              <div className="group flex h-full flex-col rounded-xl2 border border-line bg-card p-6 transition-[transform,border-color] duration-500 will-change-transform hover:-translate-y-1 hover:border-white/[0.14]">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line text-accent transition-colors group-hover:border-accent/40">
                  <Icon size={18} />
                </span>
                <span className="mt-5 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                  {a.type}
                </span>
                <h3 className="mt-2 font-display text-base leading-snug text-primary">
                  {a.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-sm text-secondary">{a.issuer}</span>
                  <span className="font-mono text-xs text-muted">{a.year}</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
