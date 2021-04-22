import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, device, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const FullContainer = styled.section`
  ${device.mobile} {
    padding: ${calcInterval([0, 15])};
  }
`;

const SubBannerContainer = styled.div`
  background: ${colors.white};
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);

  .gridParagraph {
    padding-top: ${calcRem(70)};
    margin-bottom: ${calcRem(10)};
    p {
      color: ${colors.gray};
    }
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

  ${device.tablet} {
    padding: ${calcInterval([50, 0])};

    grid-template: repeat(3, 0.3fr) / repeat(1, 1fr);
    .gridParagraph {
      padding: 0;
      text-align: center;

      h2 {
        font-size: ${fontSizes.xl};
        line-height: ${calcRem(26)};
      }

      p {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(21)};
      }
    }

    .gridBtn {
      grid-row: 3 / 4;

      a {
        width: 100%;
        font-size: ${fontSizes.lg};
        line-height: ${calcRem(27)};
      }

      & button {
        width: 100%;
      }
    }
    .gridImg {
      grid-area: 2 / 1 / 3 /1;
      margin: ${calcInterval([15, 0])};
    }
  }
`;

const LayoutContainer = styled(Layout.FlexContainer)``;

const SubBanner = ({ title, description, imagePath, children }) => {
  return (
    <FullContainer>
      <SubBannerContainer>
        <LayoutContainer className="gridParagraph">
          <Paragraph
            className="paragraph"
            title={title}
            size={24}
            headingNum={2}
          >
            {description}
          </Paragraph>
        </LayoutContainer>
        <LayoutContainer className="gridBtn">
          <a href="https://www.instagram.com/lvps.ca/?hl=en">
            <Button styledmode="secondary" height={55}>
              {children}
            </Button>
          </a>
        </LayoutContainer>
        <LayoutContainer className="gridImg">
          <img src={imagePath} alt={title} />
        </LayoutContainer>
      </SubBannerContainer>
    </FullContainer>
  );
};

SubBanner.propTypes = {
  title: string.isRequired,
  imagePath: string.isRequired,
  description: string,
  children: node
};

SubBanner.defaultProps = {
  title: 'About us',
  description: 'More About us',
  imagePath: 'assets/dummyImage.png',
  children: 'More About us'
};

SubBannerContainer.displayName = 'SubBannerWrapper';
LayoutContainer.displayName = 'SubBannerContentWrapper';

export default SubBanner;
