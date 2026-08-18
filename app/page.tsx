import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Education from "@/app/components/Education";
import ExperienceLayer from "@/app/components/ExperienceLayer";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import InteractionLayer from "@/app/components/InteractionLayer";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import SecurityWork from "@/app/components/SecurityWork";
import SignalStrip from "@/app/components/SignalStrip";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <>
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
