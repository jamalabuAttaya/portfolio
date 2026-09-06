"use client";

import About from "@/app/components/About";
import Certificates from "@/app/components/Certificates";
import Contact from "@/app/components/Contact";
import Education from "@/app/components/Education";
import ExperienceLayer from "@/app/components/ExperienceLayer";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import InteractionLayer from "@/app/components/InteractionLayer";
import { LanguageProvider } from "@/app/components/LanguageProvider";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import SecurityWork from "@/app/components/SecurityWork";
import SignalStrip from "@/app/components/SignalStrip";
import Skills from "@/app/components/Skills";
import type { Locale } from "@/app/i18n/content";

export default function PortfolioPage({ initialLocale }: { initialLocale: Locale }) {
  return (
    <LanguageProvider initialLocale={initialLocale}>
      <ExperienceLayer />
      <InteractionLayer />
      <Navbar />
      <main>
        <Hero />
        <SignalStrip />
        <About />
        <SecurityWork />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
