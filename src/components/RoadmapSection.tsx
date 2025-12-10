import { CheckCircle2, Circle, Sprout, Leaf, Bug, Mountain, TreeDeciduous, FlaskConical, GraduationCap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const roadmapItems = [
  {
    year: "2020",
    title: "Foundation",
    subtitle: "Agricultural Sciences Basics",
    description: "Started my journey in agricultural research with fundamentals of plant biology, soil science, and basic crop management principles.",
    icon: Sprout,
    status: "completed",
    highlights: ["Plant Physiology", "Basic Soil Science", "Crop Biology"],
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
  },
  {
    year: "2021",
    title: "Principal Investigator",
    subtitle: "Research Leadership",
    description: "Appointed as Principal Investigator leading independent research projects in sustainable agriculture and ecosystem management.",
    icon: GraduationCap,
    status: "completed",
    highlights: ["Research Leadership", "Grant Writing", "Team Management"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    year: "2021",
    title: "Ecology Studies",
    subtitle: "Ecosystem Dynamics",
    description: "Deep exploration of ecological principles, biodiversity assessment, and understanding of ecosystem interactions and environmental conservation.",
    icon: TreeDeciduous,
    status: "completed",
    highlights: ["Biodiversity Studies", "Ecosystem Analysis", "Conservation Biology"],
    image: "https://images.unsplash.com/photo-1518173946687-a4c036bc1e3a?w=400&h=300&fit=crop",
  },
  {
    year: "2022",
    title: "Plant Pathology",
    subtitle: "Disease Management",
    description: "Intensive study of plant diseases, pathogen identification, and development of integrated pest management strategies.",
    icon: Bug,
    status: "completed",
    highlights: ["Disease Diagnostics", "IPM Strategies", "Biological Control"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
  },
  {
    year: "2023",
    title: "Soil Management",
    subtitle: "Sustainable Practices",
    description: "Research on soil health, nutrient cycling, and sustainable soil management practices for improved agricultural productivity.",
    icon: Mountain,
    status: "completed",
    highlights: ["Soil Health", "Nutrient Management", "Organic Farming"],
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
  },
  {
    year: "2024",
    title: "Microbial Ecology",
    subtitle: "Rhizosphere Research",
    description: "Advanced research on plant-microbe interactions, beneficial microorganisms, and their applications in sustainable agriculture.",
    icon: FlaskConical,
    status: "current",
    highlights: ["Microbiome Studies", "Biocontrol Agents", "Symbiotic Relations"],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
  },
  {
    year: "2025",
    title: "Future Goals",
    subtitle: "Integrated Research",
    description: "Combining all disciplines for comprehensive sustainable agriculture solutions, climate-smart farming, and food security research.",
    icon: Leaf,
    status: "upcoming",
    highlights: ["Climate Adaptation", "Smart Agriculture", "Food Security"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
  },
];

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  tx: number;
}

interface LeafParticle {
  id: number;
  x: number;
  delay: number;
  rotation: number;
}

const SparkEffect = ({ active }: { active: boolean }) => {
  const [particles, setParticles] = useState<SparkParticle[]>([]);

  useEffect(() => {
    if (active) {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        tx: (Math.random() - 0.5) * 60,
      }));
      setParticles(newParticles);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="spark-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            '--tx': `${p.tx}px`,
            animationDelay: `${p.id * 0.1}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const LeafEffect = ({ active }: { active: boolean }) => {
  const [leaves, setLeaves] = useState<LeafParticle[]>([]);

  useEffect(() => {
    if (active) {
      const newLeaves = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        delay: i * 0.3,
        rotation: Math.random() * 360,
      }));
      setLeaves(newLeaves);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf-particle text-primary"
          style={{
            left: `${leaf.x}%`,
            bottom: '10%',
            animationDelay: `${leaf.delay}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <Leaf className="h-4 w-4" />
        </div>
      ))}
    </div>
  );
};

const RoadmapSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative px-6 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            Research Journey
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Learning <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My academic and research journey through agricultural sciences, from foundational studies to specialized research
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with shimmer */}
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-muted md:left-1/2 md:-translate-x-1/2 shimmer-effect" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const isVisible = visibleItems.has(index);
              const isFeatured = 'featured' in item && item.featured;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-8 ${isVisible ? 'animate-spark-entry' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Year Badge - Center */}
                  <div className={`absolute left-8 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                    isFeatured
                      ? "border-primary bg-primary/30 shadow-lg shadow-primary/50 animate-spark-glow"
                      : item.status === "current" 
                      ? "border-primary bg-primary/20 shadow-lg shadow-primary/30" 
                      : item.status === "upcoming"
                      ? "border-muted bg-muted/50"
                      : "border-primary bg-background shadow-lg shadow-primary/20"
                  } md:left-1/2`}>
                    {isFeatured && <SparkEffect active={isVisible} />}
                    <span className={`font-mono text-sm font-bold ${
                      item.status === "upcoming" ? "text-muted-foreground" : "text-primary"
                    }`}>{item.year}</span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 w-full md:ml-0 md:w-[calc(50%-4rem)] ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className={`glass-card group overflow-hidden transition-all duration-500 ${
                      isFeatured 
                        ? "border-primary/50 animate-spark-glow" 
                        : item.status === "upcoming" 
                        ? "opacity-60" 
                        : "hover:border-primary/50"
                    }`}>
                      {isFeatured && <LeafEffect active={isVisible} />}
                      
                      {/* Featured Badge */}
                      {isFeatured && (
                        <div className="absolute top-3 right-3 z-20">
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                            <Sprout className="h-3 w-3" />
                            Key Milestone
                          </span>
                        </div>
                      )}

                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`h-full w-full object-cover transition-transform duration-500 ${
                            item.status !== "upcoming" ? "group-hover:scale-110" : ""
                          }`}
                        />
                        <div className={`absolute inset-0 ${
                          isFeatured 
                            ? "bg-gradient-to-t from-card via-card/60 to-primary/10" 
                            : "bg-gradient-to-t from-card via-card/40 to-transparent"
                        }`} />
                        {/* Status Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                            item.status === "current"
                              ? "bg-primary text-primary-foreground"
                              : item.status === "upcoming"
                              ? "bg-muted text-muted-foreground"
                              : "bg-secondary/80 text-primary"
                          }`}>
                            {item.status === "completed" ? (
                              <CheckCircle2 className="h-3 w-3" />
                            ) : (
                              <Circle className="h-3 w-3" />
                            )}
                            {item.status === "current" ? "In Progress" : item.status === "upcoming" ? "Planned" : "Completed"}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Status & Icon */}
                        <div className={`mb-4 flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                            isFeatured
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                              : item.status === "current" 
                              ? "bg-primary text-primary-foreground" 
                              : item.status === "upcoming"
                              ? "bg-muted text-muted-foreground"
                              : "bg-secondary text-primary"
                          }`}>
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div className={index % 2 === 0 ? "md:text-right" : ""}>
                            <h3 className={`font-serif text-xl font-bold ${
                              isFeatured ? "text-primary" : "text-foreground"
                            }`}>
                              {item.title}
                            </h3>
                            <p className={`text-sm ${item.status === "upcoming" ? "text-muted-foreground" : "text-primary"}`}>
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mb-4 text-muted-foreground">{item.description}</p>

                        {/* Highlights */}
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
                                isFeatured 
                                  ? "bg-primary/20 text-primary border border-primary/30" 
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {item.status === "completed" ? (
                                <CheckCircle2 className={`h-3 w-3 ${isFeatured ? "text-primary" : "text-primary"}`} />
                              ) : item.status === "current" ? (
                                <Circle className="h-3 w-3 text-primary animate-pulse" />
                              ) : (
                                <Circle className="h-3 w-3 text-muted-foreground" />
                              )}
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternate side */}
                  <div className="hidden w-[calc(50%-4rem)] md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;