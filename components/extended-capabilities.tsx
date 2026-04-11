"use client";

import { motion } from "framer-motion";
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

const capabilities = [
  {
    title: "Technical Content & Research",
    description: "Architecting deep-dive technical content, system documentation, and security research for infrastructure and blockchain protocols.",
    icon: FileCode2,
    tag: "WRITING"
  },
  {
    title: "Technical Visualization",
    description: "Creating high-fidelity technical visuals and product-focused explainers that bridge the gap between complex systems and clarity.",
    icon: Presentation,
    tag: "VISUALS"
  },
  {
    title: "Strategic Growth",
    description: "Engineering product positioning and user acquisition strategies for early-stage technical products and protocols.",
    icon: BarChart4,
    tag: "STRATEGY"
  },
  {
    title: "Independent Consulting",
    description: "Providing high-bandwidth technical consulting, freelance engineering, and specialized development for complex stack migrations.",
    icon: Briefcase,
    tag: "CONSULTING"
  },
  {
    title: "Startup Execution",
    description: "Driving engineering leadership and product-market fit refinement during critical early-stage startup cycles.",
    icon: Zap,
    tag: "EXECUTION"
  }
];

export function ExtendedCapabilities() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#f7931a 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20 space-y-6">
          <Badge variant="outline" className="text-primary border-primary/40 bg-primary/5 px-4 py-1 font-mono tracking-widest text-[10px] uppercase">
            Beyond Engineering
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground uppercase italic leading-[0.9]">
            Extended <span className="text-primary not-italic">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            Strategic operations across technical communication, growth, and high-stakes execution domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:border-primary/40 transition-all duration-500 backdrop-blur-md overflow-hidden"
            >
              {/* Card Technical Background */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute inset-0" 
                     style={{ backgroundImage: 'linear-gradient(rgba(247,147,26,0.05) 1px, transparent 1px), linear-gradient(90(rgba(247,147,26,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              </div>

              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                  <cap.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                  {cap.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm font-medium mb-8 flex-grow">
                {cap.description}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                DETAILS <ChevronRight className="h-3 w-3" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                 <Code2 className="h-4 w-4 text-primary/40 group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Structural Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
