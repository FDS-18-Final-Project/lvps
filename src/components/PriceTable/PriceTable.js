import CardInfo from 'components/CardInfo/CardInfo';
import Divider from 'components/Divider/Divider';
import React from 'react';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import { array, number, string } from 'prop-types';
import Tag from 'components/Tag/Tag';

const PriceTableContainer = styled.div`
  max-width: ${({ maxWidth }) => calcRem(maxWidth)};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${calcInterval([135, 27, 103])};
  border: 3px solid ${colors.lightGray};
  position: relative;
  margin-left: 300px;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.red_05};
    color: ${colors.white};
    transform: scale(1.02);

    strong,
    li {
      color: ${colors.white};

      path {
        fill: ${colors.white};
      }
    }
  }

  strong {
    color: ${colors.red_05};
    font-size: ${fontSizes.titleLarge};
    font-weight: bold;
    margin-top: ${calcRem(10)};
  }

  .Tag {
    top: 5%;
    left: -7px;
  }
`;

const PriceTable = ({
  maxWidth,
  fgColor,
  iconColor,
  infoList,
  tagType,
  tagText,
  price
}) => {
  return (
    <PriceTableContainer maxWidth={maxWidth}>
      <Tag className="Tag" type={tagType}>
        {tagText}
      </Tag>
      <div>From</div>
      <strong>${price}</strong>
      <Divider width={55} height={1} margin="33 0" />
      <CardInfo infoList={infoList} fgColor={fgColor} iconColor={iconColor} />
    </PriceTableContainer>
  );
};

PriceTable.propTypes = {
  maxWidth: number,
  fgColor: string,
  iconColor: string,
  infoList: array,
  tagType: string,
  tagText: string,
  price: number
};

PriceTable.defaultProps = {
  maxWidth: 322,
  fgColor: 'black',
  iconColor: 'redMain',
  tagType: 'tagGold',
  tagText: 'Gold',
  price: 4500
};

export default PriceTable;
