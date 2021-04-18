import React from 'react';
import styled from 'styled-components';
import PriceTable from './PriceTable';
import { calcInterval, fontSizes, calcRem, colors } from 'theme/theme';
import { string } from 'prop-types';

const TitlePriceTableContainer = styled(PriceTable)`
  padding: ${calcInterval([78, 50, 81])};

  h2 {
    text-align: center;
    min-height: ${calcRem(70)};
    margin-bottom: ${calcRem(16)};
    max-width: ${calcRem(214)};
    font-size: ${fontSizes.xl};
    font-weight: bold;
    line-height: ${calcRem(36)};
  }

  strong {
    color: ${({ priceColor }) => colors[priceColor]};
  }
  svg {
    path {
      fill: ${({ priceColor }) => colors[priceColor]};
    }
  }
`;

const TitlePriceTable = ({ priceColor, heading, ...restProps }) => {
  return (
    <TitlePriceTableContainer priceColor={priceColor} {...restProps}>
      <h2>{heading}</h2>
    </TitlePriceTableContainer>
  );
};

TitlePriceTable.propTypes = {
  priceColor: string,
  heading: string
};

TitlePriceTable.defaultProps = {
  priceColor: 'green',
  heading: 'IGL QUARTZ+'
};

export default TitlePriceTable;
