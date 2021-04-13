import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import { Paragraph, Button } from 'components/';
import Layout from 'pages/Layout/Layout';

const SubBannerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  img {
    width: 100%;
  }

  p {
    margin-bottom: ${calcRem(75)};
  }
`;

const LayoutContainer = styled(Layout.FlexContainer)`
  #paragraph {
    max-width: ${calcRem(465)};
  }
`;

const SubBanner = ({ title, linkText, imagePath, children }) => {
  return (
    <SubBannerContainer>
      <LayoutContainer direction="column" flex={1}>
        <Paragraph id="paragraph" title={title} size={24} headingNum={2}>
          {children}
        </Paragraph>
        <Button mode="link" to='/get-a-quote'>{linkText}</Button>
      </LayoutContainer>
      <LayoutContainer flex={1}>
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
