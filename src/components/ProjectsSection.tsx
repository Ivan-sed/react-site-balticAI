import React from "react";
import { useNavigate } from "react-router-dom";
import { useProjectCardsHover } from "../hooks";

interface ProjectsSectionProps {
  showViewAllButton?: boolean;
  maxProjects?: number;
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  showViewAllButton = true,
  maxProjects,
  className = "",
}) => {
  const navigate = useNavigate();
  const projectHover = useProjectCardsHover();

  const projects = [
    {
      id: "clinic",
      title: "Clinic Chatbot",
      description:
        "Custom chatbot for a private clinic to reduce the calling pressure and help clients find out info etc.",
      className: "project-card--clinic",
      hasHover: false,
    },
    {
      id: "cosmetology",
      title: "Cosmetology chatbot",
      description:
        "AI-powered beauty consultant that provides personalized skincare recommendations and appointment scheduling.",
      className: "project-card--cosmetology",
      hasHover: true,
    },
    {
      id: "calculator",
      title: "AI calculator",
      description:
        "Smart calculator with natural language processing that solves complex mathematical problems and equations.",
      className: "project-card--calculator",
      hasHover: true,
    },
    {
      id: "travel",
      title: "Travel chatbot",
      description:
        "Intelligent travel assistant that helps plan trips, find deals, and provides real-time travel information.",
      className: "project-card--travel",
      hasHover: true,
    },
  ];

  const displayedProjects = maxProjects
    ? projects.slice(0, maxProjects)
    : projects;

  return (
    <section className={`projects ${className}`} id="projects">
      <div className="projects__container">
        <header className="projects__header">
          <div className="projects__header-content">
            <h2 className="projects__title">Featured Projects</h2>
            <p className="projects__subtitle">
              Take a look at some of our standout AI solutions
            </p>
          </div>
        </header>

        <div
          className={`projects__grid ${
            projectHover.isOtherCardHovered ? "other-card-hovered" : ""
          }`}
          onMouseLeave={projectHover.handleCardLeave}
        >
          {displayedProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${project.className}`}
              {...(project.hasHover && {
                onMouseEnter: projectHover.handleCardEnter,
              })}
              {...(index === 0 && {
                onMouseEnter: projectHover.handleFirstCardEnter,
              })}
            >
              <div className="project-card__content">
                <div className="project-card__text-group">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>
                </div>
                <a href="/case-page" className="project-card__link">
                  <span className="project-card__link-text">View Project</span>
                  <span className="project-card__link-arrow"></span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {showViewAllButton && (
          <div className="projects__actions">
            <button 
              className="button projects__button button--primary projects__button--primary"
              onClick={() => {
                navigate("/cases");
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
            >
              View all
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
