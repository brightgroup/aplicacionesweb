import HeroSection from "@/app/components/HeroSection";
import EmmaAcronym from "@/app/components/EmmaAcronym";
import MissionSection from "@/app/components/MissionSection";
import CurriculumSection from "@/app/components/CurriculumSection";
import ForWhoSection from "@/app/components/ForWhoSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-dark text-white overflow-x-hidden">
      <HeroSection />
      <EmmaAcronym />
      <MissionSection />
      <CurriculumSection />
      <ForWhoSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
