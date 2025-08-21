import React from "react";
import contactsPhone from "../assets/images/contacts-phone.svg";
import contactsMailIcon from "../assets/images/contacts-mail-icon.svg";
import socialLinkedin from "../assets/images/social-linkedin.svg";
import socialFacebook from "../assets/images/social-facebook.svg";
import socialInstagram from "../assets/images/social-instagram.svg";

interface ContactsSectionProps {
  title?: string;
  description?: string;
  companyDetails?: {
    title: string;
    text: string;
  };
  address?: {
    title: string;
    text: string;
  };
  contacts?: {
    title: string;
    phone: string;
    email: string;
  };
  socialMedia?: {
    title: string;
    links: {
      linkedin: string;
      facebook: string;
      instagram: string;
    };
  };
  mapUrl?: string;
}

const ContactsSection: React.FC<ContactsSectionProps> = ({
  title = "Get in Touch with Us",
  description = "We're ready to answer your questions and help you take the next step in your AI journey. Fill out the form or contact us directly—our team will respond promptly to discuss your needs and find the best solution for your business.",
  companyDetails = {
    title: "Company Details:",
    text: "SIA AI Consulting Solutions\nReg. No.: 40203566336",
  },
  address = {
    title: "Address:",
    text: "Maza Nometnu Street\n65B, Agenskalns",
  },
  contacts = {
    title: "Сontacts:",
    phone: "+371 25 142 42",
    email: "info@balticai.lv",
  },
  socialMedia = {
    title: "Social media:",
    links: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4353.382107072855!2d24.055655980431226!3d56.936960736361854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed016c585da21%3A0x97c9b5cadc8a5981!2zTWF6xIEgTm9tZXTFhnUgaWVsYSA2NUIsIFplbWdhbGVzIHByaWVrxaFwaWxzxJN0YSwgUsSrZ2EsIExWLTEwMDIsIExhdHZpYQ!5e0!3m2!1sen!2sru!4v1755721774741!5m2!1sen!2sru",
}) => {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <div className="contacts__left-section">
          <h1 className="contacts__title">{title}</h1>
          <p className="contacts__text">{description}</p>

          <div className="contacts__line"></div>

          <div className="contacts__row-section">
            <div className="contacts__column-section">
              <h2 className="contacts__subtitle">{companyDetails.title}</h2>
              <p className="contacts__second-text">
                {companyDetails.text.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < companyDetails.text.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="contacts__column-section">
              <h2 className="contacts__subtitle">{address.title}</h2>
              <p className="contacts__second-text">
                {address.text.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < address.text.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

          <div className="contacts__row-section contacts__second-row">
            <div className="contacts__column-section">
              <h2 className="contacts__subtitle">{contacts.title}</h2>
              <div className="contacts__img-box">
                <img
                  className="contacts__icon"
                  src={contactsPhone}
                  alt="Phone"
                />
                <p className="contacts__second-text">{contacts.phone}</p>
              </div>
              <div className="contacts__img-box">
                <img
                  className="contacts__icon"
                  src={contactsMailIcon}
                  alt="Email"
                />
                <p className="contacts__second-text">{contacts.email}</p>
              </div>
            </div>

            <div className="contacts__column-section">
              <h2 className="contacts__subtitle">{socialMedia.title}</h2>
              <div className="contacts__social-box">
                <a href={socialMedia.links.linkedin}>
                  <img
                    className="contacts__icon"
                    src={socialLinkedin}
                    alt="LinkedIn"
                  />
                </a>
                <a href={socialMedia.links.facebook}>
                  <img
                    className="contacts__icon"
                    src={socialFacebook}
                    alt="Facebook"
                  />
                </a>
                <a href={socialMedia.links.instagram}>
                  <img
                    className="contacts__icon"
                    src={socialInstagram}
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contacts__right-section">
          <div className="cases__form consultation__form">
            <div className="consultation__form-header">
              <h3 className="consultation__form-title">
                Book Your Consultation
              </h3>
              <p className="consultation__form-subtitle">
                No fluff. Just a solution for your business automation.
              </p>
            </div>
            <form className="consultation__form-fields">
              <input
                type="text"
                placeholder="Your Name"
                className="cases__form-input consultation__form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="cases__form-input consultation__form-input"
              />
              <textarea
                placeholder="Your Message"
                className="cases__form-input consultation__form-textarea"
              ></textarea>
              <button
                type="submit"
                className="consultation__form-submit consultation__send-request-btn"
              >
                Send request
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contacts__map-section">
        <iframe
          src={mapUrl}
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactsSection;
