import React, { useState } from "react";

interface ConsultingBookingFormData {
  name: string;
  email: string;
  message: string;
}

interface ConsultingBookingSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  formTitle?: string;
  formSubtitle?: string;
  submitButtonText?: string;
  onButtonClick?: () => void;
  onFormSubmit?: (data: ConsultingBookingFormData) => void;
}

const ConsultingBookingSection: React.FC<ConsultingBookingSectionProps> = ({
  title = "Start Your AI Consulting Journey",
  description = `Unlock new opportunities with professional AI consulting designed for your unique challenges. Schedule your session to discover actionable strategies, tailored recommendations, and a clear next step for accelerating your business results.

In your consultation, our specialists will map out a strategic AI adoption plan, answer your toughest questions, and show proven examples relevant to your industry. You'll leave with clarity, confidence, and a concrete roadmap to move forward—backed by ongoing expert support.`,
  buttonText = "Book My Strategy Session",
  formTitle = "Book Your Consultation",
  formSubtitle = "No fluff. Just a solution for your business automation.",
  submitButtonText = "Send request",
  onButtonClick,
  onFormSubmit,
}) => {
  const [formData, setFormData] = useState<ConsultingBookingFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <section className="consulting-booking" id="consulting-booking">
      <div className="consulting-booking__container">
        <div className="consulting-booking__content">
          <div className="consulting-booking__text">
            <h2 className="consulting-booking__title">{title}</h2>
            <p className="consulting-booking__description">
              {description.split("\n\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < description.split("\n\n").length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </p>
            <button
              className="consulting-booking__button consulting-booking__set-appointment-btn"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
          <div className="consulting-booking__form">
            <div className="consulting-booking__form-header">
              <h3 className="consulting-booking__form-title">{formTitle}</h3>
              <p className="consulting-booking__form-subtitle">
                {formSubtitle}
              </p>
            </div>
            <form
              className="consulting-booking__form-fields"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="consulting-booking__form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="consulting-booking__form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="consulting-booking__form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="consulting-booking__form-submit consulting-booking__send-request-btn"
              >
                {submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingBookingSection;
