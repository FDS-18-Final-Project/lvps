import Icon from 'components/Icon/Icon';
import { array, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';

const CardInfoContainer = styled.ul`
  display: inline-block;
  li {
    display: flex;
    align-items: center;
    color: ${({ fgColor }) => colors[fgColor]};
  }

  li + li {
    margin-top: ${calcRem(10)};
  }
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

const CardInfo = ({ iconColor, fgColor, infoList }) => {
  return (
    <CardInfoContainer fgColor={fgColor}>
      {infoList.map((info, i) => (
        <li key={i}>
          <Icon type="checked" color={colors[iconColor]} width={calcRem(17)} />
          {info}
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
