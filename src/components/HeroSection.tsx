import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Leaf, Sprout } from "lucide-react";
import FallingLeaves from "./FallingLeaves";

const GlowName = ({ name }: { name: string }) => {
  return (
    <span
      className="font-sans font-black glow-text name-super"
      data-text={name}
      role="text"
      aria-label={name}
    >
      {name}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      {/* Falling Leaves Effect */}
      <FallingLeaves />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - Green theme */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[hsl(120_50%_30%/0.2)] blur-[120px] animate-pulse-slow" />
        <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-[hsl(160_50%_35%/0.2)] blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(80_40%_40%/0.1)] blur-[100px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
        
        {/* Floating Decorative Leaves */}
        <div className="absolute top-20 left-[15%] text-primary/20 animate-float">
          <Leaf className="h-16 w-16" />
        </div>
        <div className="absolute top-40 right-[20%] text-primary/15 animate-float" style={{ animationDelay: "1s" }}>
          <Sprout className="h-12 w-12" />
        </div>
        <div className="absolute bottom-32 left-[10%] text-primary/10 animate-float" style={{ animationDelay: "2s" }}>
          <Leaf className="h-10 w-10 rotate-45" />
        </div>
        <div className="absolute bottom-48 right-[15%] text-primary/20 animate-float" style={{ animationDelay: "3s" }}>
          <Leaf className="h-14 w-14 -rotate-12" />
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary opacity-0 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
         Department of Plant, Soil and Microbial Sciences
        </div>

        {/* Name Tag */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-3 opacity-0 animate-fade-in-up delay-100">
          <Leaf className="h-5 w-5 text-primary" />
          <span className="font-serif text-lg font-medium text-primary italic">Michigan state univercity </span>
          <span className="h-4 w-px bg-primary/40" />
          <span className="font-mono text-sm text-muted-foreground">@VIKRAM KUMBALA</span>
        </div>

        {/* Main Heading */}
        <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight opacity-0 animate-fade-in-up delay-400 md:text-7xl">
          Hi, I'm{" "}
          <GlowName name="VIKRAM KUMBALA" />
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in-up delay-300 md:text-xl">
          Passionate researcher in <span className="text-primary font-medium">Crop Management</span>, <span className="text-primary font-medium">Ecology</span>, and <span className="text-primary font-medium">Plant Pathology</span>. 
          Climate change has diverse effects on the mountainous regions, necessitating an inclusive approach that considers local socioeconomic circumstances, traditional knowledge, and scientific and technological advancements to develop effectivecopingstra...
        </p>

        {/* CTA Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-400 sm:flex-row">
          <Button variant="hero" size="xl">
            View Research
            <ArrowDown className="h-5 w-5" />
          </Button>
          <Button variant="glass" size="xl">
            <Mail className="h-5 w-5" />
            Collaborate
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/40 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vikram-kumbala-a686a230b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5sOhz5UETPqxVZnuOYy3dw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/40 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="vikramku@msu.edu@gmai.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/40 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-600">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;