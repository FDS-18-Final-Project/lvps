import styled from 'styled-components';
import { object, bool, number } from 'prop-types';
import { colors, fontSizes, calcRem } from 'theme/theme';
import { motion } from 'framer-motion';

const StyledCarouselItemBlock = styled(motion.li)`
  opacity: 0;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  line-height: ${calcRem(36)};
  font-size: ${fontSizes.xxxl};
  padding: 0 20%;
  box-sizing: border-box;
  text-align: center;

  transition: transform 0.5s, opacity 0.5s;
  transform: ${({ currentIdx }) => `translateX(${currentIdx * 100}%)`};
  transform: ${({ prev }) => (prev ? 'translateX(-100%)' : '')};
  transform: ${({ next }) => (next ? 'translateX(100%)' : '')};

  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const StyledCarouselItemContent = styled.p`
  width: 65%;
  margin: auto;
  color: ${({ colors }) => colors.main};
  line-height: ${calcRem(54)};
  margin-bottom: ${calcRem(50)};
  height: ${calcRem(350)};
`;

const StyledCarouselItemInfo = styled.span`
  display: block;
  margin-bottom: ${calcRem(15)};
  line-height: ${calcRem(54)};
  color: ${({ colors }) => colors.sub};

  span + span {
    margin-bottom: ${calcRem(15)};
  }
`;

const CarouselItem = ({
  content,
  colors,
  active,
  prev,
  next,
  currentIdx,
  ...restProps
}) => {
  return (
    <StyledCarouselItemBlock
      active={active}
      prev={prev}
      next={next}
      currentIdx={currentIdx}
      {...restProps}
    >
      <StyledCarouselItemContent colors={colors}>
        {content.review}
      </StyledCarouselItemContent>
      <StyledCarouselItemInfo aria-label="writer" colors={colors}>
        {content.name}
      </StyledCarouselItemInfo>
      <StyledCarouselItemInfo aria-label="model name" colors={colors}>
        {content.model}
      </StyledCarouselItemInfo>
    </StyledCarouselItemBlock>
  );
};

CarouselItem.propTypes = {
  content: object.isRequired,
  colors: object,
  active: bool,
  prev: bool,
  next: bool,
  currentIdx: number
};

CarouselItem.defaultProps = {
  content: [],
  colors: { main: colors.black, sub: colors.black },
  active: true,
  prev: false,
  next: false,
  currentIdx: 0
};

StyledCarouselItemBlock.displayName = 'StyledCarouselItemBlock';
StyledCarouselItemContent.displayName = 'StyledCarouselItemContent';
StyledCarouselItemInfo.displayName = 'StyledCarouselItemInfo';

export default CarouselItem;
