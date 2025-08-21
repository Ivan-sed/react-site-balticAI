import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  text: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsSectionProps {
  breadcrumbs: BreadcrumbItem[];
}

const BreadcrumbsSection: React.FC<BreadcrumbsSectionProps> = ({
  breadcrumbs,
}) => {
  return (
    <section className="breadcrumbs">
      <div className="breadcrumbs__container">
        <nav className="breadcrumbs__nav">
          <ul className="breadcrumbs__list">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <li
                  className={`breadcrumbs__item ${
                    breadcrumb.isCurrent ? "breadcrumbs__item--current" : ""
                  }`}
                >
                  {breadcrumb.href && !breadcrumb.isCurrent ? (
                    <Link to={breadcrumb.href} className="breadcrumbs__link">
                      {breadcrumb.text}
                    </Link>
                  ) : (
                    <span className="breadcrumbs__text">{breadcrumb.text}</span>
                  )}
                </li>
                {index < breadcrumbs.length - 1 && (
                  <li className="breadcrumbs__separator">&gt;&gt;</li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BreadcrumbsSection;
