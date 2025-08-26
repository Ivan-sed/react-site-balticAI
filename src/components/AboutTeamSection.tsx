import React, { useState, useEffect, useRef } from "react";

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
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Определяем количество видимых элементов в зависимости от ширины экрана
  const [visibleItems, setVisibleItems] = useState(3);
  
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth <= 768) {
        setVisibleItems(1);
      } else {
        setVisibleItems(3);
      }
    };

    // Устанавливаем начальное значение
    updateVisibleItems();

    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', updateVisibleItems);
    
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  // Сбрасываем currentSlide при изменении visibleItems
  useEffect(() => {
    setCurrentSlide(0);
  }, [visibleItems]);

  const maxSlide = Math.max(0, members.length - visibleItems);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/Mouse events for drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft.current = currentSlide;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2;
    const newSlide = Math.round(scrollLeft.current - walk / 300);
    if (newSlide >= 0 && newSlide <= maxSlide) {
      setCurrentSlide(newSlide);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="about-team" id="team">
      <div className="container">
        <h2 className="about-team__title">{title}</h2>
        <div className="about-team__slider">
          <button
            className="about-team__arrow about-team__arrow--prev"
            type="button"
            aria-label="Previous team member"
            onClick={goToPrev}
          ></button>
          <div
            className="about-team__list-wrapper"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
          >
            <ul
              className="about-team__list"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isDragging ? "none" : "transform 0.3s ease",
              }}
            >
              {members.map((member) => (
                <li key={member.id} className="about-team__member">
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
            aria-label="Next team member"
            onClick={goToNext}
          ></button>
        </div>
        {/* Индикация слайдов */}
        {members.length > visibleItems && (
          <div className="about-team__indicators">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
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
