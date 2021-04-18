import React, { useState } from 'react';
import styled from 'styled-components';
import { calcInterval, colors, calcRem, fontSizes } from 'theme/theme';
import PriceTable from './PriceTable';
import { oneOfType } from 'prop-types';

const PrimiumPriceTableContainer = styled(PriceTable)`
  padding: ${calcInterval([28, 15, 58])};
  background-image: url(assets/${({ option }) => `${option}.png`});
  background-repeat: no-repeat;
  background-position: bottom;
  border: 3px solid
    ${({ active, option }) => (active ? colors[option] : colors.lightGray)};
  box-shadow: ${({ active }) =>
    active ? 'none' : '0 3px 5px rgba(94, 94, 94, 0.4)'};
  background-size: cover;
  padding: ${calcInterval([23, 30, 58])};
  transition: 0.3s;

  em {
    display: block;
    text-align: center;
    width: 100%;
    margin-bottom: ${calcRem(30)};
    color: ${({ option }) => colors[option]};
    font-size: ${fontSizes.xl};
    font-weight: bold;
    line-height: ${calcRem(36)};
    border-bottom: 1px solid ${colors.lightGray};
  }

  strong {
    margin-bottom: ${calcRem(135)};
  }
  .divider {
    display: none;
  }
`;

const PrimiumPriceTable = ({ option, ...restProps }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);
  return (
    <PrimiumPriceTableContainer
      mode="title"
      title="Starting At"
      option={option}
      active={active}
      onClick={handleClick}
      {...restProps}
    >
      <em>{option.toUpperCase()}</em>
    </PrimiumPriceTableContainer>
  );
};

PrimiumPriceTable.propTypes = {
  option: oneOfType(['Gold', 'Silver', 'Platinum', 'Bronze'])
};

PrimiumPriceTable.defaultProps = {
  option: 'Gold'
};

PrimiumPriceTableContainer.displayName = 'PrimiumPriceTableContainer';
export default PrimiumPriceTable;
