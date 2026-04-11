"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Terminal, 
  Search, 
  Video, 
  TrendingUp, 
  Briefcase, 
  Rocket,
  ChevronRight
} from "lucide-react";

const capabilities = [
  {
    title: "Technical Content & Research",
    description: "Writing deep-dive technical content, documentation, and structured research for systems, security, and blockchain.",
    icon: Search,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Video Editing & Content Creation",
    description: "Creating high-quality technical visuals, explainers, and product-focused content.",
    icon: Video,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Growth & Marketing",
    description: "Understanding product positioning, user acquisition, and early-stage growth strategies.",
    icon: TrendingUp,
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Freelance & Independent Work",
    description: "Available for freelance engineering, technical consulting, and content-driven projects.",
    icon: Briefcase,
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    title: "Startup Exposure",
    description: "Actively interested in working with early-stage startups, contributing across engineering, product, and growth.",
    icon: Rocket,
    color: "from-red-500/20 to-red-600/20"
  }
];

export function ExtendedCapabilities() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1">
            Beyond Engineering
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Extended <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Beyond core systems engineering, I actively work across technical communication, growth, and execution domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-card/40 border border-border/80 hover:border-primary/40 transition-all backdrop-blur-sm overflow-hidden"
            >
              {/* Technical background pattern */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <cap.icon className="h-24 w-24" />
              </div>
              
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${cap.color} border border-white/5 mb-6 group-hover:scale-110 transition-transform`}>
                <cap.icon className="h-6 w-6 text-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                {cap.title}
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </section>
  );
}
