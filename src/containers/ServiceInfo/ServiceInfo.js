import React from 'react';
import { oneOf, string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import { Button, Paragraph } from 'components/';
import Layout from 'pages/Layout/Layout';

const ServiceInfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${calcInterval([0, 200, 135])};

  .ServiceInfoContentBox {
    height: ${calcRem(490)};
    margin-top: ${calcRem(32)};
    padding: ${({ mode }) =>
      mode === 'left' ? `0 0 0 ${calcRem(144)}` : `0 ${calcRem(144)} 0 0`};

    div {
      align-self: ${({ mode }) =>
        mode === 'left' ? 'flex-end' : 'flex-start'};
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
    <ServiceInfoContainer mode={mode}>
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
          justifyContent="space-between"
          flex="1"
        >
          <p>{children}</p>
          <Button mode="link" to="/">
            {linkText}
          </Button>
        </Layout.FlexContainer>
        {mode === 'right' && (
          <Layout.FlexContainer flex={1}>
            <img src={imagePath} alt="dummyimage" />
          </Layout.FlexContainer>
        )}
      </Layout.FlexContainer>
    </ServiceInfoContainer>
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

ServiceInfoContainer.displayName = 'ServiceInfoWrapper';
export default ServiceInfo;
