'use client';

// Import custom components

import NewNavigation from "@/components/NewNavigation";
import NewHeroSection from "@/components/NewHeroSection";
import NewAboutSection from "@/components/NewAboutSection";
import NewExpertiseSection from "@/components/NewExpertiseSection";
import NewProjectsSection from "@/components/NewProjectsSection";
import NewContactSection from "@/components/NewContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Navigation */}
      <NewNavigation />

      {/* Hero Section */}
      <NewHeroSection />

      {/* About Me Section */}
      <NewAboutSection />

      {/* Expertise Section */}
      <NewExpertiseSection />

      {/* Projects Section */}
      <NewProjectsSection />

      {/* Contact Section */}
      <NewContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
