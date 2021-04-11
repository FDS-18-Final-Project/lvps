import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { AccordionList } from 'components/';
import { string } from 'prop-types';

const ServicesWrapper = styled.div`
  padding: ${theme.calcInterval([144, 0])};
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: rgba(45, 45, 45, 0.8);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${props => props.imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  h2 {
    font-size: ${theme.fontSizes.titleBase};
    color: ${theme.colors.white};
    width: 100%;
    padding-left: ${theme.calcRem(200)};
    margin-bottom: 60px;
  }

  img {
    width: 100%;
    vertical-align: bottom;
    margin-right: 45px;
  }
`;

const OurBestServices = ({ title, imagePath }) => {
  return (
    <ServicesWrapper imagePath={imagePath}>
      <h2>{title}</h2>
      <Layout.FlexContainer>
        <img src={imagePath} alt="service" />
      </Layout.FlexContainer>
      <Layout.FlexContainer>
        <AccordionList />
      </Layout.FlexContainer>
    </ServicesWrapper>
  );
};

OurBestServices.propTypes = {
  title: string,
  imagePath: string
};

OurBestServices.defaultProps = {
  title: 'Our Best Services',
  imagePath: 'assets/dummy_ourbestservice.png'
};

ServicesWrapper.displayName = 'ServicesWrapper';
export default OurBestServices;
