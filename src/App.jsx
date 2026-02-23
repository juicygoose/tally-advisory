import './App.css';
import useReveal from './hooks/useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import Values from './components/Values';
import Process from './components/Process';
import Trust from './components/Trust';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Partners />
      <Services />
      <Values />
      <Process />
      <Trust />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
