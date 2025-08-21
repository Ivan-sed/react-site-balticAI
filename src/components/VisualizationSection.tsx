import React from "react";

interface VisualizationCard {
  id: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonClassName?: string;
  onButtonClick?: () => void;
  isLarge?: boolean;
}

interface VisualizationSectionProps {
  title?: string;
  topRowCards: VisualizationCard[];
  bottomRowCards: VisualizationCard[];
  className?: string;
}

const VisualizationSection: React.FC<VisualizationSectionProps> = ({
  title = "Visualize Your AI Transformation in Action",
  topRowCards,
  bottomRowCards,
  className = "",
}) => {
  return (
    <section className={`visualization ${className}`} id="visualization">
      <div className="visualization__container">
        <h2 className="visualization__title">{title}</h2>
        <div className="visualization__content">
          {/* Top Row - 3 Regular Cards */}
          <div className="visualization__top-row">
            {topRowCards.map((card) => (
              <div key={card.id} className="visualization__card">
                <div className="visualization__card-inner">
                  <div className="visualization__card-content">
                    <h3 className="visualization__card-title">{card.title}</h3>
                    <p className="visualization__card-description">
                      {card.description}
                    </p>
                  </div>
                  {card.buttonText && (
                    <button
                      className={`visualization__card-button ${
                        card.buttonClassName || ""
                      }`}
                      onClick={card.onButtonClick}
                    >
                      <span className="visualization__card-button-text">
                        {card.buttonText}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Large Cards */}
          <div className="visualization__bottom-row">
            {bottomRowCards.map((card) => (
              <div key={card.id} className="visualization__card--large">
                <div className="visualization__card-inner">
                  <div className="visualization__card-content">
                    <div className="visualization__card-text">
                      <h3 className="visualization__card-title">
                        {card.title}
                      </h3>
                      <p className="visualization__card-description">
                        {card.description}
                      </p>
                    </div>
                    {card.buttonText && (
                      <button
                        className={`visualization__card-button ${
                          card.buttonClassName || ""
                        }`}
                        onClick={card.onButtonClick}
                      >
                        <span className="visualization__card-button-text">
                          {card.buttonText}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualizationSection;
