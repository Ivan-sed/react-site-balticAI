import { useEffect, useRef } from 'react';

export const useStackedCardsAnimation = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.industry-card');
    if (cards.length === 0) return;

    // Устанавливаем z-index один раз при инициализации
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.zIndex = (cards.length - index).toString(); // Верхняя карточка (index 0) получает самый большой z-index
    });

    let ticking = false;

    const updateCardsAnimation = () => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Рассчитываем прогресс прокрутки через всю секцию industries
      // Секция имеет высоту 400vh, поэтому анимация происходит на протяжении этой высоты
      const sectionHeight = containerRect.height;
      const scrollProgress = Math.max(0, Math.min(1, 
        -containerRect.top / (sectionHeight - windowHeight)
      ));

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        
        // Проверяем, есть ли карточки ниже текущей, которые начали подниматься
        let hasMovingCardsBelow = false;
        for (let i = index + 1; i < cards.length; i++) {
          const checkDelay = (i - 1) * 0.12;
          const checkProgress = Math.max(0, Math.min(1, 
            (scrollProgress - checkDelay) / 0.15
          ));
          if (checkProgress > 0) {
            hasMovingCardsBelow = true;
            break;
          }
        }
        
        // Устанавливаем z-index в зависимости от того, поднимаются ли карточки снизу
        if (hasMovingCardsBelow) {
          cardElement.style.zIndex = '1'; // Низкий z-index когда нижние карточки поднимаются
        } else {
          cardElement.style.zIndex = (cards.length - index).toString(); // Базовый z-index
        }
        
        if (index === 0) {
          // Первая карточка остается на месте
          cardElement.style.transform = 'translateY(0%)';
          cardElement.style.boxShadow = 'none';
          cardElement.style.opacity = '1';
          return;
        }

        // Для каждой карточки рассчитываем момент когда она должна начать подниматься
        const cardDelay = (index - 1) * 0.12; // Меньшая задержка для более быстрой последовательности
        const cardDuration = 0.15; // Короткая продолжительность для резкой анимации
        
        const cardProgress = Math.max(0, Math.min(1, 
          (scrollProgress - cardDelay) / cardDuration
        ));

        if (cardProgress > 0) {
          // Применяем простой easing без bounce эффекта
          const easedProgress = cardProgress * cardProgress * (3 - 2 * cardProgress); // Smoothstep для плавного без прыжков движения
          
          // Карточка поднимается и останавливается с расстоянием 30px между карточками
          const offsetBetweenCards = 30; // Расстояние 30px между карточками
          const finalPosition = (index - 1) * offsetBetweenCards; // Позиция каждой карточки

          
          // Начинаем с 100% (полностью внизу) и двигаемся к finalPosition в пикселях
          const startPositionPx = window.innerHeight; // Начальная позиция в пикселях
          const endPositionPx = finalPosition; // Конечная позиция в пикселях
          
          const translateYPx = startPositionPx - (easedProgress * (startPositionPx - endPositionPx));
          
          cardElement.style.transform = `translateY(${translateYPx}px)`;
          
          // Убираем тени
          cardElement.style.boxShadow = 'none';
          
          // Устанавливаем opacity всегда в 1
          cardElement.style.opacity = '1';
          
        } else {
          // Карточка в начальном состоянии - полностью внизу
          cardElement.style.transform = `translateY(${window.innerHeight}px)`;
          cardElement.style.boxShadow = 'none';
          cardElement.style.opacity = '1';
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateCardsAnimation);
        ticking = true;
      }
    };

    // Добавляем обработчики событий
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateCardsAnimation, { passive: true });
    
    // Начальный расчёт
    updateCardsAnimation();

    // Очистка
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCardsAnimation);
    };
  }, []);

  return containerRef;
};