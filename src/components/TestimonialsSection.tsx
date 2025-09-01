import React, { useState, useEffect } from "react";
import { useTestimonials } from "../hooks";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "../assets";

interface TestimonialsSectionProps {
  title?: string;
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "What Our Clients Say About Us",
  className = "",
}) => {
  const {
    activeClient,
    currentTestimonial,
    isTransitioning,
    switchTestimonial,
  } = useTestimonials();
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const leftClients = [
    { id: "client1", src: client1, alt: "Client 1" },
    { id: "client2", src: client2, alt: "Client 2" },
    { id: "client3", src: client3, alt: "Client 3" },
  ];

  const rightClients = [
    { id: "client4", src: client4, alt: "Client 4" },
    { id: "client5", src: client5, alt: "Client 5" },
    { id: "client6", src: client6, alt: "Client 6" },
  ];

  const allClients = [...leftClients, ...rightClients];
  const currentIndex = allClients.findIndex(client => client.id === activeClient);
  const currentClient = allClients[currentIndex];

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - next testimonial
      const nextIndex = (currentIndex + 1) % allClients.length;
      switchTestimonial(allClients[nextIndex].id);
    }

    if (isRightSwipe) {
      // Swipe right - previous testimonial
      const prevIndex = currentIndex === 0 ? allClients.length - 1 : currentIndex - 1;
      switchTestimonial(allClients[prevIndex].id);
    }
  };

  return (
    <section className={`testimonials ${className}`}>
      <div className="testimonials__container">
        <h2 className="testimonials__title">{title}</h2>

        <div className="testimonials__content">
          {/* Desktop version - left logos */}
          <div className="testimonials__logos testimonials__logos--left">
            {leftClients.map((client, index) => (
              <React.Fragment key={client.id}>
                <div
                  className={`client-logo ${
                    activeClient === client.id ? "client-logo--active" : ""
                  }`}
                  onClick={() => switchTestimonial(client.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="client-logo__img"
                  />
                </div>
                {index < leftClients.length - 1 && (
                  <div className="logo-separator logo-separator--left"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile version - single active logo */}
          <div className="testimonials__mobile-logo">
            <div className="client-logo client-logo--active">
              <img
                src={currentClient.src}
                alt={currentClient.alt}
                className="client-logo__img"
              />
            </div>
          </div>

          {/* Main testimonial content with swipe support */}
          <div 
            className="testimonials__main testimonials__swipe-area"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <blockquote
              className="testimonial testimonial--featured"
              style={{ opacity: isTransitioning ? 0.5 : 1 }}
            >
              <p className="testimonial__text">"{currentTestimonial.text}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar"></div>
                <div className="testimonial__info">
                  <cite className="testimonial__name">
                    {currentTestimonial.name}
                  </cite>
                  <span className="testimonial__role">
                    {currentTestimonial.role}
                  </span>
                </div>
              </div>
            </blockquote>
          </div>

          {/* Desktop version - right logos */}
          <div className="testimonials__logos testimonials__logos--right">
            {rightClients.map((client, index) => (
              <React.Fragment key={client.id}>
                <div
                  className={`client-logo ${
                    activeClient === client.id ? "client-logo--active" : ""
                  }`}
                  onClick={() => switchTestimonial(client.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="client-logo__img"
                  />
                </div>
                {index < rightClients.length - 1 && (
                  <div className="logo-separator logo-separator--right"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile version - dots indicator */}
          <div className="testimonials__dots">
            {allClients.map((client) => (
              <div
                key={client.id}
                className={`testimonials__dot ${
                  activeClient === client.id ? "testimonials__dot--active" : ""
                }`}
                onClick={() => switchTestimonial(client.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
