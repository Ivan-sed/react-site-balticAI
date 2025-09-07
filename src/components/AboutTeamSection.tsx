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
  const [isMobile, setIsMobile] = useState(false);
  
  // Touch события для свайпа
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Количество карточек на один слайд (адаптивно)
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  
  useEffect(() => {
    const updateCardsPerSlide = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
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

  // Минимальное расстояние для распознавания свайпа
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      goToNext();
    }
    if (isRightSwipe && currentSlide > 0) {
      goToPrev();
    }
  };

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
          {!isMobile && (
            <button
              className="about-team__arrow about-team__arrow--prev"
              type="button"
              aria-label="Previous team members"
              onClick={goToPrev}
            ></button>
          )}
          <div 
            className="about-team__list-wrapper"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <ul className={`about-team__list ${isAnimating ? 'about-team__list--animating' : ''}`}>
              {getCurrentSlideMembers().map((member, index) => (
                <li 
                  key={member.id} 
                  className="about-team__member"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="about-team__avatar"
                    style={{
                      backgroundImage: member.avatar ? `url(${member.avatar})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
                  <h3 className="about-team__name">{member.name}</h3>
                  <p className="about-team__role">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
          {!isMobile && (
            <button
              className="about-team__arrow about-team__arrow--next"
              type="button"
              aria-label="Next team members"
              onClick={goToNext}
            ></button>
          )}
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
