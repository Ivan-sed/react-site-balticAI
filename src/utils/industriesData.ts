export interface IndustryData {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const industriesData: IndustryData[] = [
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "AI-powered recommendations, dynamic pricing, and inventory optimization to boost your online sales and customer experience.",
    image: "industryEcommerce", // Will be imported in component
    alt: "E-commerce"
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    description: "Smart booking systems, personalized travel recommendations, and automated customer service for enhanced travel experiences.",
    image: "industryTravel",
    alt: "Travel & Tourism"
  },
  {
    id: "government",
    title: "Government",
    description: "Digital transformation solutions, citizen service automation, and data-driven policy making for modern governance.",
    image: "industryGovernment",
    alt: "Government"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Medical data analysis, diagnostic assistance, and patient care optimization through advanced AI technologies.",
    image: "industryHealthcare",
    alt: "Healthcare"
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Route optimization, predictive maintenance, and supply chain automation for efficient logistics operations.",
    image: "industryLogistics",
    alt: "Logistics"
  },
  {
    id: "ngo",
    title: "NGO",
    description: "Data-driven impact measurement, donor management systems, and automated reporting for non-profit organizations.",
    image: "industryNgo",
    alt: "NGO"
  }
];
