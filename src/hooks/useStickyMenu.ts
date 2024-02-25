import { useEffect, useState } from "react";

export const useStickyMenu = () => {
  const [isSticky, setIsSticky] = useState(false);

  const scrollHandler = () => {
    if (!isSticky && window.scrollY > 200) {
      setIsSticky(true);
      return;
    }

    setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return window.addEventListener("scroll", scrollHandler);
  }, []);

  return {
    isSticky,
  };
};
