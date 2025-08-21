import React from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

interface AboutTeamSectionProps {
  title?: string;
  members: TeamMember[];
}

const AboutTeamSection: React.FC<AboutTeamSectionProps> = ({
  title = "People: The great minds behind our work",
  members,
}) => {
  return (
    <section className="about-team">
      <div className="container">
        <h2 className="about-team__title">{title}</h2>
        <div className="about-team__slider">
          <button
            className="about-team__arrow about-team__arrow--prev"
            type="button"
            aria-label="Previous team member"
          ></button>
          <ul className="about-team__list">
            {members.map((member) => (
              <li key={member.id} className="about-team__member">
                <div className="about-team__avatar"></div>
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role">{member.role}</p>
              </li>
            ))}
          </ul>
          <button
            className="about-team__arrow about-team__arrow--next"
            type="button"
            aria-label="Next team member"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
