export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-inner">
        <div className="process-header">
          <div className="section-label reveal">Notre approche</div>
          <h2 className="section-title reveal reveal-delay-1">
            Une approche <em>personnalisée</em> et pragmatique
          </h2>
          <p className="reveal reveal-delay-2">
            Toujours à la pointe des réglementations, avec une vision prospective des tendances de votre secteur.
          </p>
        </div>
        <div className="process-timeline">
          {/* Step 1 */}
          <div className="process-step reveal">
            <div className="process-step-number"><span>01</span></div>
            <div>
              <h3 className="process-step-title">Identification</h3>
              <p className="process-step-desc">
                Identification de vos enjeux permettant d&rsquo;anticiper vos challenges futurs et de comprendre votre environnement.
              </p>
            </div>
            <svg className="process-step-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="process-step reveal reveal-delay-1">
            <div className="process-step-number"><span>02</span></div>
            <div>
              <h3 className="process-step-title">Analyse</h3>
              <p className="process-step-desc">
                Analyse des processus, procédures, systèmes d&rsquo;information et dispositifs de contrôle interne pour vous guider vers une gestion optimale.
              </p>
            </div>
            <svg className="process-step-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="process-step reveal reveal-delay-2">
            <div className="process-step-number"><span>03</span></div>
            <div>
              <h3 className="process-step-title">Accompagnement</h3>
              <p className="process-step-desc">
                Un accompagnement sur-mesure grâce à une collaboration étroite avec les instances et un suivi continu de votre performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
