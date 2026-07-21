import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/utils/cn";

const links = [
  { icon: Github, href: profile.socials.github, label: "GitHub" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: profile.socials.email, label: "Email" },
];

export default function Socials({ className = "" }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="group grid h-11 w-11 place-items-center rounded-full border border-line text-secondary transition-[transform,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-primary"
        >
          <Icon size={18} className="transition-transform group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
