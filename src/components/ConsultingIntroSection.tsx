import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { otherConsultingImg, otherBgElipse1, otherBgElipse2 } from "../assets";

interface ConsultingIntroSectionProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ text: string; href?: string; isCurrent?: boolean }>;
  stats: Array<{ number: string; title: string; description: string }>;
  primaryButtonText?: string;
  linkText?: string;
  linkHref?: string;
  onPrimaryButtonClick?: () => void;
  onLinkClick?: () => void;
}

// Функции для мобильных текстов
const getMobileTitle = (_title: string): string => {
  return "Expert AI Consulting for Real Results";
};

const getMobileDescription = (_description: string): string => {
  return "Transform your business with strategic AI consulting. From planning to implementation, we help you achieve measurable results faster.";
};

const getMobileStats = (_stats: Array<{ number: string; title: string; description: string }>): Array<{ number: string; title: string; description: string }> => {
  return [
    {
      number: "01",
      title: "Strategic AI Planning",
      description: "Align AI initiatives with your business goals for maximum impact and clear ROI."
    },
    {
      number: "02", 
      title: "Fast Implementation",
      description: "Get results in 3 months with proven frameworks and expert guidance."
    }
  ];
};

const ConsultingIntroSection: React.FC<ConsultingIntroSectionProps> = ({
  title,
  description,
  breadcrumbs,
  stats,
  primaryButtonText = "Book Consultation",
  linkText = "See client stories",
  linkHref: _linkHref = "#consulting-booking",
  onPrimaryButtonClick,
  onLinkClick,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 435);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Используем мобильные тексты на малых экранах
  const displayTitle = isMobile ? getMobileTitle(title) : title;
  const displayDescription = isMobile ? getMobileDescription(description) : description;
  const displayStats = isMobile ? getMobileStats(stats) : stats;

  // Рендерим мобильную версию
  if (isMobile) {
    return (
      <section className="intro intro--mobile">
        {/* Background ellipses */}
        <div className="intro__bg-ellipse intro__bg-ellipse--left">
          <img src={otherBgElipse1} alt="" className="intro__bg-ellipse-image" />
        </div>
        <div className="intro__bg-ellipse intro__bg-ellipse--right">
          <img src={otherBgElipse2} alt="" className="intro__bg-ellipse-image" />
        </div>

        <div className="intro__container">
          <div className="intro__content">
            {/* 1. Заголовок */}
            <div className="intro__text-group">
              <h1 className="intro__title">
                <span className="intro__title-text">{displayTitle}</span>
              </h1>
            </div>
            
            {/* 2. Текст */}
            <div className="intro__subtitle-group">
              <p className="intro__description">{displayDescription}</p>
            </div>
            
            {/* 3. Изображение */}
            <div className="intro__adaptive-image">
              <img src={otherConsultingImg} alt="Consulting" className="intro__adaptive-image-img" />
            </div>
            
            {/* 4. Кнопки */}
            <div className="intro__actions">
              <button
                className="button intro__button button--primary intro__get-started-btn"
                onClick={onPrimaryButtonClick}
              >
                {primaryButtonText}
              </button>
              <button
                className="intro__link intro__consultation-link"
                onClick={onLinkClick}
              >
                {linkText}
              </button>
            </div>
          </div>
          <div className="intro__numbers">
            {displayStats.map((stat, index) => (
              <div key={index} className="intro__number-block">
                <span className="intro__number">{stat.number}</span>
                <div className="intro__number-block-text">
                  <span className="intro__number-title">{stat.title}</span>
                  <span className="intro__number-description">{stat.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Рендерим десктопную версию
  return (
    <section className="consulting-intro">
      {/* Background ellipses */}
      <div className="intro__bg-ellipse intro__bg-ellipse--left">
        <img src={otherBgElipse1} alt="" className="intro__bg-ellipse-image" />
      </div>
      <div className="intro__bg-ellipse intro__bg-ellipse--right">
        <img src={otherBgElipse2} alt="" className="intro__bg-ellipse-image" />
      </div>

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
            <button
              className="consulting-intro__link consulting-intro__consultation-link"
              onClick={onLinkClick}
            >
              {linkText}
            </button>
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

      {/* Adaptive image for tablets and mobile */}
      <div className="intro__adaptive-image">
        <img src={otherConsultingImg} alt="Consulting" className="intro__adaptive-image-img" />
      </div>
    </section>
  );
};

export default ConsultingIntroSection;
