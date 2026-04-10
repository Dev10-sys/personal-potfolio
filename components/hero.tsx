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
      {/* Background with deeper depth and BTC vibe */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(247,147,26,0.15)_0%,_transparent_70%)] opacity-40" />
        <BitcoinBackground
          className={`h-full w-full opacity-60`}
          density={80}
          speed={0.4}
          network
          coins
          sparkles
          btcSymbols
          nodeCount={40}
          coinCount={15}
          sparkleCount={40}
          symbolCount={25}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col items-center"
          >
            <div className="relative group">
              <motion.h1 
                animate={{ 
                  textShadow: ["0 0 20px rgba(247,147,26,0)", "0 0 20px rgba(247,147,26,0.5)", "0 0 20px rgba(247,147,26,0)"] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="font-black text-7xl md:text-9xl tracking-[0.1em] uppercase text-foreground mb-4 drop-shadow-2xl"
              >
                Dev
              </motion.h1>
              <div className="absolute -inset-x-12 -inset-y-4 bg-primary/20 blur-[80px] -z-10 opacity-50 group-hover:opacity-80 transition-opacity" />
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
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-14 font-medium"
          >
            {site.hero.subline}
          </motion.p>

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

