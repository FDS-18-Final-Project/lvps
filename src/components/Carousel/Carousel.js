import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';
import { Icon, CarouselItem, Indicator } from 'components/';

const { colors, calcRem } = theme;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: ${calcRem(525)};
  margin-bottom: ${calcRem(50)};
`;

const Slider = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const CarouselButton = styled(Icon)`
  position: absolute;
  top: 35%;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
  cursor: pointer;
`;

const Carousel = ({ contents }) => {
  const TOTAL_SLIDERS = contents.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
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
      <CarouselContainer>
        <Slider ref={slideRef}>
          {contents.map((review, idx) => {
            const next = currentSlide === TOTAL_SLIDERS ? 0 : currentSlide + 1;
            const prev = !currentSlide ? TOTAL_SLIDERS : currentSlide - 1;

            return (
              <CarouselItem
                key={review.id}
                active={idx === currentSlide}
                prev={idx === prev}
                next={idx === next}
                content={review}
                colors={{ main: colors.lightGray, sub: colors.white }}
              />
            );
          })}
        </Slider>
        <CarouselButton
          type="leftArrow"
          color={colors.lightGray}
          direction="left"
          onClick={prevSlide}
        />
        <CarouselButton
          type="rightArrow"
          color={colors.lightGray}
          direction="right"
          onClick={nextSlide}
        />
      </CarouselContainer>
      <Indicator
        contents={contents}
        current={currentSlide}
        onChange={setCurrentSlide}
        className="indicator"
      />
    </>
  );
};
export default Carousel;
