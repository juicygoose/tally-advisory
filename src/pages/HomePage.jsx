import Hero from '../components/Hero';
import Tagline from '../components/Tagline';
import About from '../components/About';
import Trust from '../components/Trust';
import Services from '../components/Services';
import Values from '../components/Values';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tagline />
      <About />
      <Trust />
      <Services />
      <Values />
      <Faq />
      <Contact />
    </>
  );
}
