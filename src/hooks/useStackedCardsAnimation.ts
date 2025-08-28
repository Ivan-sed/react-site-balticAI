import { useEffect, useRef } from 'react';

export const useStackedCardsAnimation = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.industry-card');
    if (cards.length === 0) return;

    // Переменные для управления виртуальной прокруткой
    let virtualScrollProgress = 0;
    let isInAnimationZone = false;
    let shouldPreventScroll = false;

    // Устанавливаем z-index один раз при инициализации
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.zIndex = (cards.length - index).toString();
    });

    let ticking = false;

    // Обработчик wheel события для контроля прокрутки
    const handleWheel = (e: WheelEvent) => {
      if (shouldPreventScroll && e.deltaY > 0) { // Блокируем только прокрутку вниз (deltaY > 0)
        e.preventDefault();
        
        // Увеличиваем виртуальный прогресс вместо реальной прокрутки
        const scrollAmount = e.deltaY * 0.00025; // Уменьшили в 4 раза для более длинной прокрутки
        
        // Проверяем, завершена ли анимация
        const lastCardIndex = cards.length - 1;
        const lastCardDelay = (lastCardIndex - 1) * 0.20; // Увеличили интервал между карточками
        const lastCardDuration = 0.30; // Увеличили длительность анимации каждой карточки
        // Добавляем буферное время для полного завершения последней карточки
        const totalAnimationTime = lastCardDelay + lastCardDuration + 0.25; // Увеличили буферное время
        
        virtualScrollProgress = Math.max(0, Math.min(totalAnimationTime, virtualScrollProgress + scrollAmount));
        
        // Если анимация завершена (учитываем общее время), разрешаем дальнейшую прокрутку
        if (virtualScrollProgress >= totalAnimationTime) {
          shouldPreventScroll = false;
          // Прокручиваем страницу дальше
          window.scrollBy(0, e.deltaY);
        }
        
        // Обновляем анимацию
        if (!ticking) {
          requestAnimationFrame(updateCardsAnimation);
          ticking = true;
        }
      } else if (shouldPreventScroll && e.deltaY < 0) {
        // Если прокручиваем вверх во время анимации, уменьшаем виртуальный прогресс
        e.preventDefault();
        
        const scrollAmount = e.deltaY * 0.00025; // Тот же коэффициент для согласованности
        
        // Вычисляем максимальное время анимации
        const lastCardIndex = cards.length - 1;
        const lastCardDelay = (lastCardIndex - 1) * 0.20;
        const lastCardDuration = 0.30;
        const totalAnimationTime = lastCardDelay + lastCardDuration + 0.25;
        
        virtualScrollProgress = Math.max(0, Math.min(totalAnimationTime, virtualScrollProgress + scrollAmount));
        
        // Если достигли начала анимации, снимаем блокировку
        if (virtualScrollProgress <= 0) {
          shouldPreventScroll = false;
          isInAnimationZone = false;
          // Разрешаем продолжить прокрутку вверх
          window.scrollBy(0, e.deltaY);
        }
        
        // Обновляем анимацию
        if (!ticking) {
          requestAnimationFrame(updateCardsAnimation);
          ticking = true;
        }
      }
      // Если прокрутка вверх и нет блокировки, то событие не блокируется и прокрутка работает нормально
    };

    const updateCardsAnimation = () => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Определяем, достигли ли мы секции
      const sectionReached = containerRect.top <= 0;
      const sectionPassed = containerRect.bottom <= windowHeight;
      
      if (sectionReached && !sectionPassed && !isInAnimationZone) {
        // Начинаем анимацию - блокируем обычную прокрутку вниз
        isInAnimationZone = true;
        shouldPreventScroll = true;
        virtualScrollProgress = 0;
      }
      
      // Если пользователь прокрутил вверх и вышел из секции, снимаем блокировку
      if (!sectionReached && isInAnimationZone) {
        // Мы вышли из секции вверх - сбрасываем все
        virtualScrollProgress = 0;
        isInAnimationZone = false;
        shouldPreventScroll = false;
      } else if (sectionPassed && isInAnimationZone) {
        // Секция прошла вниз - анимация завершена
        // Устанавливаем прогресс на максимальное значение для завершения всех анимаций
        const lastCardIndex = cards.length - 1;
        const lastCardDelay = (lastCardIndex - 1) * 0.20;
        const lastCardDuration = 0.30;
        const totalAnimationTime = lastCardDelay + lastCardDuration + 0.25;
        virtualScrollProgress = totalAnimationTime;
        isInAnimationZone = false;
        shouldPreventScroll = false;
      }
      
      if (shouldPreventScroll && isInAnimationZone) {
        // Используем виртуальный прогресс вместо реального положения
        // Ничего не делаем с реальным скроллом здесь
      }

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        
        // Проверяем, есть ли карточки ниже текущей, которые начали подниматься
        let hasMovingCardsBelow = false;
        for (let i = index + 1; i < cards.length; i++) {
          const checkDelay = (i - 1) * 0.20; // Увеличили интервал между карточками
          const checkProgress = Math.max(0, Math.min(1, 
            (virtualScrollProgress - checkDelay) / 0.25 // Увеличили длительность проверки
          ));
          if (checkProgress > 0) {
            hasMovingCardsBelow = true;
            break;
          }
        }
        
        // Устанавливаем z-index в зависимости от того, поднимаются ли карточки снизу
        if (hasMovingCardsBelow) {
          cardElement.style.zIndex = '1';
        } else {
          cardElement.style.zIndex = (cards.length - index).toString();
        }
        
        if (index === 0) {
          // Первая карточка остается на месте
          cardElement.style.transform = 'translateY(0%)';
          cardElement.style.boxShadow = 'none';
          cardElement.style.opacity = '1';
          return;
        }

        // Для каждой карточки рассчитываем момент когда она должна начать подниматься
        const cardDelay = (index - 1) * 0.20; // Увеличили интервал между карточками
        const cardDuration = 0.30; // Увеличили длительность анимации каждой карточки
        
        const cardProgress = Math.max(0, Math.min(1, 
          (virtualScrollProgress - cardDelay) / cardDuration
        ));

        if (cardProgress > 0) {
          // Применяем простой easing без bounce эффекта
          const easedProgress = cardProgress * cardProgress * (3 - 2 * cardProgress);
          
          // Карточка поднимается и останавливается
          const offsetBetweenCards = 0;
          let finalPosition = (index - 1) * offsetBetweenCards;
          
          // Для карточки с классом industry-card__last устанавливаем финальную позицию 0
          if (cardElement.classList.contains('industry-card__last')) {
            finalPosition = 0;
          }
          
          const startPositionPx = window.innerHeight;
          const endPositionPx = finalPosition;
          
          const translateYPx = startPositionPx - (easedProgress * (startPositionPx - endPositionPx));
          
          cardElement.style.transform = `translateY(${translateYPx}px)`;
          cardElement.style.boxShadow = 'none';
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
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Начальный расчёт
    updateCardsAnimation();

    // Очистка
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCardsAnimation);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return containerRef;
};