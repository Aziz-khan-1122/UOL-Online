
import { useState, useEffect, RefObject } from 'react';

const useAnimateOnScroll = (ref: RefObject<HTMLElement>, options?: IntersectionObserverInit): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // We only want to animate once
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useAnimateOnScroll;
