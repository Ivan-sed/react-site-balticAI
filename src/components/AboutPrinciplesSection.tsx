import React from "react";

interface AboutPrinciple {
  id: string;
  icon: string;
  name: string;
  description: string;
}

interface AboutPrinciplesSectionProps {
  title?: string;
  principles: AboutPrinciple[];
}

const AboutPrinciplesSection: React.FC<AboutPrinciplesSectionProps> = ({
  title = "Guiding Principles and Our Purpose",
  principles,
}) => {
  return (
    <section className="about-principles">
      <div className="container">
        <h1 className="about-principles__title">{title}</h1>
        <ul className="about-principles__list">
          {principles.map((principle) => (
            <li key={principle.id} className="about-principles__item">
              <div className={`about-principles__icon ${principle.icon}`}></div>
              <h3 className="about-principles__name">{principle.name}</h3>
              <p className="about-principles__description">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutPrinciplesSection;
