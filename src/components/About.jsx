export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-visual reveal">
          <div className="about-visual-frame">
            <img src="/amele.jpg" alt="Amèle Faulat — Fondatrice de Tally Advisory" className="about-photo" />
          </div>
          <div className="about-visual-badge">Expert-Comptable<br />Diplômée</div>
        </div>
        <div className="about-text">
          <div className="section-label reveal">À propos</div>
          <h2 className="section-title reveal reveal-delay-1">
            L&rsquo;excellence du conseil financier et de la <em>stratégie opérationnelle</em>
          </h2>
          <p className="reveal reveal-delay-2">
            Experte-comptable et commissaire aux comptes, avec dix ans d&rsquo;expérience dans l&rsquo;audit et le conseil financier. J&rsquo;ai débuté ma carrière chez Cifralex en 2013 avant de rejoindre Mazars, où je suis devenue Senior Manager en 2023.
          </p>
          <p className="reveal reveal-delay-3">
            En 2024, j&rsquo;ai fondé Tally, guidée par une vision audacieuse de créer un écosystème engagé en audit et conseil financier, mettant l&rsquo;humain au cœur de toutes les actions. Ma mission : guider les entreprises à travers l&rsquo;écosystème financier, en intégrant profondément les principes ESG au cœur de leur stratégie.
          </p>
          <div className="about-signature reveal reveal-delay-4">
            <div className="about-signature-name">Amèle Faulat</div>
            <div className="about-signature-role">Fondatrice · Expert-Comptable · Commissaire aux Comptes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
