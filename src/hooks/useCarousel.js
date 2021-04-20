import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const useCarousel = TOTAL_LENGTH => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMoving, setIsMoving] = useState(1);

  const moveNext = () => {
    if (!isMoving) {
      // if (currentSlide === TOTAL_LENGTH) return setCurrentSlide(1);
      if (currentSlide === TOTAL_LENGTH) return;
      else setCurrentSlide(currentSlide + 1);
    }
  };

  const movePrev = () => {
    if (!isMoving) {
      // if (currentSlide === 1) return setCurrentSlide(TOTAL_LENGTH);
      if (currentSlide === 1) return;
      else setCurrentSlide(currentSlide - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: moveNext,
    onSwipedRight: movePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    setIsMoving(true);
    setTimeout(() => {
      setIsMoving(false);
    }, 500);
  }, [currentSlide]);

  return { currentSlide, setCurrentSlide, moveNext, movePrev, handlers };
};

export default useCarousel;
