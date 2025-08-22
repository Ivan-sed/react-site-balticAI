import React from "react";

interface ConsultingMethodologyStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface ConsultingMethodologySectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  linkText?: string;
  linkHref?: string;
  steps: ConsultingMethodologyStep[];
  onPrimaryButtonClick?: () => void;
  onLinkClick?: () => void;
}

const ConsultingMethodologySection: React.FC<
  ConsultingMethodologySectionProps
> = ({
  title = "Transform Challenges into Opportunities with Expert AI Consulting",
  description = `In a rapidly evolving business landscape, knowing how and where to apply AI is just as critical as the technology itself. Our proven consulting framework helps you identify hidden value, implement effective strategies, and build a culture of continuous improvement powered by artificial intelligence.

With our end-to-end guidance, you'll move from uncertainty to clear, measurable results—faster and with less risk.`,
  primaryButtonText = "Start Your Consultation",
  linkText = "Talk to an Expert",
  linkHref = "#",
  steps,
  onPrimaryButtonClick,
  onLinkClick,
}) => {
  return (
    <section className="consulting-methodology">
      <div className="consulting-methodology__container">
        <div className="consulting-methodology__content">
          <h2 className="consulting-methodology__title">{title}</h2>
          <p className="consulting-methodology__description">
            {description.split("\n\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {index < description.split("\n\n").length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
          </p>
          <div className="consulting-methodology__actions">
            <button
              className="button button--primary consulting-methodology__get-ai-mvp-btn"
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </button>
            <button
              className="consulting-methodology__link consulting-methodology__book-demo-link"
              onClick={onLinkClick}
            >
              {linkText}
            </button>
          </div>
        </div>
        <div className="consulting-methodology__steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="consulting-methodology__step">
                <div className="consulting-methodology__step-header">
                  <span className="consulting-methodology__step-number">
                    {step.number}
                  </span>
                  <h3 className="consulting-methodology__step-title">
                    {step.title}
                  </h3>
                </div>
                <p className="consulting-methodology__step-description">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="consulting-methodology__arrow"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingMethodologySection;
