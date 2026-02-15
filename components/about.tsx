import Image from "next/image";
import site from "@/data/site.json";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Building2 } from "lucide-react";

export function About() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={site.profile.headshot.path}
              alt={site.profile.headshot.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {site.profile.location}
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                {site.profile.education}
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                {site.profile.university}
              </div>
            </div>
          </div>

          <p className="text-xl text-foreground font-medium leading-relaxed">
            {site.profile.shortBio}
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {site.profile.longBio}
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
             <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium transition-all hover:bg-muted hover:border-primary/50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

