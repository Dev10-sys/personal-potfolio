"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  FileCode2, 
  Presentation, 
  BarChart4, 
  Briefcase, 
  Zap,
  ChevronRight,
  Code2
} from "lucide-react";
import { useRef } from "react";

const capabilities = [
  {
    title: "Technical Content & Research",
    description: "Writing deep-dive technical content, documentation, and structured research for systems, security, and blockchain.",
    icon: FileCode2,
  },
  {
    title: "Video Editing & Content Creation",
    description: "Creating high-quality technical visuals, explainers, and product-focused content.",
    icon: Presentation,
  },
  {
    title: "Growth & Marketing",
    description: "Understanding product positioning, user acquisition, and early-stage growth strategies.",
    icon: BarChart4,
  },
  {
    title: "Freelance & Independent Work",
    description: "Available for freelance engineering, technical consulting, and content-driven projects.",
    icon: Briefcase,
  },
  {
    title: "Startup Exposure",
    description: "Actively interested in working with early-stage startups, contributing across engineering, product, and growth.",
    icon: Zap,
  }
];

export function ExtendedCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Background Animation */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ 
               backgroundImage: 'radial-gradient(#f7931a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </motion.div>

      {/* Animated Scanline */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-[50vh] bg-gradient-to-b from-transparent via-primary/5 to-transparent absolute top-[-50vh] animate-[scanline_10s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24 space-y-6">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-4 py-1 font-mono tracking-[0.2em] text-[10px] uppercase">
            Expansion Matrix
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-[0.9]">
            Extended <span className="text-primary italic">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium border-l-2 border-primary/20 pl-6">
            Beyond core systems engineering, I actively work across technical communication, growth, and execution domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-primary/40 transition-all duration-700 overflow-hidden"
            >
              {/* Technical Hover Reveal */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center justify-between mb-10">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 group-hover:rotate-[10deg]">
                  <cap.icon className="h-7 w-7 text-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="h-px w-12 bg-white/10 group-hover:w-20 group-hover:bg-primary/40 transition-all duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                <span className="text-primary/20 group-hover:text-primary/100 transition-colors font-mono text-sm">•</span>
                {cap.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm font-medium mb-10 flex-grow">
                {cap.description}
              </p>

              <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-primary/60 group-hover:text-primary transition-all">
                SYSTEM_ACCESS <ChevronRight className="h-3 w-3 animate-pulse" />
              </div>

              {/* Decorative Tech Corner */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-all">
                 <div className="w-8 h-8 border-t border-r border-primary/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scanline {
          0% { top: -50vh; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100vh; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
