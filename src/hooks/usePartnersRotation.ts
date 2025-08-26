import { useState, useEffect, useRef } from "react";

interface UsePartnersRotationReturn {
  currentPartnerSet: number;
  isTransitioning: boolean;
}

export const usePartnersRotation = (
  totalSets: number = 2,
  rotationInterval: number = 5000
): UsePartnersRotationReturn => {
  const [currentPartnerSet, setCurrentPartnerSet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const rotatePartners = () => {
      setIsTransitioning(true);
      
      // После анимации исчезновения переключаем партнеров
      setTimeout(() => {
        setCurrentPartnerSet((prev) => (prev + 1) % totalSets);
        
        // Убираем флаг transition для появления новых партнеров
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300); // 300ms - время анимации исчезновения
    };

    // Запускаем ротацию
    intervalRef.current = setInterval(rotatePartners, rotationInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalSets, rotationInterval]);

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    currentPartnerSet,
    isTransitioning,
  };
};
