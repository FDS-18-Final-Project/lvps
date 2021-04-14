import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors } from 'theme/theme';
import { Paragraph, Button } from 'components/';
import Layout from 'pages/Layout/Layout';

const SubBannerContainer = styled.div`
  background: ${colors.white};
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  .gridParagraph {
    padding-top: ${calcRem(70)};
    margin-bottom: ${calcRem(10)};
  }

  .gridBtn {
    grid-row: 2 / 3;
    padding-bottom: ${calcRem(30)};
  }

  .gridImg {
    grid-area: 1 / 2 / 3 / 3;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px 0;
    grid-template: repeat(3, 0.3fr) / repeat(1, 1fr);
    .gridParagraph {
      padding: 0;
      text-align: center;
    }

    .gridImg {
      margin: ${calcInterval([15, 0])};
    }
    .gridBtn {
      grid-row: 3 / 4;
      padding: ${calcInterval([0, 50])};
      a {
        width: 100%;
      }
    }
    .gridImg {
      grid-area: 2 / 1 / 3 /1;
    }
  }
`;

const LayoutContainer = styled(Layout.FlexContainer)``;

const SubBanner = ({ title, linkText, imagePath, children }) => {
  return (
    <SubBannerContainer>
      <LayoutContainer className="gridParagraph">
        <Paragraph className="paragraph" title={title} size={24} headingNum={2}>
          {children}
        </Paragraph>
      </LayoutContainer>
      <LayoutContainer className="gridBtn">
        <Button
          mode="link"
          to="/get-a-quote"
          styledmode="secondary"
          height={55}
        >
          {linkText}
        </Button>
      </LayoutContainer>
      <LayoutContainer className="gridImg">
        <img src={imagePath} alt="dummyImage" />
      </LayoutContainer>
    </SubBannerContainer>
  );
};

SubBanner.propTypes = {
  title: string.isRequired,
  linkText: string.isRequired,
  imagePath: string.isRequired,
  children: node
};

SubBanner.defaultProps = {
  title: 'About us',
  linkText: 'More About us',
  imagePath: 'assets/dummyImage.png',
  children: 'Quality Protection Services'
};

SubBannerContainer.displayName = 'SubBannerWrapper';
LayoutContainer.displayName = 'SubBannerContentWrapper';

export default SubBanner;
