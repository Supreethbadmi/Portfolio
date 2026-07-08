import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HireMe from "@/components/HireMe";
import Projects from "@/components/Projects";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-[#121212] text-white min-h-screen">
      {/* Scrolly Hero Section */}
      <ScrollyCanvas />

      {/* Main Portfolio Content */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <HireMe />
      <Contact />
    </main>
  );
}