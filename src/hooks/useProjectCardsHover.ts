import { useState } from "react";

export const useProjectCardsHover = () => {
  const [isOtherCardHovered, setIsOtherCardHovered] = useState<boolean>(false);

  const handleCardEnter = () => {
    setIsOtherCardHovered(true);
  };

  const handleCardLeave = () => {
    setIsOtherCardHovered(false);
  };

  const handleFirstCardEnter = () => {
    setIsOtherCardHovered(false);
  };

  return {
    isOtherCardHovered,
    handleCardEnter,
    handleCardLeave,
    handleFirstCardEnter,
  };
};
