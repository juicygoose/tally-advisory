import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <img src="/Logotype_Tally.webp" alt="Tally Advisory" className="nav-logo-img" />
      </a>
      <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
        <li><a href="#about" onClick={closeMobile}>À propos</a></li>
        <li><a href="#services" onClick={closeMobile}>Offres</a></li>
        <li><a href="#values" onClick={closeMobile}>Valeurs</a></li>
        <li><a href="#faq" onClick={closeMobile}>FAQ</a></li>
        <li><a href="#contact" className="nav-cta" onClick={closeMobile}>Contact</a></li>
      </ul>
      <div
        className={`nav-mobile-toggle${mobileOpen ? ' active' : ''}`}
        onClick={toggleMobile}
      >
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
