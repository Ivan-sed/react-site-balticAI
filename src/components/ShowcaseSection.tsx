import React from "react";
import { useProjectCardsHover } from "../hooks";

interface ShowcaseProject {
  id: string;
  type: "clinic" | "cosmetology" | "calculator" | "travel";
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

interface ShowcaseSectionProps {
  title?: string;
  subtitle?: string;
  projects: ShowcaseProject[];
  buttonText?: string;
  onButtonClick?: () => void;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title = "Featured Projects",
  subtitle = "Take a look at some of our standout AI solutions",
  projects,
  buttonText = "View all",
  onButtonClick,
}) => {
  const projectHover = useProjectCardsHover();
  return (
    <section className="showcase" id="showcase">
      <div className="showcase__container">
        <header className="showcase__header">
          <div className="showcase__header-content">
            <h2 className="showcase__title">{title}</h2>
            <p className="showcase__subtitle">{subtitle}</p>
          </div>
        </header>

        <div
          className={`showcase__grid ${
            projectHover.isOtherCardHovered ? "other-card-hovered" : ""
          }`}
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card project-card--${project.type}`}
              {...(index > 0 && {
                onMouseEnter: projectHover.handleCardEnter,
                onMouseLeave: projectHover.handleCardLeave,
              })}
            >
              <div className="project-card__content">
                {project.description ? (
                  <div className="project-card__text-group">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">
                      {project.description}
                    </p>
                  </div>
                ) : (
                  <h3 className="project-card__title">{project.title}</h3>
                )}
                {project.linkText && project.linkHref && (
                  <a href={project.linkHref} className="project-card__link">
                    <span className="project-card__link-text">
                      {project.linkText}
                    </span>
                    <span className="project-card__link-arrow"></span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="showcase__actions">
          <button
            className="button showcase__button button--primary showcase__button--primary"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
