import React from "react";
import { Header, Footer, IntroSection } from "../components";

const AiSolutionsPage: React.FC = () => {
  const breadcrumbs = [
    { text: "Main page", href: "/" },
    { text: "Services", isCurrent: true },
    { text: "AI Automation Solutions", isCurrent: true },
  ];

  const stats = [
    {
      number: "01",
      title: "Rapid Cost Reduction",
      description:
        "Cut operational expenses by 30-40% through intelligent automation",
    },
    {
      number: "02",
      title: "Accelerated Productivity",
      description:
        "Boost team efficiency by 60%+ with AI-driven task optimization",
    },
  ];

  return (
    <div className="page">
      {/* Header */}
      <Header />

      {/* Intro Section */}
      <IntroSection
        title="Transform Your Business Operations with AI-Powered Automation Solutions"
        description="Streamline workflows, reduce operational costs by up to 40%, and boost productivity while your team focuses on strategic growth. Our intelligent automation platform delivers measurable results in just 10 days."
        breadcrumbs={breadcrumbs}
        stats={stats}
      />

      {/* Placeholder for more content - будем добавлять постепенно */}
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Остальные секции будут добавлены постепенно...</h2>
        <p>
          Пока что у нас есть Intro секция с хлебными крошками и статистикой.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AiSolutionsPage;
