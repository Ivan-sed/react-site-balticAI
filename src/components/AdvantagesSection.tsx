import React from "react";

interface AdvantageCard {
  id: string;
  type: "automation" | "time" | "testimonial";
  description: string;
  statsLabel?: string;
  testimonialText?: string;
  className?: string;
}

interface AdvantagesSectionProps {
  title?: string;
  headerButtonText?: string;
  cards: AdvantageCard[];
  className?: string;
  onHeaderButtonClick?: () => void;
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({
  title = "The Hidden Costs Dragging Your Business Down",
  headerButtonText = "Get started today",
  cards,
  className = "",
  onHeaderButtonClick,
}) => {
  return (
    <section className={`advantages ${className}`} id="advantages">
      <div className="advantages__container">
        <header className="advantages__header">
          <div className="advantages__header-content">
            <h2 className="advantages__title">{title}</h2>
          </div>
          <button
            className="button button--primary advantages__header-button"
            onClick={onHeaderButtonClick}
          >
            {headerButtonText}
          </button>
        </header>

        <div className="advantages__cards">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`advantages__card advantages__card--${card.type} ${
                card.className || ""
              }`}
            >
              <div className="advantages__card-content">
                {card.type === "testimonial" ? (
                  <blockquote className="advantages__card-testimonial">
                    <p className="advantages__card-testimonial-text">
                      {card.testimonialText || card.description}
                    </p>
                  </blockquote>
                ) : (
                  <>
                    <div className="advantages__card-text-group">
                      <p className="advantages__card-description">
                        {card.description}
                      </p>
                    </div>
                    {card.type === "time" && card.statsLabel && (
                      <div className="advantages__card-stats">
                        <span className="advantages__card-stats-label">
                          {card.statsLabel}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
