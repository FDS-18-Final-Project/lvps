import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, fontSizes, calcRem, colors } from 'theme/theme';
import PriceTable from './PriceTable';

const TitlePriceTableContainer = styled(PriceTable)`
  padding: ${({ padding }) => calcInterval(padding)};

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

const TitlePriceTable = ({ priceColor, heading, padding, ...restProps }) => {
  return (
    <TitlePriceTableContainer
      priceColor={priceColor}
      padding={padding}
      {...restProps}
    >
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
  heading: 'IGL QUARTZ+',
  padding: [78, 50, 81]
};

export default React.memo(TitlePriceTable);
