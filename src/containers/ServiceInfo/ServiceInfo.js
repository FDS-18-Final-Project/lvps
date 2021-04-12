import { LinkIcon, Paragraph } from 'components/';
import Layout from 'pages/Layout/Layout';
import { oneOf } from 'prop-types';
import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';

const ServiceInfoWrapper = styled.div`
  padding: ${calcInterval([0, 200, 135])};

  .ServiceInfoContentBox {
    height: ${calcRem(490)};
    margin-top: ${calcRem(32)};
    padding: ${props =>
      props.mode === 'left'
        ? `0 0 0 ${calcRem(144)}`
        : `0 ${calcRem(144)} 0 0`};

    div {
      align-self: ${props =>
        props.mode === 'left' ? 'flex-end' : 'flex-start'};
    }
  }

  h2 {
    padding-top: ${calcRem(135)};
    border-top: 1px solid ${colors.lightGray};
  }

  p {
    margin: 0;
    font-size: ${fontSizes.base};
    line-height: ${calcRem(36)};
  }
  img {
    width: 100%;
    margin-top: ${calcRem(32)};
    height: ${calcRem(490)};
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
        colors={{ main: colors.black, sub: colors.redMain }}
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
