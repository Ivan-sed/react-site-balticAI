import React from "react";

interface CaseMetric {
  title: string;
  value: string;
}

interface CaseDetailsSectionProps {
  title: string;
  description: string;
  metrics: CaseMetric[];
  logoUrl: string;
  companyDescription: {
    title: string;
    text: string;
    imageUrl: string;
  };
  solution: {
    title: string;
    text: string;
    imageUrl: string;
  };
  benefits: {
    title: string;
    text: string;
    metrics: {
      number: string;
      title: string;
    }[];
  };
  finalImageUrl: string;
}

const CaseDetailsSection: React.FC<CaseDetailsSectionProps> = ({
  title,
  description,
  metrics,
  logoUrl,
  companyDescription,
  solution,
  benefits,
  finalImageUrl,
}) => {
  return (
    <>
      {/* First section */}
      <section className="cases-page">
        <div className="cases__container">
          <div className="cases__first-section">
            <div className="cases__left-side">
              <h1 className="cases__case-title">{title}</h1>
              <p className="cases__description">{description}</p>

              <div className="cases__box-metircs">
                {metrics.map((metric, index) => (
                  <div key={index} className="cases__row-metrics">
                    <p className="cases__title-metric">{metric.title}</p>
                    <p className="cases__text-metric">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cases__right-side">
              <img className="cases__logo-img" src={logoUrl} alt={title} />
            </div>
          </div>

          <div className="cases__second-section">
            <img
              className="cases__img-first"
              src={companyDescription.imageUrl}
              alt=""
            />

            <div className="cases__text-side">
              <h2 className="cases__subtitle">{companyDescription.title}</h2>
              <p className="cases__text">{companyDescription.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second section with gray background */}
      <section className="cases-page cases__gray-bg">
        <div className="cases__container">
          <div className="cases__third-section cases__second-section">
            <div className="cases__text-side">
              <h2 className="cases__subtitle">{solution.title}</h2>
              <p className="cases__text">{solution.text}</p>
            </div>

            <img className="cases__img-first" src={solution.imageUrl} alt="" />
          </div>

          <div className="cases__four-section">
            <h2 className="cases__subtitle">{benefits.title}</h2>
            <p className="cases__text">{benefits.text}</p>
          </div>

          <div className="cases__five-section">
            {benefits.metrics.map((metric, index) => (
              <div key={index} className="cases__column-metrics">
                <p className="cases__number-metric">{metric.number}</p>
                <p className="cases__title-metric">{metric.title}</p>
              </div>
            ))}
          </div>

          <div className="cases__six-section">
            <img className="cases__last-img" src={finalImageUrl} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseDetailsSection;
