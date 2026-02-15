"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, CheckCircle2, Mail, Github } from "lucide-react";
import site from "@/data/site.json";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xpsoojww");
  const email = site.contact.email;
  const displayEmail = email.replace("mailto:", "");

  if (state.succeeded) {
    return (
      <Card className="border-green-500/20 bg-green-500/5 max-w-2xl mx-auto rounded-[2rem] p-8">
        <CardContent className="pt-6 flex flex-col items-center text-center space-y-6">
          <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Transmission Successful</h3>
            <p className="text-muted-foreground text-lg">Your data has been received. Expect a response on the grid soon.</p>
          </div>
          <Button variant="outline" className="rounded-xl px-8" onClick={() => window.location.reload()}>Send another message</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
      <div className="lg:col-span-2 space-y-10">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold tracking-tight leading-tight">
            Initiate <span className="text-primary italic">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Scalable collaboration or deep technical audits. Reach out via the secure channel.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="group flex items-center gap-5 p-6 rounded-3xl border border-border/60 bg-card/40 hover:border-primary/40 transition-all backdrop-blur-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Direct Index</div>
              <div className="text-lg font-bold truncate max-w-[200px]">{displayEmail}</div>
            </div>
          </div>
          
          <div className="group flex items-center gap-5 p-6 rounded-3xl border border-border/60 bg-card/40 hover:border-primary/40 transition-all backdrop-blur-sm">
            <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center text-foreground transition-all group-hover:bg-foreground group-hover:text-background">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Source Control</div>
              <div className="text-lg font-bold">{site.contact.github.split("/").pop()}</div>
            </div>
          </div>
        </div>
      </div>

      <Card className="lg:col-span-3 border-border/80 bg-card/40 backdrop-blur-xl shadow-2xl shadow-primary/5 rounded-[2.5rem] overflow-hidden">
        <div className="h-2 bg-primary/20 w-full" />
        <CardHeader className="p-10 pb-4">
          <CardTitle className="text-2xl">Secure Messaging Terminal</CardTitle>
          <CardDescription className="text-base">Metadata is encrypted. Expected latency: &lt; 24h.</CardDescription>
        </CardHeader>
        <CardContent className="p-10 pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Email Identity</label>
              <Input
                id="email"
                type="email" 
                name="email"
                placeholder="operator@nexus.io"
                required
                className="h-14 px-6 rounded-2xl bg-muted/30 border-border/80 focus:border-primary/50 text-base"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-destructive" />
            </div>
            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80 ml-1">Transmission Data</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Define requirements or specify inquiry parameters..."
                required
                rows={6}
                className="p-6 rounded-2xl bg-muted/30 border-border/80 focus:border-primary/50 text-base"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-destructive" />
            </div>
            <Button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg h-16 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            >
              {state.submitting ? "Processing..." : (
                <div className="flex items-center gap-3">
                  Execute Send
                  <Send className="h-5 w-5" />
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
