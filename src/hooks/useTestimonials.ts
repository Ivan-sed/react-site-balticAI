import { useState } from "react";
import { testimonialsData, TestimonialData } from "../utils/testimonialsData";

export const useTestimonials = () => {
  const [activeClient, setActiveClient] = useState<string>("client1");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const currentTestimonial: TestimonialData = testimonialsData[activeClient];

  const switchTestimonial = (clientKey: string) => {
    if (clientKey === activeClient || isTransitioning) return;

    setIsTransitioning(true);

    // Simulate fade effect timing from original script
    setTimeout(() => {
      setActiveClient(clientKey);
      setIsTransitioning(false);
    }, 150);
  };

  return {
    activeClient,
    currentTestimonial,
    isTransitioning,
    switchTestimonial,
  };
};
