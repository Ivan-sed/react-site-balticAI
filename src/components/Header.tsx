import React from "react";
import { useHeaderScroll, useDropdown } from "../hooks";
import { logo } from "../assets";

const Header: React.FC = () => {
  const isHeaderScrolled = useHeaderScroll();
  const dropdown = useDropdown();

  return (
    <header className={`header ${isHeaderScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div className="header__logo">
          <a href="/" className="header__logo-link">
            <img src={logo} alt="AI Solutions" className="header__logo-image" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li
              ref={dropdown.dropdownRef}
              className={`header__nav-item header__nav-item--dropdown ${
                dropdown.isOpen ? "dropdown-open" : ""
              }`}
            >
              <a
                href="/services"
                className="header__nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  dropdown.toggleDropdown();
                }}
              >
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
  );
};

export default Header;
