import { useEffect, useRef, useState } from 'react';

export const useIndustryCardsAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const isContainerVisible = containerRect.top < windowHeight && containerRect.bottom > 0;
      
      if (!isContainerVisible) {
        setVisibleCards(1);
        return;
      }

      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const scrollAreaHeight = windowHeight + containerHeight;
      
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - containerTop) / scrollAreaHeight
      ));

      const totalCards = 6;
      let newVisibleCards = 1;
      const cardThresholds = [0, 0.1, 0.25, 0.4, 0.55, 0.7];
      
      for (let i = 1; i < totalCards; i++) {
        if (scrollProgress >= cardThresholds[i]) {
          newVisibleCards = i + 1;
        }
      }

      setVisibleCards(newVisibleCards);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    containerRef,
    visibleCards
  };
};