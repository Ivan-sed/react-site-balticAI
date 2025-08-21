import React from "react";
import { Link } from "react-router-dom";

interface AboutIntroSectionProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ text: string; href?: string; isCurrent?: boolean }>;
  buttonText: string;
  onButtonClick?: () => void;
}

const AboutIntroSection: React.FC<AboutIntroSectionProps> = ({
  title,
  description,
  breadcrumbs,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="about-intro">
      {/* Breadcrumbs inside consulting-intro */}
      <div className="consulting-intro__breadcrumbs">
        <div className="consulting-intro__breadcrumbs-container">
          <nav className="consulting-intro__breadcrumbs-nav">
            <ul className="consulting-intro__breadcrumbs-list">
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  <li
                    className={`consulting-intro__breadcrumbs-item ${
                      breadcrumb.isCurrent
                        ? "consulting-intro__breadcrumbs-item--current"
                        : ""
                    }`}
                  >
                    {breadcrumb.href && !breadcrumb.isCurrent ? (
                      <Link
                        to={breadcrumb.href}
                        className="consulting-intro__breadcrumbs-link"
                      >
                        {breadcrumb.text}
                      </Link>
                    ) : (
                      <span className="consulting-intro__breadcrumbs-text">
                        {breadcrumb.text}
                      </span>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && (
                    <li className="consulting-intro__breadcrumbs-separator">
                      &gt;&gt;
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="consulting-intro__container">
        <div className="consulting-intro__content">
          <div className="consulting-intro__text-group">
            <h1 className="consulting-intro__title">
              <span className="consulting-intro__title-text">{title}</span>
            </h1>
            <div className="consulting-intro__subtitle-group">
              <p className="consulting-intro__description">{description}</p>
            </div>
          </div>
          <div className="consulting-intro__actions">
            <button
              className="button consulting-intro__button button--primary consulting-intro__get-started-btn"
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

export default AboutIntroSection;
