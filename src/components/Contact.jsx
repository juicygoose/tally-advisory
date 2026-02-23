export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          <div>
            <div className="section-label reveal" style={{ color: 'var(--gold)' }}>Contact</div>
            <h2 className="section-title reveal reveal-delay-1">
              Votre projet mérite <em>attention</em>
            </h2>
            <p className="contact-text reveal reveal-delay-2">
              Chez Tally, nous comprenons que chaque projet est unique, c&rsquo;est pourquoi nous offrons une palette de services adaptés à vos besoins spécifiques. Demande de devis, renseignement ? Contactez-nous, nous vous répondrons dans les plus brefs délais.
            </p>
            <a
              href="https://calendly.com/amele-faulat"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-btn reveal reveal-delay-3"
            >
              <span>Planifier un rendez-vous</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="contact-details">
            <div className="contact-detail-item reveal">
              <div className="contact-detail-label">Téléphone</div>
              <div className="contact-detail-value">
                <a href="tel:+33652647360">06 52 64 73 60</a>
              </div>
            </div>
            <div className="contact-detail-item reveal reveal-delay-1">
              <div className="contact-detail-label">Email</div>
              <div className="contact-detail-value">
                <a href="mailto:contact@tallyadvisory.fr">contact@tallyadvisory.fr</a>
              </div>
            </div>
            <div className="contact-detail-item reveal reveal-delay-2">
              <div className="contact-detail-label">Rendez-vous</div>
              <div className="contact-detail-value">
                <a href="https://calendly.com/amele-faulat" target="_blank" rel="noopener noreferrer">Calendly</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
