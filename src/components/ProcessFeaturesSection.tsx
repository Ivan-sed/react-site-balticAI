import React from "react";

interface ProcessFeatureCard {
  id: string;
  title: string;
  description: string;
  iconClass?: string;
}

interface ProcessFeaturesSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  mainCards: ProcessFeatureCard[];
  securityCards: ProcessFeatureCard[];
  className?: string;
  onButtonClick?: () => void;
}

const ProcessFeaturesSection: React.FC<ProcessFeaturesSectionProps> = ({
  title = "Explore the Details. Start Your AI Journey.",
  description = "Get a transparent look at the modules powering your transformation. Each block addresses real business needs—security, integration, customization, and performance—so you know exactly what drives your results.",
  buttonText = "Get Started",
  mainCards,
  securityCards,
  className = "",
  onButtonClick,
}) => {
  return (
    <section className={`process-features ${className}`} id="process-features">
      <div className="process-features__container">
        <div className="process-features__main">
          <div className="process-features__intro">
            <h2 className="process-features__title">{title}</h2>
            <p className="process-features__description">{description}</p>
            <button
              className="process-features__button process-features__get-started-btn"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
          <div className="process-features__cards">
            <div className="process-features__main-cards">
              {mainCards.map((card) => (
                <div key={card.id} className="process-features__card">
                  <div
                    className={`process-features__card-icon ${
                      card.iconClass || ""
                    }`}
                  ></div>
                  <h3 className="process-features__card-title">{card.title}</h3>
                  <p className="process-features__card-description">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="process-features__security-cards">
              {securityCards.map((card) => (
                <div key={card.id} className="process-features__security-card">
                  <div
                    className={`process-features__security-card-icon ${
                      card.iconClass || ""
                    }`}
                  ></div>
                  <h3 className="process-features__security-card-title">
                    {card.title}
                  </h3>
                  <p className="process-features__security-card-description">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFeaturesSection;
