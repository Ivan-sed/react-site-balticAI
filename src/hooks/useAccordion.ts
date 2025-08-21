import { useState } from "react";

export const useAccordion = (defaultActiveIndex: number = 0) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

  const toggleItem = (index: number) => {
    // If clicked item is already active, close it (set to -1)
    // Otherwise, open the clicked item
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const isActive = (index: number): boolean => {
    return activeIndex === index;
  };

  return {
    activeIndex,
    toggleItem,
    isActive,
  };
};
