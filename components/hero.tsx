"use client";

import { BitcoinBackground } from "./bitcoin-background"
import site from "@/data/site.json"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

export function Hero() {
  const intensity = site.hero?.animationIntensity || "medium"
  const config = {
    opacity: intensity === "low" ? "opacity-30" : intensity === "high" ? "opacity-60" : "opacity-50",
    density: intensity === "low" ? 40 : intensity === "high" ? 80 : 60,
    speed: intensity === "low" ? 0.2 : intensity === "high" ? 0.4 : 0.3,
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with deeper depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-30" />
        <BitcoinBackground
          className={`h-full w-full ${config.opacity}`}
          density={config.density}
          speed={config.speed}
          network
          coins
          sparkles
          btcSymbols
          nodeCount={32}
          coinCount={12}
          sparkleCount={30}
          symbolCount={20}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md"
          >
            <span className="font-mono text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-primary">
              {site.hero.role}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            <span className="relative inline-block">
              {site.hero.name}
              <span className="absolute -inset-2 bg-primary/20 blur-3xl -z-10 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12 font-medium"
          >
            {site.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href={site.hero.primaryCta.url}
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-primary-foreground transition-all duration-200 bg-primary rounded-2xl hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
              aria-label={site.hero.primaryCta.label}
              target={site.hero.primaryCta.url.startsWith("http") ? "_blank" : undefined}
              rel={site.hero.primaryCta.url.startsWith("http") ? "noreferrer" : undefined}
            >
              {site.hero.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            {site.hero.secondaryCta?.url && (
              <a
                href={site.hero.secondaryCta.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 font-bold transition-all duration-200 border-2 border-border bg-background rounded-2xl hover:border-primary/50 hover:bg-primary/5 hover:scale-105 active:scale-95"
              >
                <Github className="mr-2 h-5 w-5" />
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

