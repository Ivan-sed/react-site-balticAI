import { useState, useEffect } from "react";

export const useSpecialSectionsHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      const transformationSection = document.getElementById("transformation");
      const aboutAchievementsSection = document.getElementById("about-achievements");
      
      let isInProjectsGrid = false;
      if (projectsSection) {
        const projectsGrid = projectsSection.querySelector(".projects__grid");
        if (projectsGrid) {
          const gridRect = projectsGrid.getBoundingClientRect();
          isInProjectsGrid = gridRect.top <= 100 && gridRect.bottom >= 0;
        }
      }

      let isInTransformationSection = false;
      if (transformationSection) {
        const transformationRect = transformationSection.getBoundingClientRect();
        isInTransformationSection = transformationRect.top <= 100 && transformationRect.bottom >= 0;
      }

      let isInAboutAchievementsSection = false;
      if (aboutAchievementsSection) {
        const aboutAchievementsRect = aboutAchievementsSection.getBoundingClientRect();
        isInAboutAchievementsSection = aboutAchievementsRect.top <= 100 && aboutAchievementsRect.bottom >= 0;
      }

      if (!projectsSection && !transformationSection && !aboutAchievementsSection) {
        const scrollThreshold = window.innerHeight * 0.7;
        setIsScrolled(window.scrollY > scrollThreshold);
        return;
      }
      
      if (isInProjectsGrid || isInTransformationSection || isInAboutAchievementsSection) {
        setIsScrolled(false);
      } else {
        const scrollThreshold = window.innerHeight * 0.7;
        const hasScrolledEnough = window.scrollY > scrollThreshold;
        setIsScrolled(hasScrolledEnough);
      }
    };

    handleScroll();
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
};
