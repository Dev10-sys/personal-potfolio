"use client";

import site from "@/data/site.json";
import { useState } from "react";
import { Github, Twitter, Linkedin, Mail, ExternalLink, FileText, Terminal, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const Contact3D = dynamic(() => import("./contact-3d").then(mod => mod.Contact3D), { ssr: false });

export function ImportantLinks() {
  const L = site.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = L.email.replace("mailto:", "");
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: "GitHub", href: L.github, Icon: Github, color: "hover:border-[#f7931a]/60" },
    { label: "LinkedIn", href: L.linkedin, Icon: Linkedin, color: "hover:border-[#f7931a]/60" },
    { label: "Twitter", href: L.twitter, Icon: Twitter, color: "hover:border-[#f7931a]/60" },
    { label: "Portfolio Repo", href: "https://github.com/Dev10-sys/personal-potfolio", Icon: Terminal, color: "hover:border-[#f7931a]/60" },
    { label: "Resume", href: "/resume.pdf", Icon: FileText, color: "hover:border-[#f7931a]/60", primary: true },
  ].filter(link => link.href);

  return (
    <div className="relative w-full py-24 overflow-hidden">
      <Contact3D />
      <div className="w-full max-w-6xl mx-auto space-y-12 relative z-10 px-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Social & Resources</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore production codebases, professional history, and secure contact nodes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Email Card with Copy Logic */}
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          className="group relative flex items-center justify-between rounded-[2rem] border border-border/60 bg-card/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#f7931a]/40 hover:shadow-2xl hover:shadow-[#f7931a]/5 cursor-pointer"
          onClick={copyEmail}
        >
          <div className="flex items-center gap-5">
            <div className="rounded-[1.2rem] bg-muted/50 p-4 text-foreground group-hover:bg-[#f7931a]/10 group-hover:text-[#f7931a] transition-all duration-500 group-hover:rotate-12">
              {copied ? <Check className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Email</span>
              <div className="font-bold tracking-tight text-lg">Contact Dev</div>
            </div>
          </div>
          <AnimatePresence>
            {copied && (
              <motion.span 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs font-bold text-[#f7931a] uppercase tracking-widest"
              >
                Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {links.map(({ label, href, Icon, color, primary }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -5 }}
            className={`group relative flex items-center justify-between rounded-[2rem] border border-border/60 bg-card/40 p-6 backdrop-blur-xl transition-all duration-300 ${color} hover:shadow-2xl hover:shadow-[#f7931a]/5 ${primary ? 'bg-gradient-to-br from-card/80 to-[#f7931a]/5' : ''}`}
          >
            <div className="flex items-center gap-5">
              <div className="rounded-[1.2rem] bg-muted/50 p-4 text-foreground group-hover:bg-[#f7931a]/10 group-hover:text-[#f7931a] transition-all duration-500 group-hover:rotate-12">
                <Icon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Index</span>
                <div className="font-bold tracking-tight text-lg">{label}</div>
              </div>
            </div>
            <div className="relative h-6 w-6 overflow-hidden">
               <ExternalLink className="h-5 w-5 absolute transition-all duration-300 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-40" />
               <div className="h-5 w-5 absolute transition-all duration-300 translate-y-0 group-hover:-translate-y-6 group-hover:opacity-0 underline-decoration-primary">
                  {label === "LinkedIn" ? <div className="w-4 h-0.5 bg-primary/20 mt-4 mx-auto group-hover:w-0 transition-all opacity-40" /> : null}
               </div>
            </div>
          </motion.a>
        ))}
      </div>
      </div>
    </div>
  );
}

