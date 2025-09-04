import { useState } from "react";
import { industriesData, IndustryData } from "../utils/industriesData";

export const useIndustriesSlider = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const currentIndustry: IndustryData = industriesData[activeIndustryIndex];

  const switchIndustry = (index: number) => {
    if (index === activeIndustryIndex || isTransitioning) return;

    setIsTransitioning(true);

    // Simulate fade effect timing
    setTimeout(() => {
      setActiveIndustryIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const nextIndustry = () => {
    const nextIndex = (activeIndustryIndex + 1) % industriesData.length;
    switchIndustry(nextIndex);
  };

  const prevIndustry = () => {
    const prevIndex = activeIndustryIndex === 0 ? industriesData.length - 1 : activeIndustryIndex - 1;
    switchIndustry(prevIndex);
  };

  return {
    activeIndustryIndex,
    currentIndustry,
    isTransitioning,
    switchIndustry,
    nextIndustry,
    prevIndustry,
    industriesData,
  };
};
