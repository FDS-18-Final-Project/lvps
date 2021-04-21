import React from 'react';
import { array, string } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes, device, calcInterval } from 'theme/theme';
import CardInfo from 'components/CardInfo/CardInfo';
import ExplainCard from 'components/ExplainCard/ExplainCard';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import Paragraph from 'components/Paragraph/Paragraph';
import useViewSize from 'hooks/useViewSize';

const explainCardType1InfoList = [
  'Excellent Durability',
  'Easy to Clean',
  'Super Hydrophobic Effect',
  'Superior Wear Resistance',
  'Keeps Leather Soft',
  'Preserves Factory Look & Feel'
];

const explainCardType2InfoList = [
  'Excellent Durability',
  'Super Hydrophobic Effect – 140⁰ of water beads',
  'Excellent Wear Resistance',
  'Repels Spills & Stains',
  'Keeps Fibers Clean'
];

const ServiceInfoType4Container = styled.section`
  border-top: 2px solid ${colors.lightGray};
`;
const FullContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  ${device.tablet} {
    flex-direction: column;
    padding: 0 ${calcRem(15)};
  }
`;
const ServiceInfoContainer = styled.div`
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
  ${device.tablet} {
    max-width: initial;
    margin-bottom: ${calcRem(25)};

    div {
      width: 100%;
    }
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
    margin-top: ${calcRem(75)};
    margin-bottom: ${calcRem(20)};
  }
  ${device.desktop} {
    margin-right: ${calcRem(50)};
    h3 {
      font-size: ${calcRem(40)};
      line-height: 120%;
    }
  }
  ${device.tablet} {
    h3 {
      font-size: ${fontSizes.xl};
      line-height: 150%;
      text-align: center;
      margin-bottom: ${calcRem(35)};
    }
  }
`;
const StyledContentContainer = styled.div`
  margin-left: ${calcRem(60)};

  h4 {
    text-align: start;
    font-size: ${fontSizes.xl};
  }
  p {
    margin-top: 0;
    margin-bottom: ${calcRem(23)};
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
  ${device.desktop} {
    h4 {
      font-size: ${calcRem(20)};
    }
    p {
      font-size: ${fontSizes.base};
    }
  }
  ${device.tablet} {
    margin: 0;

    ul {
      margin-bottom: ${calcRem(75)};
    }
  }
`;

const ExplainCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${calcRem(45)} 0 ${calcRem(60)};

  h4 {
    margin-bottom: ${calcRem(45)};
  }

  ${device.desktop} {
    & > div {
      max-width: ${calcRem(400)};
      padding: ${calcInterval([75, 30])};
    }
  }

  ${device.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: initial;

    & > div {
      max-width: initial;
      width: 100%;
      padding: ${calcInterval([75, 50])};
    }
    & > div:nth-child(2) {
      margin-top: ${calcRem(20)};
    }
  }
`;

const ServiceInfoType4 = ({
  title,
  children,
  imagePath,
  mobileImagePath,
  imageLabel,
  infoList
}) => {
  const { desktop, mobile } = useViewSize();
  return (
    <ServiceInfoType4Container>
      <A11yHidden as="h2">{title}</A11yHidden>
      <FullContainer>
        <ServiceInfoContainer>
          {desktop && (
            <ImageSideContainer>
              <div>
                <img src={imagePath} alt={imageLabel} />
              </div>
            </ImageSideContainer>
          )}
          <ContentSideContainer>
            <StyledContentContainer>
              <h3>{title}</h3>
              {mobile && (
                <ImageSideContainer>
                  <div>
                    <img src={mobileImagePath} alt="mobile paint correction" />
                  </div>
                </ImageSideContainer>
              )}
              <Paragraph type="normal" headingNum={4}>
                {children}
              </Paragraph>
              {infoList && <CardInfo infoList={infoList}></CardInfo>}
            </StyledContentContainer>
          </ContentSideContainer>
        </ServiceInfoContainer>
        <ExplainCardContainer>
          <ExplainCard
            title="CERAMIC PRO LEATHER"
            desc="Ceramic Pro Leather will preserve the factory look and feel as it slows down the aging process. The coating will prevent contaminants from staining the substrate."
            infoList={explainCardType1InfoList}
          />
          <ExplainCard
            title="CERAMIC PRO TEXTILE"
            desc="Ceramic Pro Textile is designed for the fabric materials inside your vehicle's interior. It’s designed to bond to textile and suede to protect it. Ceramic Pro Textile modifies the surface of real textile or suede so that when liquids come in contact, it forms beads that simply roll off keeping the textile completely dry."
            infoList={explainCardType2InfoList}
          />
        </ExplainCardContainer>
      </FullContainer>
    </ServiceInfoType4Container>
  );
};

ServiceInfoType4.propTypes = {
  title: string,
  subTitle: string,
  children: string,
  mobileImagePath: string,
  imagePath: string,
  imageLabel: string,
  infoList: array
};

ServiceInfoType4.defaultProps = {
  title: 'PAINT PROTECTION FILM & VINYL',
  subTitle: 'CERAMIC PRO PPF & VINYL',
  mobileImagePath: '',
  children:
    'Top Coat allows the surface to stay cleaner longer as dirt and grime will not stick to it. The super hydrophobic effect of the coating will cause water to bead up and roll off the surface along with any dirt and grime. Top Coat is usually applied over 9H in the layering process. Though not as durable as 9H, it can also be applied on its own. Top Coat also enhances gloss depth further on all painted surfaces for that wet look that is often hard to attain with synthetic waxes.',
  imagePath: './assets/dummyCar.png',
  imageLabel: 'Car Image',
  infoList: []
};

FullContainer.displayName = 'FullContainer';
ServiceInfoType4Container.displayName = 'ServiceInfoType4Container';

export default ServiceInfoType4;
