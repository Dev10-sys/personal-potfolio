"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  showNavLinks?: boolean;
}

export function Navbar({ showNavLinks = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#open-source", label: "Open Source" },
    { href: "#extended", label: "Capabilities" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-4 px-4 ${
        scrolled ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <nav 
        className={`mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto ${
          scrolled 
            ? "max-w-5xl bg-black/40 backdrop-blur-2xl border border-primary/20 rounded-[2rem] px-8 py-3 shadow-[0_0_30px_rgba(247,147,26,0.05)]" 
            : "container bg-transparent px-6 py-4 border-b border-transparent"
        }`}
      >
        <a
          href="/"
          className="group flex items-center gap-3 font-mono transition-all hover:scale-105"
          aria-label="Go to home"
        >
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-all">
            <Terminal className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-bold text-xs tracking-tighter">&gt;_</span>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-foreground group-hover:text-primary transition-colors font-black tracking-[0.4em] uppercase text-xl">
              Dev
            </span>
          </div>
        </a>

        {showNavLinks && (
          <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="relative group/link">
                  <Button
                    variant="ghost"
                    className="h-10 text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground hover:text-foreground transition-all px-5"
                  >
                    {link.label}
                  </Button>
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left rounded-full shadow-[0_0_10px_rgba(247,147,26,0.5)]" 
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-primary transition-colors bg-primary/5 border border-primary/10 rounded-xl h-10 w-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </>
        )}
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {showNavLinks && mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-auto max-w-sm rounded-[2rem] border border-primary/20 bg-black/90 backdrop-blur-3xl overflow-hidden p-4 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-6 py-4 rounded-2xl text-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20 group"
                >
                  <span className="text-sm font-bold uppercase tracking-widest">{link.label}</span>
                  <Terminal className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

