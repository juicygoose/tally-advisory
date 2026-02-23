export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="section-label reveal">Nos offres</div>
        <h2 className="section-title reveal reveal-delay-1">
          Découvrez nos offres <em>pensées</em><br />pour vous
        </h2>
        <p className="services-subtitle reveal reveal-delay-2">
          Allier transparence et objectifs communs pour votre entreprise de demain.
        </p>
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card reveal">
            <div className="service-number">01</div>
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="6" y="6" width="36" height="36" rx="2" />
              <path d="M6 18h36M18 18v24" />
              <path d="M24 28h12M24 34h8" />
            </svg>
            <h3 className="service-title">Audits contractuels</h3>
            <p className="service-desc">
              Nos experts vous accompagnent dans le respect des exigences des audits, en adoptant une démarche rigoureuse et adaptée à vos besoins spécifiques.
            </p>
            <ul className="service-items">
              <li>Commissariat à la transformation</li>
              <li>Commissariat à la fusion</li>
              <li>Commissariat aux apports</li>
              <li>Opérations sur le capital</li>
              <li>Audit de procédures internes</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card reveal reveal-delay-1">
            <div className="service-number">02</div>
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="24" cy="24" r="18" />
              <path d="M24 14v10l7 7" />
              <path d="M16 8l-4-4M32 8l4-4" />
            </svg>
            <h3 className="service-title">Commissariat aux Comptes</h3>
            <p className="service-desc">
              Notre service se concentre sur l&rsquo;audit légal, essentiel pour valider la fiabilité de vos informations financières.
            </p>
            <ul className="service-items">
              <li>Certification des comptes annuels</li>
              <li>Certification des comptes consolidés</li>
              <li>Certification des informations en matière de durabilité</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card reveal reveal-delay-2">
            <div className="service-number">03</div>
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 42L18 26l8 8L42 14" />
              <path d="M32 14h10v10" />
              <path d="M6 42h36" strokeDasharray="4 4" />
            </svg>
            <h3 className="service-title">Conseil financier &amp; Accompagnement</h3>
            <p className="service-desc">
              Transformer votre entreprise en alignant équipes, processus et outils autour d&rsquo;objectifs communs.
            </p>
            <ul className="service-items">
              <li>Pilotage de la performance</li>
              <li>Mise en place de reporting</li>
              <li>Diagnostic de l&rsquo;organisation comptable</li>
              <li>Révision &amp; établissement des comptes annuels</li>
              <li>Déclarations fiscales professionnelles</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="service-card reveal reveal-delay-3">
            <div className="service-number">04</div>
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="24" cy="24" r="18" />
              <path d="M24 10c-8 4-8 14 0 18s8-14 0-18z" />
              <path d="M10 24h28" strokeDasharray="2 3" />
              <path d="M18 12v24M30 12v24" strokeDasharray="2 3" opacity="0.5" />
            </svg>
            <h3 className="service-title">Performance durable</h3>
            <p className="service-desc">
              Notre offre ESG est conçue pour naviguer les défis de la CSRD et transformer les obligations de reporting en opportunité de développement durable.
            </p>
            <ul className="service-items">
              <li>Audit de conformité CSRD</li>
              <li>Analyse de double matérialité (ESRS)</li>
              <li>Gap Analysis au niveau consolidé</li>
              <li>Stratégie intégrée de développement durable</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
