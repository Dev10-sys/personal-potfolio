"use client";

import site from "@/data/site.json"
import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import dynamic from "next/dynamic"

const Hero3D = dynamic(() => import("./hero-3d").then(mod => mod.Hero3D), { ssr: false })

export function Hero() {
  const intensity = site.hero?.animationIntensity || "medium"
  const config = {
    opacity: intensity === "low" ? "opacity-30" : intensity === "high" ? "opacity-60" : "opacity-50",
    density: intensity === "low" ? 40 : intensity === "high" ? 80 : 60,
    speed: intensity === "low" ? 0.2 : intensity === "high" ? 0.4 : 0.3,
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <Hero3D />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col items-center"
          >
            <div className="relative group perspective-1000">
              <motion.h1 
                animate={{ 
                  textShadow: [
                    "0 0 30px rgba(247,147,26,0)", 
                    "0 0 50px rgba(247,147,26,0.6)", 
                    "0 0 30px rgba(247,147,26,0)"
                  ] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="font-black text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase text-foreground mb-6 drop-shadow-[0_0_25px_rgba(247,147,26,0.3)] filter-none leading-none select-none"
              >
                Dev
              </motion.h1>
              <div className="absolute -inset-x-12 -inset-y-6 bg-primary/30 blur-[80px] -z-10 opacity-40 group-hover:opacity-60 transition-all duration-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-[2px] opacity-30" />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 text-primary font-mono text-xs md:text-sm font-bold tracking-[0.4em] uppercase"
            >
              <span className="w-8 h-px bg-primary/30" />
              {site.hero.tagline.replace("Dev — ", "")}
              <span className="w-8 h-px bg-primary/30" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-10 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/40">
              {site.hero.mainHeading}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 font-medium"
          >
            {site.hero.subline}
          </motion.p>

          <motion.a
            href="/gsoc_acceptance_letter.pdf"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-14 relative group inline-flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-95 transition-all"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
            <div className="relative flex items-center gap-6 bg-black/90 border border-white/20 backdrop-blur-2xl px-10 py-5 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] opacity-20" />
              
              {/* Rotating glowing background for the logo */}
              <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-md animate-pulse"></div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/85/GSoC_logo.svg" 
                  alt="GSoC Logo" 
                  className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-[spin_8s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite]" 
                />
              </div>
              
              <div className="h-12 w-px bg-white/20" />
              
              <div className="flex flex-col text-left relative z-10">
                <span className="text-xs font-mono text-white/70 uppercase tracking-[0.25em] leading-none mb-2 flex items-center gap-2">
                  Official Contributor <ExternalLink className="w-3 h-3 inline-block opacity-70" />
                </span>
                <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 leading-none tracking-wide">
                  GSoC '26 <span className="text-[#F7931A] mx-2">•</span> Sugar Labs
                </span>
              </div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href={site.hero.primaryCta.url}
              className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-black transition-all duration-300 bg-[#F7931A] rounded-2xl hover:bg-[#F7931A]/90 hover:scale-105 active:scale-95 shadow-2xl shadow-[#F7931A]/40"
              aria-label={site.hero.primaryCta.label}
              target={site.hero.primaryCta.url.startsWith("http") ? "_blank" : undefined}
              rel={site.hero.primaryCta.url.startsWith("http") ? "noreferrer" : undefined}
            >
              {site.hero.primaryCta.label}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            {site.hero.secondaryCta?.url && (
              <a
                href={site.hero.secondaryCta.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center px-12 py-5 font-bold transition-all duration-300 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl hover:border-[#F7931A]/50 hover:bg-[#F7931A]/5 hover:scale-105 active:scale-95 text-muted-foreground hover:text-foreground"
              >
                <Github className="mr-3 h-5 w-5" />
                {site.hero.secondaryCta.label}
              </a>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">Continuum</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  )
}

