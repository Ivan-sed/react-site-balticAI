import React from "react";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  linkText?: string;
  linkHref?: string;
  steps: ProcessStep[];
  className?: string;
  onPrimaryButtonClick?: () => void;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = "Overcome Operational Challenges with AI",
  description = `In today's fast-paced business environment, manual processes and repetitive tasks not only eat up valuable time but also hinder innovation and growth.

Our three-step, AI-first methodology pinpoints these inefficiencies, implements intelligent automation to resolve them swiftly, and continuously refines your workflows to ensure sustainable, long-term performance gains.`,
  primaryButtonText = "Get AI MVP",
  linkText = "Book demo",
  linkHref = "#",
  steps,
  className = "",
  onPrimaryButtonClick,
}) => {
  return (
    <section className={`process ${className}`} id="process">
      <div className="process__container">
        <div className="process__content">
          <h2 className="process__title">{title}</h2>
          <p className="process__description">
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
          <div className="process__actions">
            <button
              className="button button--primary process__get-ai-mvp-btn"
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </button>
            <a
              href={linkHref}
              className="process__link process__book-demo-link"
            >
              {linkText}
            </a>
          </div>
        </div>
        <div className="process__steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="process__step">
                <div className="process__step-header">
                  <span className="process__step-number">{step.number}</span>
                  <h3 className="process__step-title">{step.title}</h3>
                </div>
                <p className="process__step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="process__arrow"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
