import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';

const FullContainer = styled.section`
  border-bottom: 1px solid ${colors.lightGray};
  border-top: 1px solid ${colors.lightGray};
`;

const ServiceMainBannerContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(2, 1fr);

  .gridTitle {
    font-size: ${fontSizes.titleBase};
    line-height: ${calcRem(67)};
    grid-area: 1 / 1 / 2 / 2;
    padding-top: ${calcRem(110)};
  }

  .gridParagraph {
    font-size: ${fontSizes.lg};
    line-height: ${calcRem(27)};
    grid-area: 1 / 1 / 2 / 2;
    padding-top: ${calcRem(200)};
    margin-right: ${calcRem(157)};
  }

  .gridImage {
    max-height: ${calcRem(683)};

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ServiceMainBanner = ({ title, children, imagePath }) => {
  return (
    <FullContainer>
      <ServiceMainBannerContainer>
        <h2 className="gridTitle">{title}</h2>
        <p className="gridParagraph">{children}</p>
        <div className="gridImage">
          <img src={imagePath} alt="CeramicPro" />
        </div>
      </ServiceMainBannerContainer>
    </FullContainer>
  );
};

ServiceMainBanner.propTypes = {
  title: string,
  imagePath: string
};

ServiceMainBanner.defaultProps = {
  title: 'What Is Ceramic Pro?',
  imagePath: 'assets/dummy_ceramicpro.png'
};

FullContainer.displayName = 'FullContainer';
ServiceMainBannerContainer.displayName = 'ServiceMainBannerContainer';
export default ServiceMainBanner;
