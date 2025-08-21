import React from "react";
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

  return (
    <section className={`testimonials ${className}`}>
      <div className="testimonials__container">
        <h2 className="testimonials__title">{title}</h2>

        <div className="testimonials__content">
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

          <div className="testimonials__main">
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
