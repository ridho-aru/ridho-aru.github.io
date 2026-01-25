import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <PortfolioSection />
      <Contact />
    </>
  );
}
