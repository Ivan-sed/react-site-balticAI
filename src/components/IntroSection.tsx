import React from "react";
import { Link } from "react-router-dom";
import { otherAiImg, otherItImg, otherBgElipse1, otherBgElipse2 } from "../assets";

interface IntroSectionProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ text: string; href?: string; isCurrent?: boolean }>;
  stats: Array<{ number: string; title: string; description: string }>;
  onGetStartedClick?: () => void;
  onConsultationClick?: () => void;
  pageType?: "ai" | "it"; // Новый проп для выбора изображения
}

const IntroSection: React.FC<IntroSectionProps> = ({
  title,
  description,
  breadcrumbs,
  stats,
  onGetStartedClick,
  onConsultationClick,
  pageType = "ai", // По умолчанию AI изображение
}) => {
  // Выбираем изображение в зависимости от типа страницы
  const getAdaptiveImage = () => {
    switch (pageType) {
      case "it":
        return { src: otherItImg, alt: "IT Solutions" };
      case "ai":
      default:
        return { src: otherAiImg, alt: "AI Solutions" };
    }
  };

  const adaptiveImage = getAdaptiveImage();
  return (
    <section className="intro">
      {/* Background ellipses */}
      <div className="intro__bg-ellipse intro__bg-ellipse--left">
        <img src={otherBgElipse1} alt="" className="intro__bg-ellipse-image" />
      </div>
      <div className="intro__bg-ellipse intro__bg-ellipse--right">
        <img src={otherBgElipse2} alt="" className="intro__bg-ellipse-image" />
      </div>

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
                    {breadcrumb.href && !breadcrumb.isCurrent ? (
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
            <button 
              className="button intro__button button--primary intro__get-started-btn"
              onClick={onGetStartedClick}
            >
              Get started
            </button>
                         <button
               className="intro__link intro__consultation-link"
               onClick={onConsultationClick}
             >
               Consultation
             </button>
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

      {/* Adaptive image for tablets and mobile */}
      <div className="intro__adaptive-image">
        <img src={adaptiveImage.src} alt={adaptiveImage.alt} className="intro__adaptive-image-img" />
      </div>
    </section>
  );
};

export default IntroSection;
