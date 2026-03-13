import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PortfolioSection } from "./components/PortfolioSection";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for fade-in sections
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar scrolled={navScrolled} />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
