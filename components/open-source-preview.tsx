"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, GitPullRequest, Code2, Users, Trophy, Zap, Globe } from "lucide-react";
import Link from "next/link";
import site from "@/data/site.json";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Globe3D = dynamic(() => import("./globe-3d").then(mod => mod.Globe3D), { ssr: false });

export function OpenSourcePreview() {
  const { openSource } = site;

  return (
    <section className="py-20 md:py-32 border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Globe3D />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1">
              Building for the Open Web
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Open Source <span className="text-primary">Contributor</span>
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
                <div className="text-[10px] uppercase tracking_widest text-muted-foreground mt-1">Total PRs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - High Impact */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {[
            { label: "GSoC 2026", value: "1x", icon: Trophy, color: "text-[#F7931A]", badge: "Sugar Labs" },
            { label: "Total Contributions", value: openSource.stats.totalPRs, icon: Trophy, color: "text-primary" },
            { label: "Accepted PRs", value: openSource.stats.mergedPRs, icon: GitPullRequest, color: "text-green-500" },
            { label: "Organizations", value: openSource.stats.orgs, icon: Globe, color: "text-blue-500" },
            { label: "Tech Stack", value: openSource.stats.languages.length, icon: Code2, color: "text-orange-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-card/40 border border-border/80 hover:border-primary/40 transition-all backdrop-blur-sm"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold tracking-tight mb-2 flex items-baseline gap-2">
                {stat.value}
                {stat.badge && <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{stat.badge}</span>}
              </div>
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
              <Card className="h-full flex flex-col border-border/40 bg-card/60 backdrop-blur-xl hover:bg-card hover:border-primary/60 hover:shadow-[0_0_40px_rgba(247,147,26,0.1)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden p-0.5">
                <div className="bg-background/40 rounded-[1.8rem] flex flex-col h-full relative overflow-hidden p-6 mt-4">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap className="h-5 w-5 text-primary/40 animate-pulse" />
                  </div>
                  
                  {org.name === "SugarLabs" && (
                    <div className="absolute -top-1 right-6 z-20 translate-y-[-50%]">
                      <div className="flex items-center gap-2 bg-[#F7931A] text-black px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(247,147,26,0.6)] animate-pulse">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/GSoC_logo.svg" className="w-4 h-4 object-contain" />
                        GSoC '26
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center font-bold text-lg transition-colors overflow-hidden border border-border/40">
                        {(() => {
                           const repoUrlMatch = org.link.match(/github\.com\/([^\/]+)/);
                           const orgId = repoUrlMatch ? repoUrlMatch[1] : null;
                           return orgId ? (
                             <img src={`https://github.com/${orgId}.png`} alt={org.name} className="w-full h-full object-cover" />
                           ) : (
                             org.name.charAt(0)
                           );
                        })()}
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
                    
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 block">Key Modules</span>
                        <div className="flex flex-wrap gap-2">
                          {org.contributions.slice(0, 3).map((cont, i) => (
                            <div key={i} className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/40 text-[11px] font-medium text-foreground/80 group-hover:border-primary/20 group-hover:bg-background transition-all whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                              {cont}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {org.links && org.links.length > 0 && (
                        <div className="space-y-3 relative z-20">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block">Pull Requests</span>
                          <div className="flex flex-wrap gap-2">
                            {org.links.slice(0, 4).map((link, i) => {
                              const prNumber = link.split('/').pop();
                              return (
                                <Link key={i} href={link} target="_blank" onClick={(e) => e.stopPropagation()}>
                                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/50 flex items-center gap-1 transition-all cursor-pointer">
                                    <GitPullRequest className="h-3 w-3" />
                                    #{prNumber}
                                  </Badge>
                                </Link>
                              );
                            })}
                            {org.links.length > 4 && (
                              <Link href={org.link} target="_blank" onClick={(e) => e.stopPropagation()}>
                                <Badge variant="outline" className="bg-muted/50 hover:bg-muted text-muted-foreground border-border/40 hover:border-border flex items-center gap-1 transition-all cursor-pointer">
                                  +{org.links.length - 4} more
                                </Badge>
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
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
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Terminal - Tagda Visuals */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group h-full"
        >
          {/* Outer technical border/glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/5 to-orange-600/30 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          
          <div className="relative bg-[#0A0A0A] border border-white/5 rounded-[2.2rem] overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  System Monitoring :: Contribution_Pulse_v2.0
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4 font-mono text-[10px] text-primary/40">
                <span>LATENCY: 24ms</span>
                <span>STATE: DEPLOYED</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 text-primary">
                    <Github className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Open Source Infrastructure</span>
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Contribution Heatmap
                  </h3>
                  <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed font-light">
                     A hardware-accelerated trace of repository activity, commit velocity, and merged PR logic across the decentralized web.
                  </p>
                </div>
                
                <Link href={`https://github.com/${site.contact.github.split("/").pop()}`} target="_blank">
                  <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-white font-bold rounded-2xl px-10 h-14 transition-all group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <Users className="h-5 w-5 mr-3" />
                    Connect Node
                  </Button>
                </Link>
              </div>

              {/* Heatmap Container with Scanlines and Grid */}
              <div className="relative w-full rounded-2xl bg-black/40 p-10 border border-white/5 overflow-hidden group/chart">
                 {/* Scanline Effect */}
                 <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_4px,3px_100%] opacity-20" />
                 
                 <div className="relative z-0">
                    <img 
                      src={`https://ghchart.rshah.org/F7931A/${site.contact.github.split("/").pop()}`} 
                      alt={`${site.hero.name}'s Github Chart`}
                      className="w-full max-w-5xl mx-auto filter saturate-[1.2] brightness-[1.1] drop-shadow-[0_0_20px_rgba(247,147,26,0.2)]"
                    />
                 </div>
                 
                 {/* Corner Accents */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/40 rounded-tl-xl" />
                 <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/40 rounded-tr-xl" />
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/40 rounded-bl-xl" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/40 rounded-br-xl" />
              </div>

              {/* Metrics Footer */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 pt-12 border-t border-white/5">
                 {[
                   { label: "Activity Index", value: "Verified", color: "text-primary" },
                   { label: "Deploy Target", value: "Mainnet", color: "text-white" },
                   { label: "Uptime", value: "99.99%", color: "text-green-500" },
                   { label: "Logic Flow", value: "Optimized", color: "text-white" }
                 ].map((metric, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">{metric.label}</div>
                      </div>
                      <div className={`text-xl font-mono font-bold ${metric.color}`}>{metric.value}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
