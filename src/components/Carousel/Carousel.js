import { array, oneOf } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import CarouselItem from 'components/CarouselItem/CarouselItem';
import Indicator from 'components/Indicator/Indicator';
import { useCarousel, useViewSize } from 'hooks/';

const StyledCarouselContainer = styled.div`
  max-width: ${calcRem(750)};
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
  .iconButton {
    position: relative;
    background-color: red;
  }

  & > button {
    position: absolute;
    top: 50%;
    ${({ direction }) => (direction === 'left' ? 'left: 0' : 'right: 0')};
  }

  display: ${({ desktop }) => !desktop && 'none'};
`;

const Carousel = ({ type, contents, ...restProps }) => {
  const TOTAL_LENGTH = contents.length;
  const { desktop } = useViewSize();
  const {
    currentSlide,
    setCurrentSlide,
    moveNext,
    movePrev,
    handlers
  } = useCarousel(contents);

  return (
    <>
      <StyledCarouselContainer type={type} {...handlers} {...restProps}>
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
        button
        type="rightArrow"
        direction="right"
        color={colors.lightGray}
        onClick={moveNext}
        width={desktop ? '40' : '20'}
        desktop={desktop ? 1 : 0}
        className="iconButton"
      />
      <StyledCarouselButton
        button
        type="leftArrow"
        direction="left"
        color={colors.lightGray}
        onClick={movePrev}
        width={desktop ? '40' : '20'}
        className="iconButton"
        desktop={desktop ? 1 : 0}
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
  /** 캐러셀 아이템 선택 */
  type: oneOf(['img', 'paragraph', 'card']).isRequired,
  /** 캐러셀 배열  */
  contents: array.isRequired
};

Carousel.defaultProps = {
  type: 'img',
  contents: []
};

StyledCarouselContainer.displayName = 'StyledCarouselContainer';
Slides.displayName = 'Slides';
StyledCarouselButton.displayName = 'StyledCarouselButton';

export default Carousel;
