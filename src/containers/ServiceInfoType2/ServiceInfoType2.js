import React from 'react';
import { array, string, oneOf } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';
import { A11yHidden, Paragraph } from 'components';
import CardInfo from 'components/CardInfo/CardInfo';

const ServiceInfoType2Container = styled.section`
  border-top: 2px solid ${colors.lightGray};
`;
const FullContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const ImageSideContainer = styled.div`
  max-width: ${calcRem(480)};
  flex-grow: 1;
  div {
    width: ${calcRem(480)};
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
const ContentSideContainer = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  text-align: center;
  & h3 {
    font-size: ${fontSizes.titleBase};
    font-family: Monserrat;
    font-weight: 700;
    color: ${colors.black};
    line-height: 150%;
    text-align: start;
  }
`;
const StyledContentContainer = styled.div`
  margin-left: ${({ mode }) => (mode === 'left' ? calcRem(110) : 0)};
  margin-right: ${({ mode }) => (mode === 'right' ? calcRem(110) : 0)};

  h4 {
    text-align: start;
    font-size: ${fontSizes.xl};
  }
  p {
    text-align: start;
    font-size: ${fontSizes.lg};
    line-height: 150%;
  }
  ul {
    padding: 0;
    width: 100%;
    margin: 0 auto;
  }
  ul li p {
    margin: 0;
  }
`;
const ServiceInfoType2 = ({
  mode,
  title,
  subTitle,
  children,
  imagePath,
  imageLabel,
  infoList
}) => {
  return (
    <ServiceInfoType2Container>
      <A11yHidden as="h2">{title}</A11yHidden>
      <FullContainer>
        {mode === 'left' && (
          <ImageSideContainer>
            <div>
              <img src={imagePath} alt={imageLabel} />
            </div>
          </ImageSideContainer>
        )}
        <ContentSideContainer>
          <StyledContentContainer mode={mode}>
            <h3>{title}</h3>
            <Paragraph type="normal" title={subTitle} headingNum="4">
              {children}
            </Paragraph>
            {infoList && <CardInfo infoList={infoList}></CardInfo>}
          </StyledContentContainer>
        </ContentSideContainer>
        {mode === 'right' && (
          <ImageSideContainer>
            <div>
              <img src={imagePath} alt={imageLabel} />
            </div>
          </ImageSideContainer>
        )}
      </FullContainer>
    </ServiceInfoType2Container>
  );
};

ServiceInfoType2.propTypes = {
  mode: oneOf(['left', 'right']),
  title: string,
  subTitle: string,
  children: string,
  imagePath: string,
  imageLabel: string,
  infoList: array
};

ServiceInfoType2.defaultProps = {
  mode: 'left',
  title: 'PAINT PROTECTION FILM & VINYL',
  subTitle: 'CERAMIC PRO PPF & VINYL',
  children:
    'Top Coat allows the surface to stay cleaner longer as dirt and grime will not stick to it. The super hydrophobic effect of the coating will cause water to bead up and roll off the surface along with any dirt and grime. Top Coat is usually applied over 9H in the layering process. Though not as durable as 9H, it can also be applied on its own. Top Coat also enhances gloss depth further on all painted surfaces for that wet look that is often hard to attain with synthetic waxes.',
  imagePath: './assets/dummyCar.png',
  imageLabel: 'Car Image',
  infoList: []
};

FullContainer.displayName = 'FullContainer';
ServiceInfoType2Container.displayName = 'ServiceInfoType2Container';

export default ServiceInfoType2;
