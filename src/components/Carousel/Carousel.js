import React, { useState, useRef, useEffect } from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { Icon, CarouselItem, Indicator } from 'components/';

const StyledCarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: ${calcRem(525)};
  margin-bottom: ${calcRem(50)};
`;

const StyledSlider = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const StyledCarouselButton = styled(Icon)`
  position: absolute;
  top: 30%;
  ${({ direction }) => (direction === 'left' ? 'left: 5%;' : 'right: 5%;')}
  cursor: pointer;
`;

const Carousel = ({ contents }) => {
  const TOTAL_SLIDERS = contents.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const isMoving = useRef(false);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isMoving.current) {
      if (currentSlide === TOTAL_SLIDERS) setCurrentSlide(0);
      else setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (!isMoving.current) {
      if (!currentSlide) setCurrentSlide(TOTAL_SLIDERS);
      else setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <StyledCarouselContainer>
        <StyledSlider>
          {contents.map((content, idx) => {
            const next = currentSlide === TOTAL_SLIDERS ? 0 : currentSlide + 1;
            const prev = !currentSlide ? TOTAL_SLIDERS : currentSlide - 1;
            const currentIdx = idx - currentSlide;

            return (
              <CarouselItem
                key={content.id}
                currentIdx={currentIdx}
                active={idx === currentSlide}
                prev={idx === prev}
                next={idx === next}
                content={content}
                colors={{ main: colors.lightGray, sub: colors.white }}
              />
            );
          })}
        </StyledSlider>
        <StyledCarouselButton
          type="leftArrow"
          color={colors.lightGray}
          direction="left"
          onClick={prevSlide}
        />
        <StyledCarouselButton
          type="rightArrow"
          color={colors.lightGray}
          direction="right"
          onClick={nextSlide}
        />
      </StyledCarouselContainer>
      <Indicator
        contents={contents}
        current={currentSlide}
        onChange={setCurrentSlide}
        className="indicator"
      />
    </>
  );
};

Carousel.propTypes = {
  contents: array.isRequired
};

Carousel.defaultProps = {
  contents: []
};

StyledCarouselContainer.displayName = 'StyledCarouselContainer';
StyledSlider.displayName = 'StyledSlider';
StyledCarouselButton.displayName = 'StyledCarouselButton';

export default Carousel;
