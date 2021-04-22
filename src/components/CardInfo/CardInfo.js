import React from 'react';
import { array, string } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import Icon from 'components/Icon/Icon';

const CardInfoContainer = styled.ul`
  display: inline-block;
  min-height: ${({ minHeight }) => calcRem(minHeight)};

  li {
    display: flex;
    align-items: center;

    div {
      margin-right: ${calcRem(5)};
    }
  }

  li + li {
    margin-top: ${calcRem(10)};
  }
`;

const StyledCardContent = styled.p`
  color: ${({ nonSelected, fgColor }) =>
    nonSelected ? colors.lightGray : colors[fgColor]};
`;

const cardInfolist = [
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
];

const CardInfo = ({
  iconcolor,
  fgColor,
  infoList,
  nonSelectedIdx,
  minHeight
}) => {
  return (
    <CardInfoContainer minHeight={minHeight}>
      {infoList.map((info, idx) => (
        <li key={idx}>
          <Icon
            type="checked"
            color={idx >= nonSelectedIdx ? colors.lightGray : colors[iconcolor]}
            width={calcRem(17)}
            className={idx >= nonSelectedIdx ? 'non-selected-icon' : ''}
          />
          <StyledCardContent
            nonSelected={idx >= nonSelectedIdx}
            className={idx >= nonSelectedIdx ? 'non-selected' : ''}
            fgColor={fgColor}
          >
            {info}
          </StyledCardContent>
        </li>
      ))}
    </CardInfoContainer>
  );
};

CardInfo.propTypes = {
  /** 아이콘 색깔 */
  iconcolor: string,
  /** 폰트 색깔 */
  fgColor: string,
  /** 컨텐츠 */
  infoList: array
};

CardInfo.defaultProps = {
  iconcolor: 'redMain',
  fgColor: 'black',
  infoList: cardInfolist,
  padding: [0]
};

export default CardInfo;
