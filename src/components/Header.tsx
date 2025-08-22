import React from "react";
import { Link } from "react-router-dom";
import { useHeaderScroll, useDropdown } from "../hooks";
import { logo } from "../assets";

interface HeaderProps {
  onGetStartedClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  const isHeaderScrolled = useHeaderScroll();
  const dropdown = useDropdown();

  return (
    <header className={`header ${isHeaderScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <img src={logo} alt="AI Solutions" className="header__logo-image" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li
              ref={dropdown.dropdownRef}
              className={`header__nav-item header__nav-item--dropdown ${
                dropdown.isOpen ? "dropdown-open" : ""
              }`}
            >
              <Link
                to="/services"
                className="header__nav-link"
                onClick={(e) => {
                  // Если дропдаун открыт, то работаем как дропдаун
                  if (dropdown.isOpen) {
                    e.preventDefault();
                    dropdown.toggleDropdown();
                  }
                  // Иначе переходим на страницу Services
                }}
              >
                <span className="header__nav-text">Services</span>
                <span className="header__nav-arrow"></span>
              </Link>
              <ul className="header__dropdown">
                <li className="header__dropdown-item">
                  <Link to="/ai-solutions" className="header__dropdown-link">
                    AI Solutions
                  </Link>
                </li>
                <li className="header__dropdown-item">
                  <Link to="/consulting" className="header__dropdown-link">
                    Consulting
                  </Link>
                </li>
                <li className="header__dropdown-item">
                  <Link to="/it-solutions" className="header__dropdown-link">
                    IT Solutions
                  </Link>
                </li>
              </ul>
            </li>
            <li className="header__nav-item">
              <Link to="/cases" className="header__nav-link">
                Projects
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about-us" className="header__nav-link">
                About us
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contacts" className="header__nav-link">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <button 
            className="button header__button button--outline header__button--outline"
            onClick={onGetStartedClick}
          >
            Get started
          </button>
          <button className="button header__button button--filled header__button--filled">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
