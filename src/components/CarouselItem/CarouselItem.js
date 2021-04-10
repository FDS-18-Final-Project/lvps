import styled from 'styled-components';
import theme from 'theme/theme';

import { motion } from 'framer-motion';
const { fontSizes, interval, calcRem } = theme;

const CarouselItemWrapper = styled(motion.li)`
  width: 90%;
  opacity: 0;
  font-size: ${fontSizes.lg};
  margin: 0 auto;
  padding: 0 5%;
  text-align: center;
  position: absolute;

  transition: transform 0.5s, opacity 0.5s;
  transform: ${({ prev }) => (prev ? 'translateX(-100%)' : '')};
  transform: ${({ next }) => (next ? 'translateX(100%)' : '')};

  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const CarouselItemContent = styled.p`
  width: 85%;
  margin: auto;
  color: ${({ colors }) => colors.main};
  line-height: ${calcRem(54)};
  margin-bottom: ${interval.base};
  height: ${calcRem(350)};
`;

const CarouselItemInfo = styled.span`
  margin-bottom: ${calcRem(15)};
  display: block;
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
  ...restProps
}) => {
  return (
    <CarouselItemWrapper active={active} prev={prev} next={next} {...restProps}>
      <CarouselItemContent colors={colors}>
        {content.review}
      </CarouselItemContent>
      <CarouselItemInfo aria-label="writer" colors={colors}>
        {content.name}
      </CarouselItemInfo>
      <CarouselItemInfo aria-label="model name" colors={colors}>
        {content.model}
      </CarouselItemInfo>
    </CarouselItemWrapper>
  );
};

export default CarouselItem;
