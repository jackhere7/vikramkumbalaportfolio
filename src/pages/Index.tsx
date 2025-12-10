import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import RoadmapSection from "@/components/RoadmapSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProfileSection />
      <RoadmapSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default Index;
