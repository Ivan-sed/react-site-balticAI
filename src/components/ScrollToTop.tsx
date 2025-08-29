import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручиваем страницу наверх при изменении маршрута
    // Используем плавную прокрутку для лучшего UX
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // instant для мгновенной прокрутки при переходе между страницами
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
