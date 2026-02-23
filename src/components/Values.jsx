export default function Values() {
  return (
    <section className="values" id="values">
      <div className="values-inner">
        <div className="values-header">
          <div className="values-header-text">
            <div className="section-label reveal">Nos valeurs</div>
            <h2 className="section-title reveal reveal-delay-1">
              Les principes qui <em>guident</em> chaque mission
            </h2>
            <p className="reveal reveal-delay-2">
              Notre engagement va au-delà des chiffres. Chaque collaboration repose sur des convictions fortes qui orientent notre approche.
            </p>
          </div>
          <div className="values-decorative reveal">&amp;</div>
        </div>
        <div className="values-grid">
          {/* Intégrité */}
          <div className="value-card reveal">
            <div className="value-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="value-name">L&rsquo;Intégrité</h3>
            <p className="value-desc">
              Nous travaillons avec vous en collaboration étroite, guidés par nos valeurs d&rsquo;intégrité et de transparence pour assurer un succès mutuel.
            </p>
          </div>

          {/* Excellence */}
          <div className="value-card reveal reveal-delay-1">
            <div className="value-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="value-name">L&rsquo;Excellence</h3>
            <p className="value-desc">
              Vous bénéficierez d&rsquo;un conseil expert : nous recherchons constamment à dépasser les standards de qualité dans tous les aspects de notre travail.
            </p>
          </div>

          {/* Agilité */}
          <div className="value-card reveal reveal-delay-2">
            <div className="value-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="value-name">L&rsquo;Agilité</h3>
            <p className="value-desc">
              Notre approche pragmatique et flexible nous permet de fournir des résultats concrets, en utilisant les outils et les connaissances nécessaires pour réussir dans un environnement en constante évolution.
            </p>
          </div>

          {/* Durabilité */}
          <div className="value-card reveal reveal-delay-3">
            <div className="value-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c4-4 8-7 8-12a8 8 0 10-16 0c0 5 4 8 8 12z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="value-name">La Durabilité</h3>
            <p className="value-desc">
              Nous veillons à ce que votre environnement réponde aux normes de conformité et soit équipé pour une croissance durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
