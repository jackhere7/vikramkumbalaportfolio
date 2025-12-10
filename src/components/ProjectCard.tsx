import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, BookOpen, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: "study" | "project";
  sourceUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  type,
  sourceUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <div
      className="glass-card group opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute left-4 top-4">
          <Badge variant={type === "study" ? "study" : "project"} className="flex items-center gap-1">
            {type === "study" ? (
              <>
                <BookOpen className="h-3 w-3" />
                Study
              </>
            ) : (
              <>
                <Code2 className="h-3 w-3" />
                Project
              </>
            )}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {sourceUrl && (
            <Button variant="glass" size="sm" className="flex-1" asChild>
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Source
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="hero" size="sm" className="flex-1" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
