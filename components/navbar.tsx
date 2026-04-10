"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  showNavLinks?: boolean;
}

export function Navbar({ showNavLinks = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#open-source", label: "Open Source" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-1" : "bg-transparent py-3"
      }`}
      aria-label="Primary"
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="/"
          className="group flex items-center gap-3 font-mono text-xs font-bold transition-all hover:scale-105"
          aria-label="Go to home"
        >
          <svg
            className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[#F7931A] transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12h18M3 12l6-6m-6 6l6 6"
            />
          </svg>
          <span className="text-foreground group-hover:text-[#F7931A] transition-colors font-black tracking-[0.3em] uppercase text-base">
            {"Dev"}
          </span>
        </a>

        {showNavLinks && (
          <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="relative group/link">
                  <Button
                    variant="ghost"
                    className="h-9 text-[11px] uppercase tracking-widest font-black text-muted-foreground hover:text-foreground transition-all px-4"
                  >
                    {link.label}
                  </Button>
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#F7931A] scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-[#F7931A] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </>
        )}
      </nav>

      {/* Mobile Navigation Menu */}
      {showNavLinks && mobileMenuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-md text-foreground hover:text-[#F7931A] hover:bg-[#F7931A]/10 transition-all border border-transparent hover:border-[#F7931A]/30"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
