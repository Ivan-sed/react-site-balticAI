import React from "react";
import {
  logo,
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
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  navArrow,
  newsletterIcon,
  footerLogo,
  // Дополнительные изображения для правильного отображения
  firstBackground,
  secondBackground,
  thirdBackground,
  fourthBackground,
  fifthBackground,
  cardSales,
  cardEnquiry,
  badgeIcon,
  aiDiagramCircle,
  img67,
  img89,
  statBackground,
  statIcon,
  chart,
  trendDown,
  percent,
  projectClinic,
  projectCosmetology,
  projectCalculator,
  projectTravel,
  projectBasic,
  projectLogo,
  testimonialAvatar,
  processArrow1,
  processArrow2,
  transformationStep1,
  transformationStep2,
  transformationStep3,
  transformationStep4,
  itSolutions,
  itSolutions2,
  aiConsultation,
  aiConsultation2,
} from "../assets";

const HomePage: React.FC = () => {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img
                src={logo}
                alt="AI Solutions"
                className="header__logo-image"
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item header__nav-item--dropdown">
                <a href="/services" className="header__nav-link">
                  <span className="header__nav-text">Services</span>
                  <span className="header__nav-arrow"></span>
                </a>
                <ul className="header__dropdown">
                  <li className="header__dropdown-item">
                    <a href="/ai-solutions" className="header__dropdown-link">
                      AI Solutions
                    </a>
                  </li>
                  <li className="header__dropdown-item">
                    <a href="/consulting" className="header__dropdown-link">
                      Consulting
                    </a>
                  </li>
                  <li className="header__dropdown-item">
                    <a href="/it-solutions" className="header__dropdown-link">
                      IT Solutions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header__nav-item">
                <a href="/cases" className="header__nav-link">
                  Projects
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/about-us" className="header__nav-link">
                  About us
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/contacts" className="header__nav-link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__actions">
            <button className="button header__button button--outline header__button--outline">
              Get started
            </button>
            <button className="button header__button button--filled header__button--filled">
              Login
            </button>
          </div>
        </div>
      </header>

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
              <button className="button hero__button button--primary hero__button--primary">
                Get started
              </button>
              <a href="#consultation" className="hero__link">
                Consultation
              </a>
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
                    <button className="button service-card__button button--primary service-card__button--primary">
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
                  <button className="button service-card__button button--primary service-card__button--primary">
                    View more
                  </button>
                </div>
              </article>

              {/* AI Consultation Card */}
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
                  <button className="button service-card__button button--primary service-card__button--primary">
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
              <button className="button feature-card__button button--gradient feature-card__button--gradient">
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
      <section className="projects" id="projects">
        <div className="projects__container">
          <header className="projects__header">
            <div className="projects__header-content">
              <h2 className="projects__title">Featured Projects</h2>
              <p className="projects__subtitle">
                Take a look at some of our standout AI solutions
              </p>
            </div>
          </header>

          <div className="projects__grid">
            <article className="project-card project-card--clinic">
              <div className="project-card__content">
                <div className="project-card__text-group">
                  <h3 className="project-card__title">Clinic Chatbot</h3>
                  <p className="project-card__description">
                    Custom chatbot for a private clinic to reduce the calling
                    pressure and help clients find out info etc.
                  </p>
                </div>
                <a href="/case-page" className="project-card__link">
                  <span className="project-card__link-text">View Project</span>
                  <span className="project-card__link-arrow"></span>
                </a>
              </div>
            </article>

            <article className="project-card project-card--cosmetology">
              <div className="project-card__content">
                <div className="project-card__text-group">
                  <h3 className="project-card__title">Cosmetology chatbot</h3>
                  <p className="project-card__description">
                    AI-powered beauty consultant that provides personalized
                    skincare recommendations and appointment scheduling.
                  </p>
                </div>
                <a href="/case-page" className="project-card__link">
                  <span className="project-card__link-text">View Project</span>
                  <span className="project-card__link-arrow"></span>
                </a>
              </div>
            </article>

            <article className="project-card project-card--calculator">
              <div className="project-card__content">
                <div className="project-card__text-group">
                  <h3 className="project-card__title">AI calculator</h3>
                  <p className="project-card__description">
                    Smart calculator with natural language processing that
                    solves complex mathematical problems and equations.
                  </p>
                </div>
                <a href="/case-page" className="project-card__link">
                  <span className="project-card__link-text">View Project</span>
                  <span className="project-card__link-arrow"></span>
                </a>
              </div>
            </article>

            <article className="project-card project-card--travel">
              <div className="project-card__content">
                <div className="project-card__text-group">
                  <h3 className="project-card__title">Travel chatbot</h3>
                  <p className="project-card__description">
                    Intelligent travel assistant that helps plan trips, find
                    deals, and provides real-time travel information.
                  </p>
                </div>
                <a href="/case-page" className="project-card__link">
                  <span className="project-card__link-text">View Project</span>
                  <span className="project-card__link-arrow"></span>
                </a>
              </div>
            </article>
          </div>

          <div className="projects__actions">
            <button className="button projects__button button--primary projects__button--primary">
              View all
            </button>
          </div>
        </div>
      </section>

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
                <button className="button contact-card__button button--primary contact-card__button--primary">
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
                <button className="button contact-card__button button--primary contact-card__button--primary">
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
                  <button className="button industry-card__button button--primary industry-card__button--primary">
                    Get started
                  </button>
                  <a href="#" className="industry-card__link">
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
                  <button className="button industry-card__button button--primary industry-card__button--primary">
                    Get started
                  </button>
                  <a href="#" className="industry-card__link">
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
                  <button className="button industry-card__button button--primary industry-card__button--primary">
                    Get started
                  </button>
                  <a href="#" className="industry-card__link">
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
                  <button className="button industry-card__button button--primary industry-card__button--primary">
                    Get started
                  </button>
                  <a href="#" className="industry-card__link">
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
                  <button className="button industry-card__button button--primary industry-card__button--primary">
                    Get started
                  </button>
                  <a href="#" className="industry-card__link">
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
                  <button className="button industry-card__button button--primary industry-card__button--primary">
                    Get started
                  </button>
                  <a href="#" className="industry-card__link">
                    Consultation
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <div className="clients__container">
          <div className="clients__content">
            <h2 className="clients__title">Trusted by Leading Companies</h2>
            <div className="clients__logos">
              <div className="logo-separator logo-separator--left"></div>
              <div className="client-logo">
                <img
                  src={client1}
                  alt="Client 1"
                  className="client-logo__img"
                />
              </div>
              <div className="logo-separator"></div>
              <div className="client-logo">
                <img
                  src={client2}
                  alt="Client 2"
                  className="client-logo__img"
                />
              </div>
              <div className="logo-separator"></div>
              <div className="client-logo">
                <img
                  src={client3}
                  alt="Client 3"
                  className="client-logo__img"
                />
              </div>
              <div className="logo-separator"></div>
              <div className="client-logo">
                <img
                  src={client4}
                  alt="Client 4"
                  className="client-logo__img"
                />
              </div>
              <div className="logo-separator"></div>
              <div className="client-logo">
                <img
                  src={client5}
                  alt="Client 5"
                  className="client-logo__img"
                />
              </div>
              <div className="logo-separator logo-separator--right"></div>
              <div className="client-logo">
                <img
                  src={client6}
                  alt="Client 6"
                  className="client-logo__img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="stat-card" data-accordion-item="">
                <div className="stat-card__header">
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

              <div className="stat-card" data-accordion-item="">
                <div className="stat-card__header">
                  <h3 className="stat-card__title">50+ Team members</h3>
                  <div className="stat-card__icon"></div>
                </div>
                <p className="stat-card__description">
                  Our diverse team of experts includes AI specialists,
                  developers, consultants, and industry veterans who bring their
                  unique perspectives and skills to every project.
                </p>
              </div>

              <div className="stat-card" data-accordion-item="">
                <div className="stat-card__header">
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
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <img
              src={footerLogo}
              alt="AI Solutions"
              className="footer__logo-img"
            />
          </div>

          <div className="footer__info">
            <div className="footer__section">
              <div className="footer__section-content">
                <h4 className="footer__section-title">Company Details:</h4>
                <p className="footer__text">
                  SIA AI Consulting Solutions
                  <br />
                  Reg. No.: 40203566336
                </p>
              </div>
            </div>

            <div className="footer__section">
              <div className="footer__section-content">
                <h4 className="footer__section-title">Address:</h4>
                <p className="footer__text">
                  Maza Nometnu Street
                  <br />
                  65B, Agenskalns
                </p>
              </div>
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__contact-info">
              <a href="tel:+37125142420" className="footer__phone">
                +371 25 142 42
              </a>
              <a href="mailto:info@balticai.lv" className="footer__email">
                info@balticai.lv
              </a>
            </div>
            <div className="footer__social">
              <a
                href="#"
                className="social-link social-link--linkedin"
                aria-label="LinkedIn"
              ></a>
              <a
                href="#"
                className="social-link social-link--facebook"
                aria-label="Facebook"
              ></a>
              <a
                href="#"
                className="social-link social-link--instagram"
                aria-label="Instagram"
              ></a>
            </div>
          </div>

          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__legal-link">
              Terms of Use
            </a>
            <a href="#" className="footer__legal-link">
              Cookie Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
