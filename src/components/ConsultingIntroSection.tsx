import React from "react";
import { Link } from "react-router-dom";

interface ConsultingIntroSectionProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ text: string; href?: string; isCurrent?: boolean }>;
  stats: Array<{ number: string; title: string; description: string }>;
  primaryButtonText?: string;
  linkText?: string;
  linkHref?: string;
  onPrimaryButtonClick?: () => void;
}

const ConsultingIntroSection: React.FC<ConsultingIntroSectionProps> = ({
  title,
  description,
  breadcrumbs,
  stats,
  primaryButtonText = "Book Consultation",
  linkText = "See client stories",
  linkHref = "#consulting-booking",
  onPrimaryButtonClick,
}) => {
  return (
    <section className="consulting-intro">
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
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </button>
            <a
              href={linkHref}
              className="consulting-intro__link consulting-intro__consultation-link"
            >
              {linkText}
            </a>
          </div>
        </div>
        <div className="consulting-intro__numbers">
          {stats.map((stat, index) => (
            <div key={index} className="consulting-intro__number-block">
              <span className="consulting-intro__number">{stat.number}</span>
              <div className="consulting-intro__number-block-text">
                <span className="consulting-intro__number-title">
                  {stat.title}
                </span>
                <span className="consulting-intro__number-description">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingIntroSection;
