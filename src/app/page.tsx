"use client";
import Navbar from "../components/navigation/Navbar";
import Hero from "../components/hero/Hero";
import AppsShowcase from "../components/games/AppsShowcase";
import StatsSection from "../components/stats/StatsSection";
import AboutSection from "../components/about/AboutSection";

import FeaturesSection from "../components/features/FeaturesSection";
import ContactCTA from "../components/contact/ContactCTA";
import FaqSection from "../components/faq/FaqSection";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import ScreenshotsCarousel from "../components/screenshots/ScreenshotsCarousel";
import LoadingScreen from "../components/loader/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <Navbar />
      
  <Hero />
  <AppsShowcase />
  <ScreenshotsCarousel />
  <StatsSection />
  <FeaturesSection />
  <AboutSection />
  <FaqSection />
  <TestimonialsSection />
  
  <ContactCTA />

    </>
  );
}