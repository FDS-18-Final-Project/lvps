import Tag from 'components/Tag/Tag';
import React from 'react';
import styled, { css } from 'styled-components';
import PriceTable from './PriceTable';
import { string } from 'prop-types';
import { calcInterval, calcRem, colors } from '../../theme/theme';

const TagPriceTableContainer = styled(PriceTable)`
  margin: 100px;
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
`;

const TagPriceTable = ({ type, typeText, ...restProps }) => {
  return (
    <TagPriceTableContainer {...restProps}>
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
  typeText: 'Gold'
};

TagPriceTableContainer.displayName = 'TagPriceTableContainer';
export default TagPriceTable;
