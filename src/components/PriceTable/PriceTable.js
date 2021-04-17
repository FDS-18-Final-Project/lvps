import React, { useState } from 'react';
import { number, string, bool, oneOf, object } from 'prop-types';
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
  /* margin-left: 300px; */

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
        li,
        p {
          color: ${colors.white};
        }

        .non-selected {
          color: ${colors.gray};
        }

        .non-selected-icon {
          path:first-child {
            stroke: ${colors.gray};
          }
          path:last-child {
            fill: ${colors.gray};
          }
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
      height: 45px;
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

const PriceTable = ({
  type,
  icon,
  modal,
  maxWidth,
  fgColor,
  iconColor,
  // infoList,
  // tagType,
  // tagText,
  hover,
  // price,
  content,
  ...restProps
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <PriceTableContainer
      maxWidth={maxWidth}
      hover={hover}
      icon={icon}
      modal={modal}
      bgImage={content.tagText}
      active={isActive}
      onClick={handleClick}
      {...restProps}
    >
      {!modal && (
        <Tag className="Tag" type={content.tagType}>
          {content.tagText}
        </Tag>
      )}
      <div>{type === 'list' ? 'From' : 'Starting At'}</div>
      <strong>${content.price}</strong>
      <Divider width={55} height={1} margin={modal ? `132 0 33` : `33 0`} />
      <IconContainer>
        {icon &&
          content.iconContent.map(cont => (
            <IconParagraph
              className="IconPargraph"
              key={cont.id}
              content={cont}
              iconType="likeCircle"
            />
          ))}
      </IconContainer>
      {type === 'list' ? (
        <CardInfo
          infoList={content.cardInfo}
          nonSelectedIdx={content.nonSelectedIdx}
          fgColor={fgColor}
          iconColor={iconColor}
        />
      ) : (
        <CardInfoTitleDescription infoList={content.cardInfo} />
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
  // infoList: array,
  tagType: string,
  tagText: string,
  price: number,
  hover: bool,
  modal: bool,
  content: object
};

PriceTable.defaultProps = {
  type: 'list',
  content: [
    {
      id: 1,
      tagType: 'tagSilver',
      tagText: 'Gold',
      price: '400',
      iconContent: [
        { id: 1, title: 'Color Stable' },
        { id: 2, title: 'Color Stable' },
        { id: 3, title: 'Color Stable' }
      ],
      nonSelectedIdx: 7,
      cardInfo: [
        'Complete exterior hand wash',
        'Complete interior vaccum',
        'Leather cleaning and conditioning',
        'Cleaning windows and mirrors',
        'Salt removal',
        'Cleaning door jams',
        'Wheel cleaning and tire dressing',
        'Removing bugs, tar, tree sap',
        'Claybar & iron paint decontamination',
        'Polish to add gloss to paint',
        'Compound and polish to remove scratches',
        'Paint sealant',
        'Engine cleaning and dressing',
        'Headlights polish'
      ]
    }
  ],
  maxWidth: 500,
  fgColor: 'black',
  iconColor: 'redMain',
  // tagType: 'tagGold',
  // tagText: 'Gold',
  // price: 4500,
  hover: true,
  icon: false,
  modal: false
};

PriceTableContainer.displayName = 'PriceTableContainer';
IconContainer.displayName = 'IconContainer';
export default PriceTable;
