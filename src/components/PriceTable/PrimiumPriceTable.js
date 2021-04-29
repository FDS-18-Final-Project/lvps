import React from 'react';
import { oneOf } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, colors, calcRem, fontSizes } from 'theme/theme';
import PriceTable from './PriceTable';
import { useViewSize } from 'hooks';

const PrimiumPriceTableContainer = styled(PriceTable)`
  position: relative;
  padding: ${calcInterval([28, 15, 58])};
  background-image: url(assets/${({ option }) => `${option}.png`});
  background-repeat: no-repeat;
  background-position: bottom;
  border: 3px solid
    ${({ active, option }) => (active ? colors[option] : colors.lightGray)};
  box-shadow: ${({ active }) =>
    active ? 'none' : '0px 5px 10px rgba(94, 94, 94, 0.4)'};
  background-size: cover;
  padding: ${calcInterval([23, 30, 58])};
  transform: ${({ active, desktop }) => active && desktop && 'scale(1.05)'};
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

const PrimiumPriceTable = ({ id, option, active, onClick, ...restProps }) => {
  const { desktop } = useViewSize();
  return (
    <PrimiumPriceTableContainer
      id={id}
      mode="title"
      title="Starting At"
      option={option}
      onClick={e => onClick(e)}
      active={active}
      desktop={desktop ? 1 : 0}
      {...restProps}
    >
      <em>{option.toUpperCase()}</em>
    </PrimiumPriceTableContainer>
  );
};

PrimiumPriceTable.propTypes = {
  option: oneOf(['Gold', 'Silver', 'Platinum', 'Bronze'])
};

PrimiumPriceTable.defaultProps = {
  option: 'Gold'
};

PrimiumPriceTableContainer.displayName = 'PrimiumPriceTableContainer';
export default React.memo(PrimiumPriceTable);
