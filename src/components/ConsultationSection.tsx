import React, { useState } from "react";

interface ConsultationFormData {
  name: string;
  email: string;
  message: string;
}

interface ConsultationSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  formTitle?: string;
  formSubtitle?: string;
  submitButtonText?: string;
  className?: string;
  onButtonClick?: () => void;
  onFormSubmit?: (data: ConsultationFormData) => void;
}

const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  title = "Ready to Transform Your Business with AI?",
  description = `Discover how our AI-driven automation can streamline your operations, reduce costs, and empower your team to focus on strategic growth. Book a personalized consultation to see exactly how our solutions will fit your unique workflows and deliver measurable results.

During the session, our experts will walk you through a tailored AI roadmap, demonstrate real-world case studies, and answer any questions about implementation timelines, ROI expectations, and ongoing support. You'll leave with clear next steps and confidence in your business's digital future.`,
  buttonText = "Let's Set Your Appointment",
  formTitle = "Book Your Consultation",
  formSubtitle = "No fluff. Just a solution for your business automation.",
  submitButtonText = "Send request",
  className = "",
  onButtonClick,
  onFormSubmit,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
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
    <section className={`consultation ${className}`} id="consultation">
      <div className="consultation__container">
        <div className="consultation__content">
          <div className="consultation__text">
            <h2 className="consultation__title">{title}</h2>
            <p className="consultation__description">
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
              className="consultation__button consultation__set-appointment-btn"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
          <div className="consultation__form">
            <div className="consultation__form-header">
              <h3 className="consultation__form-title">{formTitle}</h3>
              <p className="consultation__form-subtitle">{formSubtitle}</p>
            </div>
            <form className="consultation__form-fields" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="consultation__form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="consultation__form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="consultation__form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="consultation__form-submit consultation__send-request-btn"
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

export default ConsultationSection;
