import Tag from 'components/Tag/Tag';
import React from 'react';
import styled, { css } from 'styled-components';
import PriceTable from './PriceTable';
import { string } from 'prop-types';
import { calcInterval, calcRem, colors } from '../../theme/theme';
import { useViewSize } from 'hooks/';

const TagPriceTableContainer = styled(PriceTable)`
  padding: ${calcInterval([135, 30, 103])};

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${colors.red_05};
        color: ${colors.white};
        transform: scale(1.02);

        h3 {
          color: ${colors.white};
        }

        strong,
        li,
        p {
          color: ${colors.white};
        }

        svg {
          path:first-child {
            stroke: ${colors.white};
          }
          path:last-child {
            fill: ${colors.white};
          }
        }
      }
    `}

  .tag {
    position: absolute;
    top: 4%;
    left: ${calcRem(-7)};
  }

  strong {
    color: ${({ priceColor }) => colors[priceColor]};
  }
`;

const TagPriceTable = ({ type, typeText, priceColor, ...restProps }) => {
  const { mobile } = useViewSize();

  return (
    <TagPriceTableContainer
      priceColor={priceColor}
      hover={mobile ? false : true}
      {...restProps}
    >
      <Tag className="tag" type={type}>
        {typeText}
      </Tag>
    </TagPriceTableContainer>
  );
};

TagPriceTable.propTypes = {
  type: string,
  typeText: string
};

TagPriceTable.defaultProps = {
  type: 'tagGold',
  typeText: 'Gold',
  priceColor: colors.redMain
};

TagPriceTableContainer.displayName = 'TagPriceTableContainer';
export default TagPriceTable;
