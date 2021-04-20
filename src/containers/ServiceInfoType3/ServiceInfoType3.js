import React from 'react';
import { array, string } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes, device } from 'theme/theme';
import CardInfo from 'components/CardInfo/CardInfo';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import useViewSize from 'hooks/useViewSize';

const ServiceInfoType3Container = styled.section`
  border-top: 2px solid ${colors.lightGray};
`;
const FullContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  ${device.tablet} {
    flex-direction: column;
    padding: 0 ${calcRem(15)};
  }
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
    margin-top: ${calcRem(110)};
    margin-bottom: ${calcRem(20)};
    font-weight: 700;
    color: ${colors.black};
    text-align: start;
    line-height: 150%;
  }
  ${device.desktop} {
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
  margin-left: ${calcRem(110)};

  h4 {
    text-align: start;
    font-size: ${fontSizes.xl};
    margin: ${calcRem(33)} 0 ${calcRem(15)};
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
  .firstPara {
    margin-bottom: ${calcRem(30)};
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

const ServiceInfoType3 = ({
  title,
  subTitle,
  para1,
  para2,
  imagePath,
  imageLabel,
  infoList
}) => {
  const { desktop, mobile } = useViewSize();
  return (
    <ServiceInfoType3Container>
      <A11yHidden as="h2">PAINT CORRECTION AND POLISHING</A11yHidden>
      <FullContainer>
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
                  <img
                    src="./assets/mobile-paint-correction.png"
                    alt="mobile paint correction"
                  />
                </div>
              </ImageSideContainer>
            )}
            <p className="firstPara">{para1}</p>
            <p>{para2}</p>
            <h4>{subTitle}</h4>
            {infoList && <CardInfo infoList={infoList}></CardInfo>}
          </StyledContentContainer>
        </ContentSideContainer>
      </FullContainer>
    </ServiceInfoType3Container>
  );
};

ServiceInfoType3.propTypes = {
  title: string,
  subTitle: string,
  para1: string,
  para2: string,
  imagePath: string,
  imageLabel: string,
  infoList: array
};

ServiceInfoType3.defaultProps = {
  title: 'PAINT PROTECTION FILM & VINYL',
  subTitle: 'CERAMIC PRO PPF & VINYL',
  para1: '',
  para2: '',
  imagePath: './assets/dummyCar.png',
  imageLabel: 'Car Image',
  infoList: []
};

FullContainer.displayName = 'FullContainer';
ServiceInfoType3Container.displayName = 'ServiceInfoType3Container';

export default ServiceInfoType3;
