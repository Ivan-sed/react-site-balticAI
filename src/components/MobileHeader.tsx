import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHeaderScroll, useBreadcrumbsPage } from "../hooks";
import { logo, logoDark } from "../assets";

interface MobileHeaderProps {
  onGetStartedClick?: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onGetStartedClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isHeaderScrolled = useHeaderScroll();
  const hasBreadcrumbs = useBreadcrumbsPage();

  // Определяем, какой логотип использовать
  const shouldUseDarkLogo = isHeaderScrolled || hasBreadcrumbs || isMobileMenuOpen;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Закрываем подменю при закрытии главного меню
    if (isMobileMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`mobile-header ${isHeaderScrolled ? "mobile-header--scrolled" : ""}`}>
      <div className="mobile-header__container">
        {/* Логотип */}
        <div className="mobile-header__logo">
          <Link to="/" className="mobile-header__logo-link" onClick={closeMobileMenu}>
            <img 
              src={shouldUseDarkLogo ? logoDark : logo} 
              alt="AI Solutions" 
              className="mobile-header__logo-image" 
            />
          </Link>
        </div>

        {/* Гамбургер кнопка */}
        <button 
          className={`mobile-header__burger ${isMobileMenuOpen ? "mobile-header__burger--active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="mobile-header__burger-line"></span>
          <span className="mobile-header__burger-line"></span>
          <span className="mobile-header__burger-line"></span>
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile-header__menu ${isMobileMenuOpen ? "mobile-header__menu--open" : ""}`}>
        <nav className="mobile-header__nav">
          <ul className="mobile-header__nav-list">
            {/* Services с подменю */}
            <li className="mobile-header__nav-item mobile-header__nav-item--dropdown">
              <button
                className="mobile-header__nav-link mobile-header__nav-button"
                onClick={toggleServicesMenu}
              >
                <span className="mobile-header__nav-text">Services</span>
                <span className={`mobile-header__nav-arrow ${isServicesOpen ? "mobile-header__nav-arrow--open" : ""}`}></span>
              </button>
              <ul className={`mobile-header__submenu ${isServicesOpen ? "mobile-header__submenu--open" : ""}`}>
                <li className="mobile-header__submenu-item">
                  <Link 
                    to="/ai-solutions" 
                    className="mobile-header__submenu-link"
                    onClick={closeMobileMenu}
                  >
                    AI Solutions
                  </Link>
                </li>
                <li className="mobile-header__submenu-item">
                  <Link 
                    to="/consulting" 
                    className="mobile-header__submenu-link"
                    onClick={closeMobileMenu}
                  >
                    Consulting
                  </Link>
                </li>
                <li className="mobile-header__submenu-item">
                  <Link 
                    to="/it-solutions" 
                    className="mobile-header__submenu-link"
                    onClick={closeMobileMenu}
                  >
                    IT Solutions
                  </Link>
                </li>
              </ul>
            </li>

            {/* Остальные пункты меню */}
            <li className="mobile-header__nav-item">
              <Link 
                to="/cases" 
                className="mobile-header__nav-link"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="mobile-header__nav-item">
              <Link 
                to="/about-us" 
                className="mobile-header__nav-link"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            <li className="mobile-header__nav-item">
              <Link 
                to="/contacts" 
                className="mobile-header__nav-link"
                onClick={closeMobileMenu}
              >
                Contacts
              </Link>
            </li>
          </ul>

          {/* Кнопки действий */}
          <div className="mobile-header__actions">
            <button 
              className="button mobile-header__button button--outline mobile-header__button--outline"
              onClick={() => {
                onGetStartedClick && onGetStartedClick();
                closeMobileMenu();
              }}
            >
              Get started
            </button>
            <button 
              className="button mobile-header__button button--filled mobile-header__button--filled"
              onClick={closeMobileMenu}
            >
              Login
            </button>
          </div>

          {/* Иконки соцсетей */}
          <div className="mobile-header__social">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-header__social-link mobile-header__social-link--linkedin"
              aria-label="LinkedIn"
            ></a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-header__social-link mobile-header__social-link--facebook"
              aria-label="Facebook"
            ></a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-header__social-link mobile-header__social-link--instagram"
              aria-label="Instagram"
            ></a>
          </div>
        </nav>
      </div>

      {/* Оверлей для закрытия меню */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-header__overlay"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default MobileHeader;
