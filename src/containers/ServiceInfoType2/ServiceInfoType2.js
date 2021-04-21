import React from 'react';
import { array, string, oneOf, number } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes, device, calcInterval } from 'theme/theme';
import CardInfo from 'components/CardInfo/CardInfo';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import Paragraph from 'components/Paragraph/Paragraph';
import useViewSize from 'hooks/useViewSize';
import { bool } from 'prop-types';

const ServiceInfoType2Container = styled.section`
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
  margin-top: ${calcRem(75)};
  text-align: center;

  & h3 {
    font-size: ${fontSizes.titleBase};
    font-family: Monserrat;
    font-weight: 700;
    color: ${colors.black};
    line-height: 150%;
    text-align: start;
    margin-bottom: ${calcRem(25)};
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
  margin: ${({ mode }) =>
    mode === 'left'
      ? calcInterval([0, 0, 0, 60])
      : calcInterval([0, 60, 0, 0])};

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
    padding-bottom: 50px;
    padding-bottom: ${({ paddingBottom }) => calcRem(paddingBottom)};
    margin: ${calcRem(20)} auto 0;
  }
  ul li p {
    margin: 0;
  }
  ${device.desktop} {
    margin: ${({ mode }) =>
      mode === 'left'
        ? calcInterval([0, 50, 0, 60])
        : calcInterval([0, 60, 0, 50])};
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

const ServiceInfoType2 = ({
  mode,
  title,
  subTitle,
  children,
  imagePath,
  showSubTitle,
  mobileImagePath,
  imageLabel,
  infoList,
  iconcolor,
  paddingBottom
}) => {
  const { desktop, mobile } = useViewSize();
  return (
    <ServiceInfoType2Container>
      <A11yHidden as="h2">{title}</A11yHidden>
      <FullContainer>
        {mode === 'left' && desktop && (
          <ImageSideContainer>
            <div>
              <img src={imagePath} alt={imageLabel} />
            </div>
          </ImageSideContainer>
        )}
        <ContentSideContainer>
          <StyledContentContainer mode={mode} paddingBottom={paddingBottom}>
            <h3>{title}</h3>
            {mobile && (
              <ImageSideContainer>
                <div>
                  <img src={mobileImagePath} alt={imageLabel} />
                </div>
              </ImageSideContainer>
            )}
            <Paragraph
              type="normal"
              // TODO: warning 해결
              title={(desktop || (mobile && showSubTitle)) && subTitle}
              headingNum={4}
            >
              {children}
            </Paragraph>
            {infoList && <CardInfo infoList={infoList}></CardInfo>}
          </StyledContentContainer>
        </ContentSideContainer>
        {mode === 'right' && desktop && (
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
  showSubTitle: bool,
  mobileImagePath: string,
  imageLabel: string,
  infoList: array,
  paddingBottom: number
};

ServiceInfoType2.defaultProps = {
  mode: 'left',
  title: '',
  subTitle: '',
  children: '',
  imagePath: './assets/dummyCar.png',
  showSubTitle: false,
  mobileImagePath: '',
  imageLabel: 'Car Image',
  infoList: [],
  paddingBottom: 0
};

FullContainer.displayName = 'FullContainer';
ServiceInfoType2Container.displayName = 'ServiceInfoType2Container';

export default ServiceInfoType2;
