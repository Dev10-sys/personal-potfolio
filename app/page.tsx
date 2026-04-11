import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { ProjectsPreview } from "@/components/projects-preview";
import { OpenSourcePreview } from "@/components/open-source-preview";
import { ImportantLinks } from "@/components/links";
import { ContactForm } from "@/components/contact-form";

export default function Page() {
  return (
    <main className="bg-transparent text-foreground selection:bg-primary/30 selection:text-primary-foreground min-h-screen relative">
      {/* Global Bitcoin Gradient Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#F7931A]/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#F7931A]/[0.03] blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-[#F7931A]/[0.02] blur-[150px] rounded-full" />
      </div>

      <Navbar />
      <Hero />
      
      <section id="about" className="w-full px-4 py-16 md:py-24 border-t border-primary/20 relative bg-transparent">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#F7931A]/[0.02] blur-[120px] -z-10 pointer-events-none" />
        <About />
      </section>

      <section id="skills" className="w-full px-4 py-16 md:py-24 bg-transparent border-t border-primary/20 relative">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7931A]/[0.01] to-transparent -z-10 pointer-events-none" />
        <Skills />
      </section>

      <section id="projects" className="w-full px-4 py-16 md:py-24 border-t border-primary/20 relative bg-transparent">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-[#F7931A]/[0.03] blur-[100px] -z-10 pointer-events-none" />
        <ProjectsPreview />
      </section>

      <section id="open-source" className="w-full bg-transparent border-t border-primary/20 relative">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[#F7931A]/[0.01] blur-[150px] -z-10 pointer-events-none" />
        <OpenSourcePreview />
      </section>

      <section id="contact" className="w-full px-4 py-16 md:py-24 border-t border-primary/20 bg-transparent relative">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-[#F7931A]/5 to-transparent -z-10 pointer-events-none opacity-20" />
        <div className="space-y-24">
          <ContactForm />
          <ImportantLinks />
        </div>
      </section>

      <footer className="relative border-t border-border/40 py-24 overflow-hidden bg-muted/5">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
          {/* Availability Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md shadow-lg shadow-primary/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold tracking-wide text-foreground/80">Available for internships & opportunities</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xl font-medium text-foreground italic">
              "Currently working on systems-level contributions and infrastructure reliability."
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto" />
            <p className="text-sm font-mono uppercase tracking-[0.5em] text-primary/40 animate-pulse">
              Currently building. Always learning.
            </p>
            <p className="text-2xl font-black tracking-tighter uppercase text-muted-foreground/40">
              Built by Dev
            </p>
          </div>

          <div className="pt-12 border-t border-border/40 space-y-2">
            <p className="text-lg font-bold tracking-tight text-foreground/60">
              Systems. Security. Infrastructure. <span className="text-[#f7931a] opacity-80">Built with intent.</span>
            </p>
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/40">
              © {new Date().getFullYear()} / Dev10-sys
            </p>
          </div>
        </div>

        {/* Micro Branding Watermark */}
        <div className="absolute bottom-8 right-8 pointer-events-none opacity-[0.03] blur-[1px]">
          <span className="text-9xl font-black tracking-tighter select-none">DEV</span>
        </div>
      </footer>
    </main>
  );
}


