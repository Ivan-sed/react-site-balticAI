import React from "react";

interface TransformationStep {
  id: string;
  title: string;
  description: string;
  iconClass?: string;
}

interface TransformationSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  steps: TransformationStep[];
  className?: string;
  onButtonClick?: () => void;
}

const TransformationSection: React.FC<TransformationSectionProps> = ({
  title = "Start Upgrading Your IT—No Hassle Required",
  description = "From initial assessment to ongoing optimization, we ensure your IT transformation is streamlined and result-driven—clear, fast, and focused on your goals.",
  buttonText = "Book consultation",
  steps,
  className = "",
  onButtonClick,
}) => {
  return (
    <section className={`transformation ${className}`} id="transformation">
      <div className="transformation__container">
        <div className="transformation__content">
          <div className="transformation__header">
            <h2 className="transformation__title">{title}</h2>
            <p className="transformation__description">{description}</p>
          </div>
          <div className="transformation__main">
            <div className="transformation__steps">
              {steps.map((step) => (
                <div key={step.id} className="transformation__step">
                  <div
                    className={`transformation__step-icon ${
                      step.iconClass || ""
                    }`}
                  ></div>
                  <div className="transformation__step-content">
                    <h3 className="transformation__step-title">{step.title}</h3>
                    <p className="transformation__step-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="transformation__button transformation__book-consultation-btn"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
