import React from "react";
import {
  Header,
  BreadcrumbsSection,
  ContactsSection,
  Footer,
} from "../components";

const ContactsPage: React.FC = () => {
  // Данные для breadcrumbs
  const breadcrumbsData = [
    { text: "Main page", href: "/" },
    { text: "Contacts", href: "/contacts", isCurrent: true },
  ];

  return (
    <div className="page">
      <Header />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
