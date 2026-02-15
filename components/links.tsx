import site from "@/data/site.json";
import type React from "react";
import { Github, Twitter, Linkedin, Mail, ExternalLink, Globe } from "lucide-react";

export function ImportantLinks() {
  const L = site.contact;
  const links = [
    L.github ? { label: "GitHub", href: L.github, Icon: Github, color: "hover:border-white/40" } : null,
    L.twitter ? { label: "Twitter", href: L.twitter, Icon: Twitter, color: "hover:border-blue-400/40" } : null,
    L.linkedin ? { label: "LinkedIn", href: L.linkedin, Icon: Linkedin, color: "hover:border-blue-600/40" } : null,
    L.email ? { label: "Email", href: L.email, Icon: Mail, color: "hover:border-primary/40" } : null,
  ].filter(Boolean) as {
    label: string;
    href: string;
    Icon: any;
    color: string;
  }[];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          Network & Socials
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Indices for reaching out and exploring distributed footprints.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {links.map(({ label, href, Icon, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center justify-between rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 ${color} hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1`}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-muted p-2.5 text-foreground group-hover:text-primary transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-bold tracking-tight">{label}</span>
            </div>
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-40 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
}

