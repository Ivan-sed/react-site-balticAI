import React, { useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Количество карточек на один слайд (адаптивно)
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 768) {
        setCardsPerSlide(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  // Общее количество слайдов
  const totalSlides = Math.ceil(members.length / cardsPerSlide);

  // Получаем карточки для текущего слайда
  const getCurrentSlideMembers = () => {
    const startIndex = currentSlide * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;
    return members.slice(startIndex, endIndex);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="about-team" id="team">
      <div className="container">
        <h2 className="about-team__title">{title}</h2>
        <div className="about-team__slider">
          <button
            className="about-team__arrow about-team__arrow--prev"
            type="button"
            aria-label="Previous team members"
            onClick={goToPrev}
          ></button>
          <div className="about-team__list-wrapper">
            <ul className={`about-team__list ${isAnimating ? 'about-team__list--animating' : ''}`}>
              {getCurrentSlideMembers().map((member, index) => (
                <li 
                  key={member.id} 
                  className="about-team__member"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="about-team__avatar"></div>
                  <h3 className="about-team__name">{member.name}</h3>
                  <p className="about-team__role">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="about-team__arrow about-team__arrow--next"
            type="button"
            aria-label="Next team members"
            onClick={goToNext}
          ></button>
        </div>
        {/* Индикация слайдов */}
        {totalSlides > 1 && (
          <div className="about-team__indicators">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`about-team__indicator ${
                  currentSlide === index ? "about-team__indicator--active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutTeamSection;
