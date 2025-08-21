import React from "react";
import { Link } from "react-router-dom";

interface CaseItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  linkHref: string;
}

interface CasesSectionProps {
  title?: string;
  cases: CaseItem[];
}

const CasesSection: React.FC<CasesSectionProps> = ({
  title = "Our projects",
  cases,
}) => {
  return (
    <section className="cases-page">
      <div className="cases__container">
        <h2 className="cases__title">{title}</h2>
        <div className="cases__list">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={caseItem.linkHref}
              className="cases__item-link"
            >
              <div className="cases__item">
                <div className="cases__box-category">
                  <div className="cases__category">{caseItem.category}</div>
                </div>
                <div className="cases__row-content">
                  <h3 className="cases__item-title">{caseItem.title}</h3>
                  <img
                    className="cases__item-img"
                    src={caseItem.imageUrl}
                    alt={caseItem.title}
                  />
                </div>
                <div className="cases__button">View more</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
