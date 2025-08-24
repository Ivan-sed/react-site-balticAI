import React from "react";
import { Link } from "react-router-dom";

interface SolutionCard {
  id: string;
  type: "featured" | "it-solutions" | "consultation";
  title: string;
  description: string;
  buttonText: string;
  linkTo?: string;
  onButtonClick?: (e: React.MouseEvent) => void;
}

interface SolutionsSectionProps {
  title?: string;
  solutions: SolutionCard[];
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  title = "Expert Solutions Tailored for Your Business",
  solutions,
}) => {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__container">
        <header className="solutions__header">
          <div className="solutions__header-content">
            <h2 className="solutions__title">{title}</h2>
          </div>
        </header>

        <div className="solutions__grid">
          {solutions.map((solution) => (
            <article
              key={solution.id}
              className={`solutions__card solutions__card--${solution.type}`}
            >
              {solution.type !== "featured" && (
                <div className="solutions__card-header"></div>
              )}
              <div className="solutions__card-main">
                <div className="solutions__card-content">
                  <div className="solutions__card-info">
                    <div
                      className={`solutions__card-text-group solutions__card-text-group--${solution.type}`}
                    >
                      <h3 className="solutions__card-title">
                        {solution.title}
                      </h3>
                      <p className="solutions__card-description">
                        {solution.description}
                      </p>
                    </div>
                    {solution.onButtonClick ? (
                      <button
                        className="button solutions__card-button button--primary solutions__card-button--primary"
                        onClick={solution.onButtonClick}
                      >
                        {solution.buttonText}
                      </button>
                    ) : (
                      <Link
                        to={solution.linkTo || (
                          solution.type === "featured" ? "/ai-solutions" :
                          solution.type === "it-solutions" ? "/it-solutions" : 
                          "/consulting"
                        )}
                        className="button solutions__card-button button--primary solutions__card-button--primary"
                      >
                        {solution.buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
