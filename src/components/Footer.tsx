import React from "react";
import { Link } from "react-router-dom";
import { footerLogo } from "../assets";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
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
          <Link to="/privacy-policy" className="footer__legal-link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="footer__legal-link">
            Terms of Use
          </Link>
          <Link to="/cookie-policy" className="footer__legal-link">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
