export interface TestimonialData {
  text: string;
  name: string;
  role: string;
}

export const testimonialsData: Record<string, TestimonialData> = {
  client1: {
    text: "Integrating AI into our daily workflows has significantly improved our team's productivity and decision-making. It's now a core component of how we deliver value to our clients.",
    name: "Johan Smite",
    role: "CEO of MTA",
  },
  client2: {
    text: "The AI solutions provided by this team have revolutionized our customer service operations. Response times decreased by 70% and customer satisfaction increased dramatically.",
    name: "Sarah Johnson",
    role: "Operations Director at TechCorp",
  },
  client3: {
    text: "Working with this AI consulting firm was a game-changer for our business. They helped us implement machine learning models that increased our sales by 45% in just 6 months.",
    name: "Michael Chen",
    role: "Founder of InnovateLab",
  },
  client4: {
    text: "The predictive analytics solution they developed for us has transformed our inventory management. We've reduced waste by 30% and improved efficiency across all departments.",
    name: "Emma Rodriguez",
    role: "Supply Chain Manager at GlobalTrade",
  },
  client5: {
    text: "Their expertise in natural language processing helped us create a chatbot that handles 80% of customer inquiries automatically. The ROI was evident within the first quarter.",
    name: "David Thompson",
    role: "CTO of ServicePlus",
  },
  client6: {
    text: "The computer vision system they implemented in our manufacturing process has reduced defects by 60% and improved quality control significantly. Exceptional work!",
    name: "Lisa Wang",
    role: "Quality Assurance Director at ManufacturePro",
  },
};
