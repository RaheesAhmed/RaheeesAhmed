'use client';

// Import custom components
import AiChatbot from "@/components/AiChatbot";
import NewNavigation from "@/components/NewNavigation";
import NewHeroSection from "@/components/NewHeroSection";
import NewAboutSection from "@/components/NewAboutSection";
import NewExpertiseSection from "@/components/NewExpertiseSection";
import NewProjectsSection from "@/components/NewProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* AI Chatbot */}
      <AiChatbot />

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
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
