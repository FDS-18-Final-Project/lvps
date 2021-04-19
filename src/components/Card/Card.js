import React from 'react';
import { string, array } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import { IconParagraph } from 'components';
import { motion } from 'framer-motion';

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

  p {
    font-weight: 500;
    text-align: center;
    color: ${colors.white};
    font-size: ${calcRem(18)};
    line-height: ${calcRem(27)};
    margin: ${calcRem(40)} auto 0;
  }
  svg {
    margin: 0;
  }
  & div div:nth-child(2) {
    margin: 0;
    width: 100%;
  }

  ${({ type }) => typeStyle[type]}

  @media only screen and (max-width: 1200px) {
    padding: ${calcInterval([50, 30])};
  }

  @media only screen and (max-width: 768px) {
    max-width: initial;
    height: initial;
    padding: 1rem 1.25rem;

    & div {
      flex-direction: row;
      margin: 0;
    }
    & p,
    & h3 {
      margin: 0 0 ${calcRem(20)} 0;
      padding-left: ${calcRem(20)};
      text-align: center;
      font-size: ${fontSizes.lg};
    }
    ${({ type }) => typeMobileStyle[type]};
  }
`;

const Card = ({
  type,
  iconColor,
  content,
  iconType,
  motionProps,
  ...restProps
}) => {
  return (
    <StyledCard type={type} iconType={iconType} {...motionProps} {...restProps}>
      <IconParagraph
        iconType={iconType}
        iconColor={iconColor}
        content={content}
      />
    </StyledCard>
  );
};

Card.propTypes = {
  type: string.isRequired,
  iconType: string.isRequired,
  iconColor: string,
  content: array,
  width: string,
  height: string,
  color: string,
  background: string
};

Card.defaultProps = {
  type: 'square',
  iconType: 'likeCircle',
  iconColor: colors.white,
  content: [],
  height: '340',
  background: colors.black
};

Card.displayName = 'StyledCard';
StyledCard.displayName = 'Card';

export default Card;
