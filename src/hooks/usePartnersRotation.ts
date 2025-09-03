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
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Проверка мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 435);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Не запускаем ротацию на мобильных устройствах
    if (isMobile) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

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

    // Запускаем ротацию только если не мобильное устройство
    intervalRef.current = setInterval(rotatePartners, rotationInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalSets, rotationInterval, isMobile]);

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
