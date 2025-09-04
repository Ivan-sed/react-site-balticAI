import React from "react";

// Импорт изображений для мобильной секции
import rapidDeploymentImg from "../assets/images/Rapid-Deployment-img.png";
import intuitiveDashboardsImg from "../assets/images/Intuitive-Dashboardst-img.png";
import scalableArchitectureImg from "../assets/images/Scalable-Architecture-img.png";
import continuousImprovementImg from "../assets/images/Continuous-Improvement-img.png";

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
  onBookingClick?: () => void;
}

const VisualizationSection: React.FC<VisualizationSectionProps> = ({
  title = "Visualize Your AI Transformation in Action",
  topRowCards,
  bottomRowCards,
  className = "",
  onBookingClick,
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

        <div className="visualization-mobile">
          <div className="visualization-mobile__content">

            <div className="visualization-mobile__section-row">
              <img className="visualization-mobile__image" src={rapidDeploymentImg} alt="Rapid Deployment" />
              <p className="visualization-mobile__text">Rapid Deployment</p>
            </div>

            <div className="visualization-mobile__section-row">
              <img className="visualization-mobile__image" src={intuitiveDashboardsImg} alt="Intuitive Dashboards" />
              <p className="visualization-mobile__text">Intuitive Dashboards</p>
            </div>

            <div className="visualization-mobile__section-row">
              <img className="visualization-mobile__image" src={scalableArchitectureImg} alt="Scalable Architecture" />
              <p className="visualization-mobile__text">Scalable Architecture</p>
            </div>

            <div className="visualization-mobile__section-row">
              <img className="visualization-mobile__image" src={continuousImprovementImg} alt="Continuous Improvement" />
              <p className="visualization-mobile__text">Continuous Improvement</p>
            </div>

            <button 
              className="visualization-mobile__button"
              onClick={onBookingClick}
            >
              Book now
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualizationSection;
