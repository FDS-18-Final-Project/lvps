import { LinkIcon, Paragraph } from 'components/';
import Layout from 'pages/Layout/Layout';
import { oneOf } from 'prop-types';
import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';

const ServiceInfoWrapper = styled.div`
  padding: ${theme.calcInterval([0, 200, 135])};

  .ServiceInfoContentBox {
    height: 490px;
    margin-top: 32px;
    padding: ${props =>
      props.mode === 'left'
        ? `0 0 0 ${theme.calcRem(144)}`
        : `0 ${theme.calcRem(144)} 0 0`};

    div {
      align-self: ${props =>
        props.mode === 'left' ? 'flex-end' : 'flex-start'};
    }
  }

  h2 {
    padding-top: ${theme.calcRem(135)};
    border-top: 1px solid ${theme.colors.lightGray};
  }

  p {
    margin: 0;
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.calcRem(36)};
  }
  img {
    width: 100%;
    margin-top: 32px;
    height: 490px;
  }
`;

const ServiceInfo = ({
  title,
  subTitle,
  imagePath,
  linkText,
  mode,
  children
}) => {
  return (
    <ServiceInfoWrapper mode={mode}>
      <Paragraph
        title={title}
        size={24}
        headingNum={2}
        colors={{ main: theme.colors.black, sub: theme.colors.redMain }}
      >
        {subTitle}
      </Paragraph>
      <Layout.FlexContainer>
        {mode === 'left' && (
          <Layout.FlexContainer flex="1">
            <img src={imagePath} alt="dummyimage" />
          </Layout.FlexContainer>
        )}
        <Layout.FlexContainer
          className="ServiceInfoContentBox"
          direction="column"
          justify="space-between"
          flex="1"
        >
          <p>{children}</p>
          <LinkIcon mode="primary">{linkText}</LinkIcon>
        </Layout.FlexContainer>
        {mode === 'right' && (
          <Layout.FlexContainer flex={1}>
            <img src={imagePath} alt="dummyimage" />
          </Layout.FlexContainer>
        )}
      </Layout.FlexContainer>
    </ServiceInfoWrapper>
  );
};

ServiceInfo.propTypes = {
  title: string.isRequired,
  subTitle: string.isRequired,
  imagePath: string.isRequired,
  linkText: string.isRequired,
  mode: oneOf(['left', 'right'])
};

ServiceInfo.defaultProps = {
  title: 'Ceramic Pro',
  subTitle: 'Meet Our Skilled Crew.',
  imagePath: 'assets/dummyCar.png',
  linkText: 'Read More',
  mode: 'right'
};

ServiceInfoWrapper.displayName = 'ServiceInfoWrapper';
export default ServiceInfo;
