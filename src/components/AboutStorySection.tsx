import React from "react";

interface AboutStorySectionProps {
  title?: string;
  text?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const AboutStorySection: React.FC<AboutStorySectionProps> = ({
  title = "Our Journey: From Vision to Innovation",
  text = "Founded by a team of technology enthusiasts and business strategists, our company began with a simple mission—to make advanced AI accessible and practical for organizations of all sizes. Over the years, we've grown from a small startup into an international team, partnering with clients across multiple industries and geographies. Our commitment to continuous learning and adaptation has allowed us to stay ahead of the curve in a rapidly evolving digital landscape.",
  buttonText = "Contact us",
  onButtonClick,
}) => {
  return (
    <section className="about-story">
      <div className="container">
        <div className="about-story__gallery">
          <div className="about-story__gallery-bg"></div>
          <div className="about-story__image about-story__image--1"></div>
          <div className="about-story__image about-story__image--2"></div>
          <div className="about-story__image about-story__image--3"></div>
          <div className="about-story__image about-story__image--4"></div>
        </div>
        <div className="about-story__content">
          <h2 className="about-story__title">{title}</h2>
          <p className="about-story__text">{text}</p>
          <button className="about-story__button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
