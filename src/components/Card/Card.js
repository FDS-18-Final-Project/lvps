import React from 'react';
import { string, array } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors } from 'theme/theme';
import { IconParagraph } from 'components';
import { motion } from 'framer-motion';

const typeStyle = {
  arrow: {
    'clip-path': 'polygon(80% 0, 100% 50%, 80% 100%, 0 99%, 0 0)',
    width: '100%'
  },
  square: {
    'clip-path': 'initial',
    width: '100%'
  }
};
const typeMobileStyle = {
  arrow: {
    'flex-direction': 'row'
  },
  square: {
    'flex-direction': 'row'
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
    padding: ${calcInterval([50, 20])};
  }

  @media only screen and (max-width: 768px) {
    ${({ type }) => typeMobileStyle[type]}
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
  background: colors.redMain
};

Card.displayName = 'StyledCard';
StyledCard.displayName = 'Card';

export default Card;
