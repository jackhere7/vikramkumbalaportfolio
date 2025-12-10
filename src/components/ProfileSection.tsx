import { MapPin, Calendar, Briefcase, GraduationCap, Leaf, Microscope, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProfileSection = () => {
  return (
    <section className="relative px-6 py-20">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Profile Image with Shine Effect */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative animate-float-bob">
              {/* Rotating Ring */}
              <div className="absolute -inset-8 rounded-full animate-ring-rotate">
                <div className="h-full w-full rounded-full border border-dashed border-primary/30" />
                {/* Orbiting Leaves */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Leaf className="h-4 w-4 text-primary" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Leaf className="h-4 w-4 text-primary rotate-180" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Leaf className="h-4 w-4 text-primary -rotate-90" />
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  <Leaf className="h-4 w-4 text-primary rotate-90" />
                </div>
              </div>

              {/* Pulsing Rings */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-primary/40 animate-ring-pulse" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 animate-ring-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute -inset-2 rounded-full border border-primary/30" />
              
              {/* Main Image Container */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/40 shadow-2xl shadow-primary/30">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQE_jN1FgZIfpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718269359105?e=1767225600&v=beta&t=kf9GVVN0-yhiONOLVvq9F1zfXI3E3bhTjAfw4jVq61w"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
                
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 animate-profile-shine" />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-primary/10" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <Badge variant="default" className="px-4 py-2 text-sm shadow-lg shadow-primary/30 border border-primary/50">
                  <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary-foreground" />
                  VIKRAM KUMBALA
                </Badge>
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-2 -right-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Microscope className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <FlaskConical className="h-4 w-4 text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center lg:text-left">
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
              <Leaf className="h-4 w-4" />
              About Me
            </span>
            
            <h2 className="mb-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
              ROLE OF TRADITIONAL ECOLOGICAL KNOWLEDGE <span className="gradient-text">IN SHAPING CLIMATE RESILIENT VILLAGES In THE HIMALAYA </span> & 
              <br />
              <span className="text-muted-foreground">Scientist</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Passionate agricultural researcher with expertise in crop management, 
              ecology, and plant pathology. Dedicated to developing sustainable solutions 
              for modern agriculture and environmental conservation through innovative research.
            </p>

            {/* Quick Stats */}
            <div className="mb-8 flex flex-wrap justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground glass-card px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Research Institute</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground glass-card px-4 py-2 rounded-full">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>2+ Years Research</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground glass-card px-4 py-2 rounded-full">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>MASTERS Candidate</span>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {["Crop Management", "Ecology", "Microbiology", "Plant Pathology", "Soil Science", "PLANT PATHOLOGY"].map((skill) => (
                <Badge key={skill} variant="tech" className="px-4 py-2 border border-primary/20">
                  <Leaf className="h-3 w-3 mr-1 text-primary" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;