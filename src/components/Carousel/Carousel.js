import { useState, useEffect } from 'react';
import { array, string } from 'prop-types';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { calcRem, colors } from 'theme/theme';
import { Icon, CarouselItem, Indicator } from 'components/';

const StyledCarouselContainer = styled.div`
  width: ${calcRem(770)};
  overflow: ${({ type }) => type === 'paragraph' && 'hidden'};
  margin: 0 auto;
`;

const Slides = styled.ul`
  user-select: none;
  display: flex;
  transform: ${({ currentSlide }) => `translateX(${currentSlide * -100}%)`};
  transition: all 0.5s;
`;

const StyledCarouselButton = styled(Icon)`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 0' : 'right: 0')}
`;

const Carousel = ({ type, contents }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMoving, setIsMoving] = useState(false);

  const TOTAL_LENGTH = contents.length;

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

  return (
    <>
      <StyledCarouselContainer type={type} {...handlers}>
        <Slides currentSlide={currentSlide} length={TOTAL_LENGTH}>
          {[contents[TOTAL_LENGTH - 1], ...contents, contents[0]].map(
            (content, idx) => (
              <CarouselItem
                key={idx}
                type={type}
                colors={{ main: colors.lightGray, sub: colors.white }}
                content={content}
                active={currentSlide === idx}
              />
            )
          )}
        </Slides>
      </StyledCarouselContainer>

      <StyledCarouselButton
        type="rightArrow"
        direction="right"
        color={colors.lightGray}
        onClick={moveNext}
      />
      <StyledCarouselButton
        type="leftArrow"
        direction="left"
        color={colors.lightGray}
        onClick={movePrev}
      />
      <Indicator
        contents={contents}
        onChange={setCurrentSlide}
        current={currentSlide - 1}
      />
    </>
  );
};

Carousel.propTypes = {
  type: string.isRequired,
  content: array.isRequired
};

Carousel.defaultProps = {
  type: 'img',
  content: []
};

StyledCarouselContainer.displayName = 'StyledCarouselContainer';
Slides.displayName = 'Slides';
StyledCarouselButton.displayName = 'StyledCarouselButton';

export default Carousel;
