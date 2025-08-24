import React from "react";
import { useAccordion } from "../hooks";
import navArrowImg from "../assets/images/nav-arrow.png";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface CompanySectionProps {
  title?: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  aboutText?: string;
  faqItems: FAQItem[];
  className?: string;
  onLinkClick?: () => void;
}

const CompanySection: React.FC<CompanySectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find quick answers to common questions about our AI solutions, implementation process, and ongoing support.",
  linkText = "Book free consultation",
  linkHref: _linkHref = "#consultation",
  aboutText = "About us",
  faqItems,
  className = "",
  onLinkClick,
}) => {
  const { toggleItem, isActive } = useAccordion(-1); // Start with all items closed
  return (
    <section className={`company ${className}`} id="company">
      <div className="company__container">
        <div className="company__visual">
          <h2 className="company__visual-title">{title}</h2>
          <p className="company__visual-subtitle">{subtitle}</p>
          <button className="company__visual-link" onClick={onLinkClick}>
            {linkText}
          </button>
        </div>

        <div className="company__content">
          <div className="company__text-block">
            <span className="company__text">{aboutText}</span>
            <img src={navArrowImg} alt="Arrow" className="company__arrow" />
          </div>
          <div className="company__stats">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={`company__stat-card ${
                  isActive(index) ? "active" : ""
                }`}
                data-accordion-item
              >
                <div
                  className="company__stat-card-header"
                  onClick={() => toggleItem(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="company__stat-card-title">{item.question}</h3>
                  <div className="company__stat-card-icon"></div>
                </div>
                <p className="company__stat-card-description">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
