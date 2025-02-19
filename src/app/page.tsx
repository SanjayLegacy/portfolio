import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
