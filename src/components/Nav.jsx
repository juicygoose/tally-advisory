import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

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
    <nav className={`nav${scrolled ? ' scrolled' : ''}${!isHome ? ' nav--light' : ''}`}>
      <Link to="/" className="nav-logo" onClick={closeMobile}>
        <img src="/Logotype_Tally.webp" alt="Tally Advisory" className="nav-logo-img" />
      </Link>
      <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
        <li><Link to="/a-propos" onClick={closeMobile}>À propos</Link></li>
        <li><a href="/#services" onClick={closeMobile}>Offres</a></li>
        <li><a href="/#values" onClick={closeMobile}>Valeurs</a></li>
        <li><a href="/#faq" onClick={closeMobile}>FAQ</a></li>
        <li><a href="/#contact" className="nav-cta" onClick={closeMobile}>Contact</a></li>
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
