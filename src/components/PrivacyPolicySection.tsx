import React from "react";

const PrivacyPolicySection: React.FC = () => {
  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="privacy-policy__content">
          <h1 className="privacy-policy__title">Privacy Policy</h1>
          <div className="privacy-policy__text">
            <p className="privacy-policy__last-updated">
              Last updated: August 28, 2025
            </p>
            
            <div className="privacy-policy__section">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                fill out a form, request information, or contact us. This may include:
              </p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information and job title</li>
                <li>Information about your business needs and project requirements</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div className="privacy-policy__section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </div>

            <div className="privacy-policy__section">
              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy:
              </p>
              <ul>
                <li>With your consent or at your direction</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With service providers who assist us in operating our business</li>
              </ul>
            </div>

            <div className="privacy-policy__section">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required or 
                permitted by law.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div className="privacy-policy__section">
              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and track information 
                and to improve our services. You can control cookies through your browser settings.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your 
                country of residence. We ensure appropriate safeguards are in place to protect 
                your personal information.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 16. We do not knowingly collect 
                personal information from children under 16.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="privacy-policy__section">
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, 
                please contact us at:
              </p>
              <div className="privacy-policy__contact">
                <p>Email: privacy@balticai.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 AI Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
