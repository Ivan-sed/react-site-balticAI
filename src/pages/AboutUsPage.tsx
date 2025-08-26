import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  AboutIntroSection,
  AboutPrinciplesSection,
  AboutStorySection,
  AboutTeamSection,
  AboutAchievementsSection,
  Footer,
  BookingPopup,
} from "../components";

const AboutUsPage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  // Функция для перехода к секции команды
  const scrollToTeam = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Данные для интро секции
  const introData = {
    title: "About Us - Driving Innovation with AI Excellence",
    description:
      "Our diverse experts unite technology and business insight to deliver real results for clients worldwide.",
    buttonText: "Meet Our Team",
    onButtonClick: scrollToTeam,
    breadcrumbs: [
      { text: "Main page", href: "/" },
      { text: "About Us", href: "/about-us", isCurrent: true },
    ],
  };

  // Данные для принципов
  const principlesData = [
    {
      id: "1",
      icon: "about-principles__icon--education",
      name: "Innovation First",
      description:
        "We constantly explore new technologies and creative approaches to deliver forward-thinking solutions for our clients.",
    },
    {
      id: "2",
      icon: "about-principles__icon--users",
      name: "Client-Centered Approach",
      description:
        "Every project starts with your goals. We listen, adapt, and build AI tools that create measurable value for your business.",
    },
    {
      id: "3",
      icon: "about-principles__icon--service",
      name: "Integrity in Action",
      description:
        "We believe in transparency, reliability, and long-term partnerships—delivering on our promises every step of the way.",
    },
  ];

  // Данные для команды
  const teamData = [
    {
      id: "1",
      name: "Mikael Smith",
      role: "Co-founder & Software engineer",
      avatar: "",
    },
    {
      id: "2",
      name: "Anna Johnson",
      role: "AI Research Lead",
      avatar: "",
    },
    {
      id: "3",
      name: "David Chen",
      role: "Data Science Director",
      avatar: "",
    },
    {
      id: "4",
      name: "Sarah Williams",
      role: "Machine Learning Engineer",
      avatar: "",
    },
    {
      id: "5",
      name: "Alex Rodriguez",
      role: "Product Manager",
      avatar: "",
    },
  ];

  // Данные для достижений
  const achievementsData = [
    {
      id: "1",
      icon: "about-achievements__icon--certificate",
      name: "Proven Track Record",
      description:
        "We have successfully delivered over 150 AI-driven projects for clients in diverse industries.",
    },
    {
      id: "2",
      icon: "about-achievements__icon--earth",
      name: "International Reach",
      description:
        "Our team has implemented projects across 10 countries, adapting to various regulatory and business environments.",
    },
    {
      id: "3",
      icon: "about-achievements__icon--award",
      name: "Recognized Excellence",
      description:
        "We are trusted by leading companies and have received industry awards for innovation and reliability.",
    },
  ];

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />
      <main>
        <AboutIntroSection {...introData} />
        <AboutPrinciplesSection principles={principlesData} />
        <AboutStorySection onButtonClick={openPopup} />
        <AboutTeamSection members={teamData} />
        <AboutAchievementsSection achievements={achievementsData} />
      </main>
      <Footer />
      
      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isOpen} 
        onClose={closePopup} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default AboutUsPage;
