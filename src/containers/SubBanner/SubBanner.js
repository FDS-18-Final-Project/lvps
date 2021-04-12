import React from 'react';
import styled from 'styled-components';
import { node, string } from 'prop-types';
import { Paragraph, LinkIcon } from 'components/';
import Layout from 'pages/Layout/Layout';
import { calcRem } from 'theme/theme';

const Wrapper = styled.div`
  display: flex;

  img {
    width: 100%;
  }

  p {
    margin-bottom: ${calcRem(75)};
  }
`;

const LayoutWrapper = styled(Layout.FlexContainer)`
  #paragraph {
    max-width: ${calcRem(465)};
  }
`;

const SubBanner = ({ title, linkText, imagePath, children }) => {
  return (
    <Wrapper>
      <LayoutWrapper direction="column" flex={1}>
        <Paragraph id="paragraph" title={title} size={24} headingNum={2}>
          {children}
        </Paragraph>
        <LinkIcon mode="secondary">{linkText}</LinkIcon>
      </LayoutWrapper>
      <LayoutWrapper flex={1}>
        <img src={imagePath} alt="dummyImage" />
      </LayoutWrapper>
    </Wrapper>
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

Wrapper.displayName = 'SubBannerWrapper';
LayoutWrapper.displayName = 'SubBannerContentWrapper';

export default SubBanner;
