import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { Layers, Sprout, Bug, Leaf, Mountain } from "lucide-react";

type FilterType = "all" | "crop" | "ecology" | "pathology" | "soil";

const projects = [
  {
    id: 1,
    title: "Integrated Crop Management System",
    description: "Comprehensive study on sustainable crop rotation practices and precision agriculture techniques for maximizing yield while minimizing environmental impact.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    technologies: ["Precision Farming", "GIS Mapping", "Data Analysis", "IoT Sensors"],
    type: "study" as const,
    category: "crop",
    sourceUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Rice Paddy Water Management",
    description: "Research project on optimizing water usage in rice cultivation through alternate wetting and drying techniques.",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&h=600&fit=crop",
    technologies: ["Water Conservation", "Yield Optimization", "Climate Adaptation"],
    type: "project" as const,
    category: "crop",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Forest Ecosystem Dynamics",
    description: "Long-term study of forest succession patterns, biodiversity indices, and carbon sequestration in temperate forests.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    technologies: ["Biodiversity Assessment", "Carbon Modeling", "Remote Sensing"],
    type: "study" as const,
    category: "ecology",
    sourceUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Microbial Ecology of Rhizosphere",
    description: "Investigation of plant-microbe interactions in the root zone and their role in nutrient cycling and plant health.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop",
    technologies: ["Metagenomics", "Soil Biology", "16S rRNA Sequencing"],
    type: "project" as const,
    category: "ecology",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Fungal Disease Management in Wheat",
    description: "Comprehensive study on rust diseases in wheat crops, including identification, lifecycle analysis, and integrated control strategies.",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&h=600&fit=crop",
    technologies: ["Disease Identification", "Fungicide Resistance", "Biological Control"],
    type: "study" as const,
    category: "pathology",
    sourceUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Viral Plant Pathogen Detection",
    description: "Development of rapid diagnostic tools for early detection of viral infections in vegetable crops using molecular techniques.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    technologies: ["PCR Diagnostics", "ELISA", "Field Testing", "Early Warning"],
    type: "project" as const,
    category: "pathology",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 7,
    title: "Soil Health Assessment Framework",
    description: "Multi-parameter soil quality assessment system integrating physical, chemical, and biological indicators for sustainable agriculture.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
    technologies: ["Soil Chemistry", "Nutrient Mapping", "Organic Matter Analysis"],
    type: "study" as const,
    category: "soil",
    sourceUrl: "https://github.com",
  },
  {
    id: 8,
    title: "Biochar Application in Degraded Soils",
    description: "Research on biochar as a soil amendment for improving soil structure, water retention, and carbon storage in degraded agricultural lands.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    technologies: ["Soil Restoration", "Carbon Sequestration", "Waste Management"],
    type: "project" as const,
    category: "soil",
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const filterConfig = {
  all: { icon: Layers, label: "All Research" },
  crop: { icon: Sprout, label: "Crop Management" },
  ecology: { icon: Leaf, label: "Ecology" },
  pathology: { icon: Bug, label: "Plant Pathology" },
  soil: { icon: Mountain, label: "Soil Management" },
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="relative px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            Research Portfolio
          </span>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Featured <span className="gradient-text">Research</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A collection of studies and projects in agricultural sciences, ecology, and environmental management
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {(Object.keys(filterConfig) as FilterType[]).map((key) => {
            const config = filterConfig[key];
            const Icon = config.icon;
            return (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="lg"
                onClick={() => setFilter(key)}
                className={filter === key ? "" : "border-border/50 bg-card/60 hover:bg-card/80 hover:border-primary/50"}
              >
                <Icon className="h-4 w-4" />
                {config.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;