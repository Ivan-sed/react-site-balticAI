import React from "react";

const CookiePolicySection: React.FC = () => {
  return (
    <section className="cookie-policy">
      <div className="container">
        <div className="cookie-policy__content">
          <h1 className="cookie-policy__title">Cookie Policy</h1>
          <div className="cookie-policy__text">
            <p className="cookie-policy__last-updated">
              Last updated: August 28, 2025
            </p>
            
            <div className="cookie-policy__section">
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit our website. They are widely used to make websites work more efficiently 
                and to provide information to the owners of the site.
              </p>
            </div>

            <div className="cookie-policy__section">
              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for several reasons:</p>
              <ul>
                <li>To ensure the proper functioning of our website</li>
                <li>To improve your browsing experience</li>
                <li>To analyze how visitors use our website</li>
                <li>To remember your preferences and settings</li>
                <li>To provide personalized content and advertisements</li>
              </ul>
            </div>

            <div className="cookie-policy__section">
              <h2>3. Types of Cookies We Use</h2>
              
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core 
                functionality such as security, network management, and accessibility.
              </p>

              <h3>Performance Cookies</h3>
              <p>
                These cookies collect information about how visitors use our website, such as which 
                pages visitors go to most often. This data helps us optimize our website.
              </p>

              <h3>Functionality Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make and provide enhanced, 
                more personal features.
              </p>

              <h3>Targeting/Advertising Cookies</h3>
              <p>
                These cookies are used to deliver advertisements more relevant to you and your interests. 
                They are also used to limit the number of times you see an advertisement.
              </p>
            </div>

            <div className="cookie-policy__section">
              <h2>4. Third-Party Cookies</h2>
              <p>
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul>
                <li>Google Analytics - for website analytics</li>
                <li>Google Ads - for advertising</li>
                <li>Facebook Pixel - for social media integration and advertising</li>
                <li>LinkedIn Insight Tag - for professional networking analytics</li>
              </ul>
            </div>

            <div className="cookie-policy__section">
              <h2>5. Managing Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Please note that removing or 
                blocking cookies can impact your user experience and parts of our website may no 
                longer be fully accessible.
              </p>
              
              <h3>Browser Settings</h3>
              <p>
                Most web browsers allow you to manage cookie preferences in your browser settings. 
                You can set your browser to refuse cookies or delete certain cookies.
              </p>

              <h3>Opt-Out Links</h3>
              <ul>
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                <li>Google Ads: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
                <li>Facebook: <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
              </ul>
            </div>

            <div className="cookie-policy__section">
              <h2>6. Cookie Consent</h2>
              <p>
                When you first visit our website, you will be asked to consent to the use of cookies. 
                You can withdraw your consent at any time by clearing your browser cookies or using 
                our cookie preference center.
              </p>
            </div>

            <div className="cookie-policy__section">
              <h2>7. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on our website.
              </p>
            </div>

            <div className="cookie-policy__section">
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="cookie-policy__contact">
                <p>Email: privacy@balticai.com</p>
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

export default CookiePolicySection;
