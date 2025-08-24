import React from "react";
import { useNavigate } from "react-router-dom";
import { useAccordion, useBookingPopup } from "../hooks";
import {
  Header,
  ProjectsSection,
  TestimonialsSection,
  Footer,
  BookingPopup,
} from "../components";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  industryEcommerce,
  industryTravel,
  industryGovernment,
  industryHealthcare,
  industryLogistics,
  industryNgo,
  navArrow,
  newsletterIcon,
} from "../assets";

const HomePage: React.FC = () => {
  // Инициализация всех хуков
  const navigate = useNavigate();
  const accordion = useAccordion(0);
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  return (
    <div className="page">
      {/* Header */}
      <Header onGetStartedClick={openPopup} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__text-group">
              <h1 className="hero__title">
                <span className="hero__title-text">See the </span>
                <span className="hero__title-accent">ROI</span>
                <span className="hero__title-text"> Then decide</span>
              </h1>
              <div className="hero__subtitle-group">
                <p className="hero__subtitle">
                  Automate your business processes and boost efficiency
                </p>
                <p className="hero__description">
                  Enjoy fast deployment, ongoing updates, and dedicated support,
                  so your business stays ahead in a rapidly changing digital
                  world.
                </p>
              </div>
            </div>
            <div className="hero__actions">
              <button
                className="button hero__button button--primary hero__button--primary"
                onClick={openPopup}
              >
                Get started
              </button>
              <button className="hero__link" onClick={openPopup}>
                Consultation
              </button>
            </div>
          </div>
        </div>
        <div className="hero__partners">
          <div className="hero__partners-list">
            <div className="hero__partners-item">
              <img
                src={partner1}
                alt="Partner 1"
                className="hero__partners-logo"
              />
            </div>
            <div className="hero__partners-item">
              <img
                src={partner2}
                alt="Partner 2"
                className="hero__partners-logo"
              />
            </div>
            <div className="hero__partners-item">
              <img
                src={partner3}
                alt="Partner 3"
                className="hero__partners-logo"
              />
            </div>
            <div className="hero__partners-item">
              <img
                src={partner4}
                alt="Partner 4"
                className="hero__partners-logo"
              />
            </div>
            <div className="hero__partners-item">
              <img
                src={partner5}
                alt="Partner 5"
                className="hero__partners-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services__container">
          <header className="services__header">
            <div className="services__header-content">
              <h2 className="services__title">Our Services</h2>
              <p className="services__subtitle">
                Transforming businesses with cutting-edge AI solutions
              </p>
            </div>
          </header>

          <div className="services__grid">
            {/* AI Solutions Card */}
            <article className="service-card service-card--featured">
              <div className="service-card__header">
                <div className="service-card__badge">
                  <span className="service-card__badge-item service-card__badge-item--popular">
                    <span className="service-card__badge-icon"></span>
                    <span className="service-card__badge-text">
                      Most popular
                    </span>
                  </span>
                </div>
              </div>
              <div className="service-card__main">
                <div className="service-card__content">
                  <div className="service-card__info">
                    <div className="service-card__text-group">
                      <h3 className="service-card__title">AI Solutions</h3>
                      <p className="service-card__description">
                        Offering ready-made AI employees and strategic guidance
                        for integrating.
                      </p>
                    </div>
                    <button
                      className="button service-card__button button--primary service-card__button--primary"
                      onClick={() => {
                        console.log("AI Solutions button clicked");
                        navigate("/ai-solutions");
                        setTimeout(() => window.scrollTo(0, 0), 100);
                      }}
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <div className="services__row">
              {/* IT Solutions Card */}
              <article className="service-card service-card--it-solutions">
                <div className="service-card__header"></div>
                <div className="service-card__content">
                  <div className="service-card__text-group">
                    <h3 className="service-card__title">IT Solutions</h3>
                    <p className="service-card__description">
                      Automate and optimize your business processes with AI.
                    </p>
                  </div>
                  <button
                    className="button service-card__button button--primary service-card__button--primary"
                    onClick={() => {
                      console.log("IT Solutions button clicked");
                      navigate("/it-solutions");
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}
                  >
                    View more
                  </button>
                </div>
              </article>

              {/* Consulting Card */}
              <article className="service-card service-card--consultation">
                <div className="service-card__header"></div>
                <div className="service-card__content">
                  <div className="service-card__text-group">
                    <h3 className="service-card__title">AI Consultation</h3>
                    <p className="service-card__description">
                      Strategic guidance to plan, scope, and launch AI
                      initiatives tailored to your business.
                    </p>
                  </div>
                  <button
                    className="button service-card__button button--primary service-card__button--primary"
                    onClick={() => {
                      console.log("AI Consultation button clicked");
                      navigate("/consulting");
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}
                  >
                    View more
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          {/* Business Automation Feature */}
          <article className="feature-card feature-card--automation">
            <div className="feature-card__content">
              <div className="feature-card__text-group">
                <h3 className="feature-card__title">
                  Accelerate Your Business with AI-Powered Solutions
                </h3>
                <p className="feature-card__description">
                  Empower your business with intelligent automation, custom AI
                  chatbots, and real-time data solutions. Our tailored approach
                  helps you streamline operations, boost customer satisfaction,
                  and unlock new growth opportunities—no matter your industry.
                </p>
              </div>
            </div>
            <div className="feature-card__action">
              <button
                className="button feature-card__button button--gradient feature-card__button--gradient"
                onClick={openPopup}
              >
                Book now
              </button>
            </div>
          </article>

          {/* Time Savings Feature */}
          <article className="feature-card feature-card--time">
            <div className="feature-card__content">
              <div className="feature-card__text-group">
                <h3 className="feature-card__title">Save Time. Work Smarter</h3>
                <p className="feature-card__description">
                  Automate repetitive tasks and save up to 67% of your team's
                  time every week.
                </p>
              </div>
              <div className="feature-card__stats">
                <span className="feature-card__stats-label">Time Savings</span>
              </div>
            </div>
          </article>

          {/* Testimonial Feature */}
          <article className="feature-card feature-card--testimonial">
            <div className="feature-card__content">
              <blockquote className="feature-card__testimonial">
                <p className="feature-card__testimonial-text">
                  "Our AI chatbot has revolutionized our customer service. We're
                  now able to provide instant support to our guests at any time,
                  enhancing their experience even before they arrive"
                </p>
                <cite className="feature-card__testimonial-author">
                  — Michael Blue, General Manager at Bluesky Boutique Hotels
                </cite>
              </blockquote>
            </div>
          </article>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section className="contact">
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__text-group">
              <h2 className="contact__title">
                Ready to discuss your project and get started?
              </h2>
              <p className="contact__description">
                Leave your contact details and we'll get in touch soon to
                discuss your goals and answer any questions.
              </p>
            </div>
            <div className="contact__timer">
              <span className="timer">10:00</span>
              <span className="timer__label">
                We'll respond before the timer runs out
              </span>
            </div>
          </div>

          <div className="contact__options">
            <article className="contact-card contact-card--sales">
              <div className="contact-card__content">
                <div className="contact-card__text-group">
                  <h3 className="contact-card__title">Sales</h3>
                  <p className="contact-card__description">
                    Speak to our sales team about plans, pricing, enterprise
                    contracts, or request a demo.
                  </p>
                </div>
                <button
                  className="button contact-card__button button--primary contact-card__button--primary"
                  onClick={openPopup}
                >
                  Talk to sales
                </button>
              </div>
              <div className="contact-card__visual">
                <div className="contact-card__icon"></div>
              </div>
            </article>

            <article className="contact-card contact-card--enquiry">
              <div className="contact-card__content">
                <div className="contact-card__text-group">
                  <h3 className="contact-card__title">General Enquiry</h3>
                  <p className="contact-card__description">
                    For other queries, please get in touch with us via email.
                  </p>
                </div>
                <button
                  className="button contact-card__button button--primary contact-card__button--primary"
                  onClick={openPopup}
                >
                  Get started
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries">
        <div className="industries__container">
          <h2 className="industries__title">
            AI Solutions for Leading Business Industries
          </h2>

          <div className="industries__grid">
            <article className="industry-card">
              <div className="industry-card__image">
                <img
                  src={industryEcommerce}
                  alt="E-commerce"
                  className="industry-card__img"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <h3 className="industry-card__title">E-commerce</h3>
                  <p className="industry-card__description">
                    We specialize in delivering tailored AI solutions across
                    diverse sectors. Our expertise helps businesses in each
                    industry optimize processes, reduce costs, and enhance
                    customer experiences.
                  </p>
                </div>
                <div className="industry-card__actions">
                  <button
                    className="button industry-card__button button--primary industry-card__button--primary"
                    onClick={openPopup}
                  >
                    Get started
                  </button>
                  <a
                    href="#"
                    className="industry-card__link"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup();
                    }}
                  >
                    Consultation
                  </a>
                </div>
              </div>
            </article>

            <article className="industry-card">
              <div className="industry-card__image">
                <img
                  src={industryTravel}
                  alt="Travel"
                  className="industry-card__img"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <h3 className="industry-card__title">Travel</h3>
                  <p className="industry-card__description">
                    We specialize in delivering tailored AI solutions across
                    diverse sectors. Our expertise helps businesses in each
                    industry optimize processes, reduce costs, and enhance
                    customer experiences.
                  </p>
                </div>
                <div className="industry-card__actions">
                  <button
                    className="button industry-card__button button--primary industry-card__button--primary"
                    onClick={openPopup}
                  >
                    Get started
                  </button>
                  <a
                    href="#"
                    className="industry-card__link"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup();
                    }}
                  >
                    Consultation
                  </a>
                </div>
              </div>
            </article>

            <article className="industry-card">
              <div className="industry-card__image">
                <img
                  src={industryGovernment}
                  alt="Government"
                  className="industry-card__img"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <h3 className="industry-card__title">Government</h3>
                  <p className="industry-card__description">
                    We specialize in delivering tailored AI solutions across
                    diverse sectors. Our expertise helps businesses in each
                    industry optimize processes, reduce costs, and enhance
                    customer experiences.
                  </p>
                </div>
                <div className="industry-card__actions">
                  <button
                    className="button industry-card__button button--primary industry-card__button--primary"
                    onClick={openPopup}
                  >
                    Get started
                  </button>
                  <a
                    href="#"
                    className="industry-card__link"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup();
                    }}
                  >
                    Consultation
                  </a>
                </div>
              </div>
            </article>

            <article className="industry-card">
              <div className="industry-card__image">
                <img
                  src={industryHealthcare}
                  alt="Healthcare"
                  className="industry-card__img"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <h3 className="industry-card__title">Healthcare</h3>
                  <p className="industry-card__description">
                    We specialize in delivering tailored AI solutions across
                    diverse sectors. Our expertise helps businesses in each
                    industry optimize processes, reduce costs, and enhance
                    customer experiences.
                  </p>
                </div>
                <div className="industry-card__actions">
                  <button
                    className="button industry-card__button button--primary industry-card__button--primary"
                    onClick={openPopup}
                  >
                    Get started
                  </button>
                  <a
                    href="#"
                    className="industry-card__link"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup();
                    }}
                  >
                    Consultation
                  </a>
                </div>
              </div>
            </article>

            <article className="industry-card">
              <div className="industry-card__image">
                <img
                  src={industryLogistics}
                  alt="Logistics"
                  className="industry-card__img"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <h3 className="industry-card__title">Logistics</h3>
                  <p className="industry-card__description">
                    We specialize in delivering tailored AI solutions across
                    diverse sectors. Our expertise helps businesses in each
                    industry optimize processes, reduce costs, and enhance
                    customer experiences.
                  </p>
                </div>
                <div className="industry-card__actions">
                  <button
                    className="button industry-card__button button--primary industry-card__button--primary"
                    onClick={openPopup}
                  >
                    Get started
                  </button>
                  <a
                    href="#"
                    className="industry-card__link"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup();
                    }}
                  >
                    Consultation
                  </a>
                </div>
              </div>
            </article>

            <article className="industry-card">
              <div className="industry-card__image">
                <img
                  src={industryNgo}
                  alt="NGO"
                  className="industry-card__img"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <h3 className="industry-card__title">NGO</h3>
                  <p className="industry-card__description">
                    We specialize in delivering tailored AI solutions across
                    diverse sectors. Our expertise helps businesses in each
                    industry optimize processes, reduce costs, and enhance
                    customer experiences.
                  </p>
                </div>
                <div className="industry-card__actions">
                  <button
                    className="button industry-card__button button--primary industry-card__button--primary"
                    onClick={openPopup}
                  >
                    Get started
                  </button>
                  <a
                    href="#"
                    className="industry-card__link"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup();
                    }}
                  >
                    Consultation
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Section */}
      <section className="about" id="about">
        <div className="about__container">
          <div className="about__visual">
            <h2 className="about__overlay-title">
              Who We Are: Innovators in Business Automation
            </h2>
          </div>

          <div className="about__content">
            <div className="about__text-block">
              <span className="about__text">About us</span>
              <img src={navArrow} alt="Arrow" className="about__arrow" />
            </div>
            <div className="about__stats">
              <div
                className={`stat-card ${accordion.isActive(0) ? "active" : ""}`}
                data-accordion-item=""
              >
                <div
                  className="stat-card__header"
                  onClick={() => accordion.toggleItem(0)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="stat-card__title">10 Years of Experience</h3>
                  <div className="stat-card__icon"></div>
                </div>
                <p className="stat-card__description">
                  Our top priority is the sustainable growth of your company! We
                  empower you to gain full control of your IT. Let's come
                  together to explore how we can add significant value to your
                  business.
                </p>
              </div>

              <div
                className={`stat-card ${accordion.isActive(1) ? "active" : ""}`}
                data-accordion-item=""
              >
                <div
                  className="stat-card__header"
                  onClick={() => accordion.toggleItem(1)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="stat-card__title">50+ Team members</h3>
                  <div className="stat-card__icon"></div>
                </div>
                <p className="stat-card__description">
                  Our diverse team of experts includes AI specialists,
                  developers, consultants, and industry veterans who bring their
                  unique perspectives and skills to every project.
                </p>
              </div>

              <div
                className={`stat-card ${accordion.isActive(2) ? "active" : ""}`}
                data-accordion-item=""
              >
                <div
                  className="stat-card__header"
                  onClick={() => accordion.toggleItem(2)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="stat-card__title">2 Offices</h3>
                  <div className="stat-card__icon"></div>
                </div>
                <p className="stat-card__description">
                  With offices strategically located in key tech hubs, we
                  maintain a strong local presence while serving clients
                  globally, ensuring responsive support and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter" id="newsletter">
        <div className="newsletter__container">
          <div className="newsletter__content">
            <div className="newsletter__icon">
              <img
                src={newsletterIcon}
                alt="Newsletter"
                className="newsletter__icon-img"
              />
            </div>
            <div className="newsletter__text">
              <h2 className="newsletter__title">Leave us your email</h2>
              <p className="newsletter__description">
                We will contact you about service option
              </p>
            </div>
          </div>

          <form className="newsletter__form">
            <input
              type="email"
              placeholder="Enter your Email"
              className="newsletter__input"
              required
            />
            <button
              type="submit"
              className="button newsletter__button button--primary newsletter__button--primary"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Booking Popup */}
      <BookingPopup
        isOpen={isOpen}
        onClose={closePopup}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default HomePage;
