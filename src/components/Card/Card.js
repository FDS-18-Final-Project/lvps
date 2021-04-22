import React from 'react';
import { string, array, oneOfType, object } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes, device } from 'theme/theme';
import { motion } from 'framer-motion';
import IconParagraph from 'components/IconParagraph/IconParagraph';

const typeStyle = {
  arrow: {
    'clip-path': 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
    'max-width': calcRem(300)
  },
  square: {
    'clip-path': 'initial',
    'max-width': calcRem(340)
  }
};
const typeMobileStyle = {
  arrow: {
    'clip-path': 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
    'min-height': calcRem(345),
    padding: `${calcRem(57)} 1.25rem 1rem`
  }
};

const StyledCard = styled(motion('div'))`
  height: ${({ height }) => calcRem(height)};
  background: ${({ background }) => background};
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-basis: 25%;
  flex-direction: column;
  align-items: center;
  padding: ${calcInterval([50, 35])};
  transform: ${({ translateX, type }) =>
    type === 'arrow' ? `translateX(${calcRem(translateX)})` : null};

  p {
    font-weight: 500;
    text-align: center !important;
    color: ${colors.white};
    font-size: ${calcRem(18)};
    line-height: ${calcRem(27)};
    margin: ${calcRem(40)} auto 0;
  }
  svg {
    margin: 0;
  }
  svg path:nth-child(1) {
    fill: none;
  }
  & div div:nth-child(2) {
    margin: 0;
    width: 100%;
  }

  ${({ type }) => typeStyle[type]}

  ${device.desktop} {
    padding: ${calcInterval([50, 30])};
  }

  ${device.tablet} {
    max-width: initial;
    height: initial;
    align-items: flex-start;
    padding: ${({ type }) =>
      type === 'arrow' ? `1rem 1.25rem 1rem !important` : '1rem 1.25rem;'};
    transform: ${({ translateX, type }) =>
      type === 'arrow' ? `translate(0, ${calcRem(translateX * 2)})` : null};
    min-height: ${({ type }) =>
      type === 'arrow' ? `${calcRem(220)} !important` : 'initial'};

    & div {
      flex-direction: row;
      margin: 0;
      width: 100%;

      div:nth-child(1) {
        width: initial;
      }
    }

    & p,
    & h3 {
      margin: 0 0 ${calcRem(20)} 0;
      padding-left: ${calcRem(20)};
      font-size: ${fontSizes.lg};
      text-align: center;
    }
    ${({ type }) => typeMobileStyle[type]};
  }
`;

const Card = ({
  type,
  iconcolor,
  content,
  iconType,
  motionProps,
  ...restProps
}) => {
  return (
    <StyledCard type={type} iconType={iconType} {...motionProps} {...restProps}>
      <IconParagraph
        iconType={iconType}
        iconcolor={iconcolor}
        content={content}
      />
    </StyledCard>
  );
};

Card.propTypes = {
  type: string.isRequired,
  iconType: string.isRequired,
  iconcolor: string,
  content: oneOfType([array, object]),
  width: string,
  height: string,
  color: string,
  background: string
};

Card.defaultProps = {
  type: 'square',
  iconType: 'likeCircle',
  iconcolor: colors.white,
  content: [],
  background: colors.black
};

Card.displayName = 'StyledCard';
StyledCard.displayName = 'Card';

export default Card;
