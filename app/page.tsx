import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-32">
        <HeroSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}