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
    <main className="bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="about" className="w-full px-4 py-16 md:py-24 border-t border-border/40">
        <About />
      </section>

      <section id="skills" className="w-full px-4 py-16 md:py-24 bg-muted/20 border-t border-border/40">
        <Skills />
      </section>

      <section id="projects" className="w-full px-4 py-16 md:py-24 border-t border-border/40">
        <ProjectsPreview />
      </section>

      <section id="open-source" className="w-full bg-muted/10 border-t border-border/40">
        <OpenSourcePreview />
      </section>

      <section id="contact" className="w-full px-4 py-16 md:py-24 border-t border-border/40 bg-background">
        <div className="space-y-24">
          <ContactForm />
          <ImportantLinks />
        </div>
      </section>

      <footer className="border-t border-border/60 py-12 text-center text-sm text-muted-foreground bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2 text-foreground font-medium italic tracking-wide">
            "Engineered for the decentralized future."
          </p>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} dev10.sys • Architecture, Systems & Open Source
          </p>
        </div>
      </footer>
    </main>
  );
}


