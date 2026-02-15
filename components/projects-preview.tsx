"use client";

import site from "@/data/site.json";
import { ArrowRight, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectsPreview() {
  const projects = site.projects || [];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Technical Projects</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          High-impact engineering projects across Bitcoin systems and AI infrastructure.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-border/60 bg-card transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 p-2"
          >
            <div className="grid md:grid-cols-5 gap-8 bg-muted/20 rounded-xl p-6 md:p-8">
              <div className="md:col-span-2 space-y-6">
                 <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/5 text-primary border border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                 </div>

                 <div className="flex flex-wrap gap-4">
                    {project.repo && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-border hover:border-primary/50 hover:bg-primary/5"
                      >
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Repository
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Launch
                        </a>
                      </Button>
                    )}
                 </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-primary/80">Key Solutions & Implementations</span>
                <div className="grid gap-3">
                  {project.highlights?.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-3 bg-background/50 p-3 rounded-lg border border-border/40 group-hover:bg-background transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </Card>
        ))}
      </div>
    </div>
  );
}

