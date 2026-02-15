"use client";

import site from "@/data/site.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skills = site.profile.skills;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Technical Skills</h2>
        <p className="text-muted-foreground text-lg">
          Structured engineering expertise across systems and software.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <Card
            key={category}
            className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium border border-border transition-colors hover:border-primary/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
