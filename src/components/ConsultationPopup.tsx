import React, { useEffect } from "react";
import "./ConsultationPopup.css";
import { freeGif } from "../assets/images";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingClick?: () => void;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({
  isOpen,
  onClose,
  onBookingClick,
}) => {
  const handleBookingClick = () => {
    if (onBookingClick) {
      onBookingClick();
    }
    window.open("https://calendly.com/balticai/30-min-bezmaksas-ai-konsultacija-clone", "_blank");
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="consultation-popup__overlay" onClick={handleOverlayClick}>
      <div className="consultation-popup__container">
        <button
          className="consultation-popup__close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>
        
        <div className="consultation-popup__content">
          <div className="consultation-popup__header">
            <h3 className="consultation-popup__title">Book Your AI Consultation</h3>
            <div className="consultation-popup__disclaimer">
              <div className="consultation-popup__gif-container">
                <img 
                  src={freeGif} 
                  alt="AI Consultation" 
                  className="consultation-popup__gif"
                />
              </div>
              <p className="consultation-popup__disclaimer-text">
                <strong>Disclaimer ⚠️</strong><br />
                This is not a sales call, but a free consultation
              </p>
            </div>
          </div>
          
          <div className="consultation-popup__actions">
            <button
              className="button hero__button button--primary hero__button--primary"
              onClick={handleBookingClick}
            >
              FREE Consultation
            </button>
            <button
              className="consultation-popup__button consultation-popup__button--secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
