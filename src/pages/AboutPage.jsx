import { useEffect } from 'react';
import { Link } from 'react-router';
import Partners from '../components/Partners';
import Faq from '../components/Faq';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-label reveal">Le cabinet</div>
          <h1 className="page-hero-title reveal reveal-delay-1">
            Tally &ndash; l&rsquo;excellence du conseil financier et de la <em>stratégie opérationnelle</em>
          </h1>
          <p className="page-hero-subtitle reveal reveal-delay-2">
            Tally est un cabinet d&rsquo;accompagnement, d&rsquo;audit et de conseil financier spécialement conçu pour apporter une expertise technique sur-mesure.
          </p>
          <div className="page-hero-actions reveal reveal-delay-3">
            <Link to="/#services" className="btn-primary">
              <span>Voir les offres</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio">
        <div className="about-bio-inner">
          <div className="about-bio-photo-wrap reveal">
            <img src="/amele.jpg" alt="Amèle Faulat" className="about-bio-photo" />
            <div className="about-bio-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>
          <h2 className="about-bio-name reveal reveal-delay-1">Amèle</h2>
          <div className="about-bio-text reveal reveal-delay-2">
            <p>
              Je suis <strong>experte-comptable et commissaire aux comptes</strong>, avec dix ans d&rsquo;expérience dans l&rsquo;audit et le conseil financier. J&rsquo;ai débuté ma carrière chez Cifralex en 2013 avant de rejoindre Mazars, où je suis devenue Senior Manager en 2023.
            </p>
            <p>
              En 2024, j&rsquo;ai fondé Tally, guidée par une vision audacieuse de créer un <strong>écosystème engagé</strong> en audit et conseil financier, mettant l&rsquo;humain au cœur de toutes les actions.
            </p>
            <p>
              Je me suis donnée pour mission de <strong>guider les entreprises à travers ce complexe écosystème financier</strong>, en intégrant profondément les principes ESG au cœur de leur stratégie.
            </p>
          </div>
          <div className="about-bio-actions reveal reveal-delay-3">
            <Link to="/#services" className="btn-primary">
              <span>Voir les offres</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="mailto:amele.faulat@tallyadvisory.fr" className="btn-outline">Contacter Amèle</a>
          </div>
        </div>
      </section>

      {/* Tally Description */}
      <section className="about-description">
        <div className="about-description-inner">
          <p className="about-description-text reveal">
            Chez <span className="about-description-brand">Tally</span>, nous combinons une expertise financière avec une passion profonde pour le développement durable, afin d&rsquo;offrir des solutions qui ne se contentent pas de répondre aux défis d&rsquo;aujourd&rsquo;hui, mais façonnent également l&rsquo;avenir de nos industries.
          </p>
          <p className="about-description-text reveal reveal-delay-1">
            Nous offrons une gamme complète de services, allant de l&rsquo;audit traditionnel et de l&rsquo;expertise comptable à des conseils stratégiques en ESG, conçus pour améliorer la performance environnementale, sociale et de gouvernance.
          </p>
          <p className="about-description-text reveal reveal-delay-2">
            Notre approche est <strong>personnalisée, proactive et avant-gardiste</strong>, nous permettant de déceler des opportunités uniques et de naviguer à travers les défis avec agilité et précision.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-mission-inner">
          <h2 className="about-mission-title reveal">Notre mission</h2>
          <p className="about-mission-text reveal reveal-delay-1">
            Guider les entreprises à travers l&rsquo;écosystème financier tout en intégrant fermement les principes ESG au cœur de leur stratégie.
          </p>
          <p className="about-mission-text reveal reveal-delay-2">
            Ce faisant, nous visons à créer un <strong>équilibre parfait entre rentabilité et responsabilité</strong>, assurant que nos clients non seulement prospèrent, mais contribuent également à un monde plus durable.
          </p>
        </div>
      </section>

      {/* Conviction */}
      <section className="about-conviction">
        <div className="about-conviction-inner">
          <blockquote className="about-conviction-quote reveal">
            Chez Tally, nous sommes convaincus que l&rsquo;avenir repose sur une base de durabilité et d&rsquo;innovation. C&rsquo;est pourquoi nous nous engageons à être à vos côtés à chaque étape de votre développement, vous aidant à réaliser vos objectifs financiers.
          </blockquote>
        </div>
      </section>

      {/* Partners */}
      <Partners />

      {/* FAQ */}
      <Faq />
    </>
  );
}
