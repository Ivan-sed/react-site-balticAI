import React from "react";

interface AboutAchievement {
  id: string;
  icon: string;
  name: string;
  description: string;
}

interface AboutAchievementsSectionProps {
  title?: string;
  achievements: AboutAchievement[];
}

const AboutAchievementsSection: React.FC<AboutAchievementsSectionProps> = ({
  title = "Achievements That Set Us Apart",
  achievements,
}) => {
  return (
    <section className="about-achievements">
      <div className="container">
        <h2 className="about-achievements__title">{title}</h2>
        <ul className="about-achievements__list">
          {achievements.map((achievement) => (
            <li key={achievement.id} className="about-achievements__item">
              <div
                className={`about-achievements__icon ${achievement.icon}`}
              ></div>
              <h3 className="about-achievements__name">{achievement.name}</h3>
              <p className="about-achievements__description">
                {achievement.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutAchievementsSection;
