import React from "react";
import { Link } from "react-router-dom";

interface OfferingCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
  isFeatured?: boolean;
  showBadge?: boolean;
  badgeText?: string;
  className?: string;
  buttonText?: string;
  linkTo?: string;
}

interface OfferingsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  offerings: OfferingCard[];
  className?: string;
}

const OfferingsSection: React.FC<OfferingsSectionProps> = ({
  title = "Our Services",
  subtitle = "Transforming businesses with cutting-edge AI solutions",
  offerings,
  className = "",
}) => {
  // Разделяем на featured карточку и остальные
  const featuredOffering = offerings.find((offering) => offering.isFeatured);
  const regularOfferings = offerings.filter((offering) => !offering.isFeatured);

  return (
    <section className={`offerings ${className}`} id="offerings">
      <div className="offerings__container">
        <header className="offerings__header">
          <div className="offerings__header-content">
            <h2 className="offerings__title">{title}</h2>
            <p className="offerings__subtitle">{subtitle}</p>
          </div>
        </header>

        <div className="offerings__grid">
          {/* Featured Card */}
          {featuredOffering && (
            <article
              className={`offerings__card offerings__card--featured ${
                featuredOffering.className || ""
              }`}
            >
              <div className="offerings__card-header">
                {featuredOffering.showBadge && (
                  <div className="offerings__card-badge">
                    <span className="offerings__card-badge-item offerings__card-badge-item--popular">
                      <span className="offerings__card-badge-icon"></span>
                      <span className="offerings__card-badge-text">
                        {featuredOffering.badgeText || "Most popular"}
                      </span>
                    </span>
                  </div>
                )}
              </div>
              <div className="offerings__card-main">
                <div className="offerings__card-content">
                  <div className="offerings__card-info">
                    <div className="offerings__card-text-group">
                      <h3 className="offerings__card-title">
                        {featuredOffering.title}
                      </h3>
                      <p className="offerings__card-description">
                        {featuredOffering.description}
                      </p>
                    </div>
                    <Link
                      to={featuredOffering.linkTo || "/ai-solutions"}
                      className="button offerings__card-button button--primary offerings__view-more-btn"
                    >
                      {featuredOffering.buttonText || "View more"}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Regular Cards Row */}
          {regularOfferings.length > 0 && (
            <div className="offerings__row">
              {regularOfferings.map((offering) => (
                <article
                  key={offering.id}
                  className={`offerings__card ${offering.className || ""}`}
                >
                  <div className="offerings__card-header"></div>
                  <div className="offerings__card-content">
                    <div className="offerings__card-text-group">
                      <h3 className="offerings__card-title">
                        {offering.title}
                      </h3>
                      <p className="offerings__card-description">
                        {offering.description}
                      </p>
                    </div>
                    <Link
                      to={offering.linkTo || "/ai-solutions"}
                      className="button offerings__card-button button--primary"
                    >
                      {offering.buttonText || "View more"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
