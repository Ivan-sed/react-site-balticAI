import React from "react";

const TermsOfUseSection: React.FC = () => {
  return (
    <section className="terms-of-use">
      <div className="container">
        <div className="terms-of-use__content">
          <h1 className="terms-of-use__title">Terms of Use</h1>
          <div className="terms-of-use__text">
            <p className="terms-of-use__last-updated">
              Last updated: August 28, 2025
            </p>
            
            <div className="terms-of-use__section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. These Terms of Use govern your use of the AI Solutions 
                website and services provided by SIA AI Consulting Solutions.
              </p>
            </div>

            <div className="terms-of-use__section">
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on AI Solutions' 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="terms-of-use__section">
              <h2>3. Disclaimer</h2>
              <p>
                The materials on AI Solutions' website are provided on an 'as is' basis. AI Solutions 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other 
                violation of rights.
              </p>
            </div>

            <div className="terms-of-use__section">
              <h2>4. Limitations</h2>
              <p>
                In no event shall AI Solutions or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on AI Solutions' website, even 
                if AI Solutions or an AI Solutions authorized representative has been notified orally 
                or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="terms-of-use__section">
              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on AI Solutions' website could include technical, typographical, 
                or photographic errors. AI Solutions does not warrant that any of the materials on its 
                website are accurate, complete, or current. AI Solutions may make changes to the materials 
                contained on its website at any time without notice.
              </p>
            </div>

            <div className="terms-of-use__section">
              <h2>6. Links</h2>
              <p>
                AI Solutions has not reviewed all of the sites linked to our website and is not 
                responsible for the contents of any such linked site. The inclusion of any link does 
                not imply endorsement by AI Solutions of the site. Use of any such linked website is 
                at the user's own risk.
              </p>
            </div>

            <div className="terms-of-use__section">
              <h2>7. Modifications</h2>
              <p>
                AI Solutions may revise these terms of service for its website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of these 
                terms of service.
              </p>
            </div>

            <div className="terms-of-use__section">
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                of Latvia and you irrevocably submit to the exclusive jurisdiction of the courts in 
                that State or location.
              </p>
            </div>

            <div className="terms-of-use__section">
              <h2>9. User Conduct</h2>
              <p>You agree not to use the service to:</p>
              <ul>
                <li>Upload, post, or transmit any content that is illegal, harmful, threatening, abusive, or defamatory</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
                <li>Collect or store personal data about other users without their consent</li>
                <li>Use the service for any unlawful purpose or activity</li>
              </ul>
            </div>

            <div className="terms-of-use__section">
              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <div className="terms-of-use__contact">
                <p>Email: legal@balticai.com</p>
                <p>Phone: +371 25 142 420</p>
                <p>Address: Maza Nometnu Street 65B, Agenskalns, Latvia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUseSection;
