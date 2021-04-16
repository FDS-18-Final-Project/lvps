import React, { useState } from 'react';
import { array, number, string, bool, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import {
  CardInfo,
  Divider,
  Tag,
  IconParagraph,
  CardInfoTitleDescription
} from 'components';
import { Layout } from 'pages';

const PriceTableContainer = styled.div`
  max-width: ${({ maxWidth }) => calcRem(maxWidth)};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${calcInterval([135, 30, 103])};
  border: 3px solid ${colors.lightGray};
  box-shadow: 0 3px 5px rgba(94, 94, 94, 0.4);
  position: relative;
  transition: 0.3s;
  margin-left: 300px;

  ${({ modal }) =>
    modal &&
    css`
      background-image: url(assets/${({ bgImage }) => `${bgImage}.svg`});
      background-repeat: no-repeat;
      background-position: bottom;
      border: 3px solid
        ${({ active }) => (active ? 'yellow' : colors.lightGray)};
      box-shadow: ${({ active }) => active && 'none'};
      background-size: cover;
      padding: ${calcInterval([62, 30, 58])};
    `}

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
        li {
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

  ul {
    width: ${({ icon }) => (icon ? '80%' : '100%')};
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

const IconContainer = styled(Layout.FlexContainer)`
  width: 100%;
  padding: 0 10px;

  .IconPargraph {
    margin: 0 5px;

    div {
      width: 100%;
      margin: 0;
      display: inline-block;
      text-align: center;
    }
    h3 {
      margin-top: 10px;
      margin-bottom: 33px;
      font-size: ${fontSizes.base};
    }
    svg {
      width: 55px;
      height: 55px;
      margin: 0;
    }
  }

  article + article {
    margin-left: ${calcRem(10)};
  }
`;

const content = [
  { id: 1, title: 'Color Stable' },
  { id: 2, title: 'Color Stable' },
  { id: 3, title: 'Color Stable' }
];

const PriceTable = ({
  type,
  icon,
  modal,
  maxWidth,
  fgColor,
  iconColor,
  infoList,
  tagType,
  tagText,
  hover,
  price
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <PriceTableContainer
      maxWidth={maxWidth}
      hover={hover}
      icon={icon}
      modal={modal}
      bgImage={tagText}
      active={isActive}
      onClick={handleClick}
    >
      {!modal && (
        <Tag className="Tag" type={tagType}>
          {tagText}
        </Tag>
      )}
      <div>{type === 'list' ? 'From' : 'Starting At'}</div>
      <strong>${price}</strong>
      <Divider width={55} height={1} margin={modal ? `132 0 33` : `33 0`} />
      <IconContainer>
        {icon &&
          content.map(cont => (
            <IconParagraph
              className="IconPargraph"
              key={cont.id}
              content={cont}
              iconType="likeCircle"
            />
          ))}
      </IconContainer>
      {type === 'list' ? (
        <CardInfo infoList={infoList} fgColor={fgColor} iconColor={iconColor} />
      ) : (
        <CardInfoTitleDescription infoList={infoList} />
      )}
    </PriceTableContainer>
  );
};

PriceTable.propTypes = {
  type: oneOf(['list', 'title']),
  icon: bool,
  maxWidth: number,
  fgColor: string,
  iconColor: string,
  infoList: array,
  tagType: string,
  tagText: string,
  price: number,
  hover: bool,
  modal: bool
};

PriceTable.defaultProps = {
  type: 'list',
  maxWidth: 500,
  fgColor: 'black',
  iconColor: 'redMain',
  tagType: 'tagGold',
  tagText: 'Gold',
  price: 4500,
  hover: true,
  icon: false,
  modal: false
};

export default PriceTable;
