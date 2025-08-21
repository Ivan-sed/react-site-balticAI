import React from "react";

interface ConsultingBenefitsCard {
  id: string;
  type: "time" | "automation" | "testimonial";
  description: string;
  statsLabel?: string;
}

interface ConsultingBenefitsSectionProps {
  title?: string;
  headerButtonText?: string;
  cards: ConsultingBenefitsCard[];
  onHeaderButtonClick?: () => void;
}

const ConsultingBenefitsSection: React.FC<ConsultingBenefitsSectionProps> = ({
  title = "Consulting Blind Spots: The Hidden Costs You Can't Ignore",
  headerButtonText = "Get started today",
  cards,
  onHeaderButtonClick,
}) => {
  return (
    <section className="consulting-benefits">
      <div className="consulting-benefits__container">
        <header className="consulting-benefits__header">
          <div className="consulting-benefits__header-content">
            <h2 className="consulting-benefits__title">{title}</h2>
          </div>
          <button
            className="button button--primary consulting-benefits__header-button"
            onClick={onHeaderButtonClick}
          >
            {headerButtonText}
          </button>
        </header>

        <div className="consulting-benefits__cards">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`consulting-benefits__card consulting-benefits__card--${card.type}`}
            >
              <div className="consulting-benefits__card-content">
                <div className="consulting-benefits__card-text-group">
                  <p className="consulting-benefits__card-description">
                    {card.description
                      .split("<br /><br />")
                      .map((paragraph, index) => (
                        <React.Fragment key={index}>
                          {paragraph}
                          {index <
                            card.description.split("<br /><br />").length -
                              1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </React.Fragment>
                      ))}
                  </p>
                </div>
                {card.statsLabel && (
                  <div className="consulting-benefits__card-stats">
                    <span className="consulting-benefits__card-stats-label">
                      {card.statsLabel}
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingBenefitsSection;
