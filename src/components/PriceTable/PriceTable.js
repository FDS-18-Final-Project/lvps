import React, { useState } from 'react';
import {
  number,
  string,
  oneOf,
  bool,
  array,
  node,
  oneOfType
} from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';
import { CardInfo, Divider, CardInfoTitleDescription } from 'components';
import { Layout } from 'pages';
import IconParagraph from 'components/IconParagraph/IconParagraph';

const PriceTableContainer = styled.div`
  max-width: ${({ maxWidth }) => calcRem(maxWidth)};
  min-height: ${({ minHeight }) => calcRem(minHeight)};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid ${colors.lightGray};
  box-shadow: 0 3px 5px rgba(94, 94, 94, 0.4);
  position: relative;
  transition: 0.3s;
  background-color: ${colors.white};

  strong {
    color: ${colors.red_05};
    font-size: ${fontSizes.titleLarge};
    font-weight: bold;
    margin-top: ${calcRem(10)};
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
`;

const contents = [
  { id: 1, title: 'Nont-Metal /Fading' },
  { id: 2, title: 'Color Stable' },
  { id: 3, title: 'Dyed' }
];

const PriceTable = ({
  mode,
  title,
  price,
  maxWidth,
  fgColor,
  iconColor,
  icon,
  children,
  heading,
  info,
  iconContents,
  descriptionContainer,
  minHeight,
  nonSelectedIdx,
  ...restProps
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  return (
    <PriceTableContainer
      maxWidth={maxWidth}
      active={isActive}
      onClick={handleClick}
      {...restProps}
    >
      {children}

      <div className="title">{title}</div>
      <strong>${price}</strong>
      <Divider className="divider" width={55} height={1} margin="33 0" />
      <IconContainer>
        {icon &&
          iconContents.map(content => (
            <IconParagraph
              className="IconPargraph"
              key={content.id}
              content={content}
              iconType="likeCircle"
            />
          ))}
      </IconContainer>
      {descriptionContainer}
      {mode === 'list' ? (
        <CardInfo
          infoList={info}
          minHeight={minHeight}
          nonSelectedIdx={nonSelectedIdx}
          fgColor={fgColor}
          iconColor={iconColor}
        />
      ) : (
        <CardInfoTitleDescription minHeight={minHeight} infoList={info} />
      )}
    </PriceTableContainer>
  );
};

PriceTable.propTypes = {
  mode: oneOf(['list', 'title']),
  maxWidth: number,
  minHeight: number,
  fgColor: string,
  iconColor: string,
  title: oneOfType([string, node]),
  price: number,
  icon: bool,
  info: array,
  iconContents: array,
  descriptionContainer: node
};

PriceTable.defaultProps = {
  mode: 'list',
  title: 'From',
  price: '4500',
  maxWidth: 500,
  fgColor: 'black',
  iconColor: 'redMain',
  iconContents: contents,
  descriptionContainer: null
};

PriceTableContainer.displayName = 'PriceTableContainer';
export default PriceTable;
