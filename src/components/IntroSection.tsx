import React from "react";
import { Link } from "react-router-dom";

interface IntroSectionProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ text: string; href?: string; isCurrent?: boolean }>;
  stats: Array<{ number: string; title: string; description: string }>;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  title,
  description,
  breadcrumbs,
  stats,
}) => {
  return (
    <section className="intro">
      {/* Breadcrumbs inside intro */}
      <div className="intro__breadcrumbs">
        <div className="intro__breadcrumbs-container">
          <nav className="intro__breadcrumbs-nav">
            <ul className="intro__breadcrumbs-list">
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  <li
                    className={`intro__breadcrumbs-item ${
                      breadcrumb.isCurrent
                        ? "intro__breadcrumbs-item--current"
                        : ""
                    }`}
                  >
                    {breadcrumb.href ? (
                      <Link
                        to={breadcrumb.href}
                        className="intro__breadcrumbs-link"
                      >
                        {breadcrumb.text}
                      </Link>
                    ) : (
                      <span className="intro__breadcrumbs-text">
                        {breadcrumb.text}
                      </span>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && (
                    <li className="intro__breadcrumbs-separator">&gt;&gt;</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="intro__container">
        <div className="intro__content">
          <div className="intro__text-group">
            <h1 className="intro__title">
              <span className="intro__title-text">{title}</span>
            </h1>
            <div className="intro__subtitle-group">
              <p className="intro__description">{description}</p>
            </div>
          </div>
          <div className="intro__actions">
            <button className="button intro__button button--primary intro__get-started-btn">
              Get started
            </button>
            <a
              href="#consultation"
              className="intro__link intro__consultation-link"
            >
              Consultation
            </a>
          </div>
        </div>
        <div className="intro__numbers">
          {stats.map((stat, index) => (
            <div key={index} className="intro__number-block">
              <span className="intro__number">{stat.number}</span>
              <div className="intro__number-block-text">
                <span className="intro__number-title">{stat.title}</span>
                <span className="intro__number-description">
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

export default IntroSection;
