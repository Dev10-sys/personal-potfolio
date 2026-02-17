"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, GitPullRequest, Code2, Users, Trophy, Zap, Globe } from "lucide-react";
import Link from "next/link";
import site from "@/data/site.json";
import { motion } from "framer-motion";

export function OpenSourcePreview() {
  const { openSource } = site;

  return (
    <section className="py-20 md:py-32 border-t border-border/40 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1">
              Engineered for the Open Web
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Open Source <span className="text-primary">Engineering</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {openSource.summary}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-6 py-3 bg-card border border-border/60 rounded-2xl shadow-sm">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold leading-none">{openSource.stats.totalPRs}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Total PRs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - High Impact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Total Contributions", value: openSource.stats.totalPRs, icon: Trophy, color: "text-primary" },
            { label: "Merged PRs", value: openSource.stats.mergedPRs, icon: GitPullRequest, color: "text-green-500" },
            { label: "Partner Orgs", value: openSource.stats.orgs, icon: Globe, color: "text-blue-500" },
            { label: "Tech Stack", value: openSource.stats.languages.length, icon: Code2, color: "text-orange-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-card/40 border border-border/80 hover:border-primary/40 transition-all backdrop-blur-sm shadow-sm"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
              <div className="text-4xl font-extrabold tracking-tight mb-2">{stat.value}</div>
              <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Organizations Cards - Refined */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {openSource.organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-border/80 bg-card/60 hover:bg-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Zap className="h-5 w-5 text-primary/40 animate-pulse" />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                     <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center font-bold text-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {org.name.charAt(0)}
                     </div>
                     <Link href={org.link} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
                        <Github className="h-5 w-5" />
                     </Link>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{org.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary/70">{org.tagline}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{org.impact}"
                  </p>
                  
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 block">Key Modules</span>
                    <div className="flex flex-wrap gap-2">
                      {org.contributions.slice(0, 3).map((cont, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/40 text-[11px] font-medium text-foreground/80 group-hover:border-primary/20 group-hover:bg-background transition-all">
                          {cont}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <div className="p-6 pt-0 mt-auto">
                  <Link href={org.link} target="_blank" className="w-full">
                    <Button variant="outline" className="w-full justify-between h-11 px-6 rounded-xl border-border/80 hover:border-primary hover:bg-primary/5 group/btn">
                      <span className="text-xs font-bold uppercase tracking-wider">Inspect Source</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Heatmap - Tagda Visuals */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-1 rounded-[2.5rem] bg-gradient-to-br from-primary/12 via-border/50 to-orange-600/12 shadow-xl"
        >
          <div className="bg-card rounded-[2.2rem] p-10 md:p-14 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Github className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 mb-1">Dev10.sys</span>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">Open Source Contribution Graph</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                    A record of upstream contributions, merged pull requests, and long-running systems-level work.
                  </p>
                  <p className="text-sm font-medium text-muted-foreground/60 italic">
                    Includes contributions to SugarLabs and related systems infrastructure projects.
                  </p>
                </div>
              </div>
              
              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || `https://github.com/${site.contact.github.split("/").pop()}`} target="_blank">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl px-10 h-14 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  <Github className="h-5 w-5 mr-3" />
                  View GitHub Activity
                </Button>
              </Link>
            </div>

            <div className="relative w-full rounded-2xl bg-muted/20 p-8 border border-border/60 backdrop-blur-md">
               <img 
                 src={`https://ghchart.rshah.org/F7931A/${site.contact.github.split("/").pop()}`} 
                 alt={`${site.hero.name}'s Github Chart`}
                 className="w-full max-w-5xl mx-auto opacity-100 filter drop-shadow-[0_0_10px_rgba(247,147,26,0.08)] scale-[1.02]"
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border/40">
               <motion.div whileHover={{ scale: 1.03 }} className="transition-transform">
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground/60 mb-1">Consistency</div>
                  <div className="text-xl font-extrabold">Sustained Upstream Contributions</div>
               </motion.div>
               <motion.div whileHover={{ scale: 1.03 }} className="transition-transform">
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground/60 mb-1">Impact</div>
                  <div className="text-xl font-extrabold">Crash Recovery & Runtime Fixes</div>
               </motion.div>
               <motion.div whileHover={{ scale: 1.03 }} className="transition-transform">
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground/60 mb-1">Status</div>
                  <div className="text-xl font-extrabold text-green-500">Merged to Master</div>
               </motion.div>
               <motion.div whileHover={{ scale: 1.03 }} className="transition-transform">
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground/60 mb-1">Trust</div>
                  <div className="text-xl font-extrabold">Maintainer Reviewed</div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


