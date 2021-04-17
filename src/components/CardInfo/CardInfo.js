import React from 'react';
import { array, string } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import Icon from 'components/Icon/Icon';

const CardInfoContainer = styled.ul`
  display: inline-block;

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

const CardInfo = ({ iconColor, fgColor, infoList, nonSelectedIdx }) => {
  return (
    <CardInfoContainer>
      {infoList.map((info, idx) => (
        <li key={info}>
          <Icon
            type="checked"
            color={idx >= nonSelectedIdx ? colors.lightGray : colors[iconColor]}
            width={calcRem(17)}
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
  iconColor: string,
  fgColor: string,
  infoList: array
};

CardInfo.defaultProps = {
  iconColor: 'redMain',
  fgColor: 'black',
  infoList: cardInfolist
};

export default CardInfo;
