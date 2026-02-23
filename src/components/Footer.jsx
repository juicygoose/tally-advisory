export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/Logotype_Tally.webp" alt="Tally Advisory" className="footer-logo-img" />
        </div>
        <ul className="footer-links">
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <div className="footer-copy">&copy; 2026 Tally Advisory. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
