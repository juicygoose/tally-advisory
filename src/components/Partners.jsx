export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-inner">
        <div className="partners-header">
          <div className="section-label reveal">L&rsquo;équipe</div>
          <h2 className="section-title reveal reveal-delay-1">
            Des partenaires de <em>confiance</em>
          </h2>
          <p className="reveal reveal-delay-2">
            Nous avons le privilège de collaborer avec des partenaires de confiance, experts dans les domaines de l&rsquo;audit, du conseil stratégique et de l&rsquo;accompagnement. Ensemble, nous vous offrons des solutions personnalisées et innovantes pour répondre à vos besoins.
          </p>
        </div>
        <div className="partners-grid">
          <div className="partner-card reveal">
            <img src="/luc.webp" alt="Luc" className="partner-photo" />
            <div className="partner-info">
              <h3>Luc</h3>
              <p>Expert-Comptable — 20 ans d&rsquo;expérience en cabinet et 15 ans en tant que Directeur financier.</p>
            </div>
          </div>
          <div className="partner-card reveal reveal-delay-1">
            <img src="/pierre.webp" alt="Pierre" className="partner-photo" />
            <div className="partner-info">
              <h3>Pierre</h3>
              <p>Expert-Comptable — Directeur financier depuis 4 années dans une start-up tech.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
