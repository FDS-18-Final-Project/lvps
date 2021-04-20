import React from 'react';
import { string, array } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem, calcInterval, fontSizes } from 'theme/theme';
import Paragraph from 'components/Paragraph/Paragraph';
import CardInfo from 'components/CardInfo/CardInfo';

const StyledExplainCardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  max-width: ${calcRem(570)};
  border: 3px solid ${colors.lightGray};
  padding: ${calcInterval([75, 80])};
  min-height: ${calcRem(675)};
  box-sizing: border-box;
  color: ${colors.black};
  h4 {
    text-align: center;
    margin-top: 0;
    font-weight: 700;
    font-size: ${fontSizes.xl};
  }
  h4 + p {
    font-size: ${fontSizes.lg};
    line-height: 150%;
  }
  ul {
    padding: 0;
  }
  ul li p {
    margin: 0;
    font-size: ${fontSizes.base};
    line-height: 150%;
  }
`;
const ExplainCard = ({ title, desc, infoList }) => {
  console.log(title, desc, infoList);
  return (
    <StyledExplainCardContainer>
      <Paragraph type="normal" title={title} headingNum="4">
        {desc}
      </Paragraph>
      <CardInfo infoList={infoList}></CardInfo>
    </StyledExplainCardContainer>
  );
};

ExplainCard.prototype = {
  title: string,
  desc: string,
  infoList: array
};

ExplainCard.defaultProps = {
  title: 'CERAMIC PRO LEATHER',
  desc:
    'Ceramic Pro Leather will preserve the factory look and feel as it slows down the aging process. The coating will prevent contaminants from staining the substrate.',
  infoList: []
};

StyledExplainCardContainer.displayName = 'StyledExplainCard';

export default ExplainCard;
