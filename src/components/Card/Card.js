import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors } from 'theme/theme';
import { Icon } from 'components';

const typeStyle = {
  arrow: {
    'clip-path': 'polygon(80% 0, 100% 50%, 80% 100%, 0 99%, 0 0)',
    width: calcRem(265)
  },
  square: {
    'clip-path': 'initial',
    width: calcRem(237)
  }
};

const StyledCard = styled.div`
  width: ${({ width }) => calcRem(width)};
  height: ${({ height }) => calcRem(height)};
  background: ${({ background }) => background};
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${calcInterval([50, 35])};

  span {
    width: ${calcRem(167)};
    font-family: 'Helvetica Neue LT Pro';
    font-weight: 500;
    text-align: center;
    color: ${({ color }) => color};
    font-size: ${calcRem(18)};
    line-height: ${calcRem(27)};
    margin: ${calcRem(40)} auto 0;
  }

  ${({ type }) => typeStyle[type]}
`;
const StyledIconContainer = styled.div`
  margin: ${({ cardType }) =>
    cardType === 'square' ? '0 auto' : `0 0 0 ${calcRem(27)}`};
`;
const stylesFromCard = {
  style: {
    'border-radius': '50%',
    border: `${calcRem(4)} solid ${colors.white}`,
    width: calcRem(120),
    height: calcRem(120)
  }
};

const StyledIcon = styled(Icon)`
  width: ${calcRem(66)};
  height: ${calcRem(60)};
  padding: ${calcRem(20)};
  margin: 0 auto !important;
`;

const Card = ({ type, children, iconType, ...restProps }) => {
  return (
    <StyledCard type={type} iconType={iconType} {...restProps}>
      <StyledIconContainer cardType={type}>
        <StyledIcon type={iconType} stylesForContainer={stylesFromCard} />
      </StyledIconContainer>
      <span>{children}</span>
    </StyledCard>
  );
};

Card.propTypes = {
  type: string.isRequired,
  iconType: string.isRequired,
  children: string,
  width: string,
  height: string,
  color: string,
  background: string
};

Card.defaultProps = {
  type: 'square',
  iconType: 'checkedCar',
  children: 'card',
  width: '237',
  height: '340',
  color: colors.white,
  background: colors.redMain
};

Card.displayName = 'StyledCard';
StyledCard.displayName = 'Card';

export default Card;
