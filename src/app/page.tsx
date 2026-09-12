import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <Marquee />
      <Projects />
      <Skills />
      <Experience />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
