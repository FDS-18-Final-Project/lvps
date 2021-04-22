import React from 'react';
import { oneOf, string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, colors, calcRem, fontSizes } from 'theme/theme';
import PriceTable from './PriceTable';

const HelmetPriceTableContainer = styled(PriceTable)`
  padding: ${calcInterval([0, 15, 58])};
  background-image: url(assets/${({ color }) => `${color}.png`});
  background-repeat: no-repeat;
  background-position: 0 -20px;
  border: 3px solid
    ${({ active, color }) => (active ? colors[color] : colors.lightGray)};
  box-shadow: ${({ active }) =>
    active ? 'none' : '0 0 15px rgba(94, 94, 94, 0.8)'};
  background-size: 100%;
  transition: 0.3s;

  em {
    font-size: ${fontSizes.xl};
    font-weight: bold;
    color: ${colors.white};
    height: ${calcRem(36)};
    line-height: ${calcRem(36)};
    margin: ${calcInterval([40, 0, 65])};
  }

  strong {
    color: ${({ priceColor }) => colors[priceColor]};
  }
  .title {
    height: ${calcRem(20)};
  }
`;

const HelmetPriceTable = ({
  color,
  option,
  title,
  priceColor,
  id,
  name,
  active,
  onClick,
  ...restProps
}) => {
  return (
    <HelmetPriceTableContainer
      id={id}
      name={name}
      color={color}
      title={title}
      priceColor={priceColor}
      heading={option}
      active={active}
      onClick={onClick}
      {...restProps}
    >
      <em>{option}</em>
    </HelmetPriceTableContainer>
  );
};

HelmetPriceTable.propTypes = {
  color: oneOf(['black', 'green', 'red_05']),
  heading: string,
  title: string,
  priceColor: string
};

HelmetPriceTable.defaultProps = {
  color: 'black',
  heading: 'CARBON FILM',
  title: 'Starting At',
  priceColor: 'red_05'
};
export default React.memo(HelmetPriceTable);
