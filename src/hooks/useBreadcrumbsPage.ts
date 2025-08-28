import { useState, useEffect } from "react";

export const useBreadcrumbsPage = () => {
  const [hasBreadcrumbs, setHasBreadcrumbs] = useState(false);

  useEffect(() => {
    const checkBreadcrumbs = () => {
      const breadcrumbsElement = document.querySelector(".breadcrumbs");
      setHasBreadcrumbs(!!breadcrumbsElement);
    };

    // Проверяем сразу при загрузке
    checkBreadcrumbs();

    // Создаем наблюдатель для отслеживания изменений DOM
    const observer = new MutationObserver(checkBreadcrumbs);
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return hasBreadcrumbs;
};
