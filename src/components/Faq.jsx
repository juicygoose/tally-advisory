import { useState } from 'react';

const faqData = [
  {
    question: "Qui compose l\u2019équipe de Tally ?",
    answer:
      "En tant que fondatrice de Tally, je gère personnellement tous les projets avec le soutien d\u2019un réseau d\u2019experts spécialisés. Cela inclut des avocats, des spécialistes de la paie et d\u2019autres consultants selon les besoins spécifiques des clients.",
    delayClass: '',
  },
  {
    question: 'Quels types de clients Tally sert-elle principalement ?',
    answer:
      "Tally est spécialisée dans le service aux petites et moyennes entreprises, avec un accent particulier sur les entreprises qui nécessitent une expertise comptable et de conseil stratégique approfondie. Nos services sont sur-mesure pour répondre aux besoins uniques de chaque client.",
    delayClass: 'reveal-delay-1',
  },
  {
    question: "Quelles méthodologies d\u2019audit financier utilisez-vous ?",
    answer:
      "Nous adoptons une approche personnalisée, pragmatique sur les traitements comptables et toujours à la pointe des réglementations. Notre approche est sectorielle grâce à une vision prospective des tendances de votre secteur, et sur-mesure grâce à une collaboration étroite avec les instances.",
    delayClass: 'reveal-delay-2',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-grid">
          <div>
            <div className="section-label reveal">FAQ</div>
            <h2 className="section-title reveal reveal-delay-1">
              Questions <em>fréquentes</em>
            </h2>
          </div>
          <div>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item reveal ${item.delayClass}${openIndex === index ? ' open' : ''}`}
              >
                <button className="faq-question" onClick={() => toggle(index)}>
                  {item.question}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
