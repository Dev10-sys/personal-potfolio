"use client";

import site from "@/data/site.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Skills() {
  const skills = site.profile.skills;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-20">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold tracking-tight">Engineering Stack</h2>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
          Deep technical expertise in systems, security, and protocol-level engineering.
        </p>

        {/* Stats Strip - Instant Credibility */}
        <div className="pt-8 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-primary">{site.openSource.stats.totalPRs}</span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Contributions</span>
          </div>
          <div className="w-px h-12 bg-border/40 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-primary">10+</span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Organizations</span>
          </div>
          <div className="w-px h-12 bg-border/40 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-primary italic">Production</span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Systems Depth</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className="group relative h-full border-border/60 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 rounded-[2rem] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-black flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl bg-muted/50 px-4 py-2 text-xs font-bold border border-border/40 transition-all group-hover:bg-background group-hover:border-primary/20 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
