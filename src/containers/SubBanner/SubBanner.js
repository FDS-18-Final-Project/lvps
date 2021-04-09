import { Paragraph } from 'components/';
import HeaderLayout from 'pages/Layout/HeaderLayout/HeaderLayout';
import React from 'react';
import LinkIcon from '../../components/LinkIcon/LinkIcon';
import styled from 'styled-components';
import { node, string } from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  img {
    width: 100%;
  }
  p {
    margin-bottom: 75px;
  }
`;

const LayoutWrapper = styled(HeaderLayout.FlexContainer)`
  #paragraph {
    width: 465px;
  }
`;

function SubBanner({ title, linkText, imagePath, children }) {
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
}

SubBanner.defaultProps = {
  title: 'About us',
  linkText: 'More About us',
  imagePath: 'assets/dummyImage.png',
  children: 'Quality Protection Services',
};

SubBanner.propTypes = {
  title: string.isRequired,
  linkText: string.isRequired,
  imagePath: string.isRequired,
  children: node,
};

Wrapper.displayName = 'SubBannerWrapper';
LayoutWrapper.displayName = 'SubBannerContentWrapper';

export default SubBanner;
