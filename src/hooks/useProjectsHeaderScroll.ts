import { useState, useEffect } from "react";

export const useProjectsHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      const transformationSection = document.getElementById("transformation");
      
      // Проверяем секцию projects
      let isInProjectsGrid = false;
      if (projectsSection) {
        const projectsGrid = projectsSection.querySelector(".projects__grid");
        if (projectsGrid) {
          const gridRect = projectsGrid.getBoundingClientRect();
          isInProjectsGrid = gridRect.top <= 100 && gridRect.bottom >= 0;
        }
      }

      // Проверяем секцию transformation
      let isInTransformationSection = false;
      if (transformationSection) {
        const transformationRect = transformationSection.getBoundingClientRect();
        isInTransformationSection = transformationRect.top <= 100 && transformationRect.bottom >= 0;
      }

      // Если нет ни одной из секций, используем стандартную логику
      if (!projectsSection && !transformationSection) {
        const scrollThreshold = window.innerHeight * 0.7;
        setIsScrolled(window.scrollY > scrollThreshold);
        return;
      }
      
      // Хедер становится обычным, когда пользователь находится в области projects__grid или transformation
      // и возвращается к scrolled состоянию когда покидает эти области
      if (isInProjectsGrid || isInTransformationSection) {
        setIsScrolled(false); // Обычный хедер в области projects__grid или transformation
      } else {
        // Проверяем, нужно ли показать scrolled хедер
        const scrollThreshold = window.innerHeight * 0.7;
        const hasScrolledEnough = window.scrollY > scrollThreshold;
        setIsScrolled(hasScrolledEnough);
      }
    };

    // Вызываем сразу для правильной инициализации
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
};
