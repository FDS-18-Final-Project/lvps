import React from 'react';
import { oneOf, string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import { Button, Paragraph } from 'components/';
import Layout from 'pages/Layout/Layout';

const FullContainer = styled.section`
  border-top: 1px solid ${colors.lightGray};
`;

const ServiceInfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${calcInterval([80, 200, 75])};

  div:first-child {
    width: 100%;
  }

  h2 + p {
    margin-bottom: ${calcRem(30)};
  }
  .ServiceInfoContentBox {
    height: 100%;
    padding: ${({ mode }) =>
      mode === 'left' ? `0 0 0 ${calcRem(80)}` : `0 ${calcRem(80)} 0 0`};

    a {
      align-self: ${({ mode }) =>
        mode === 'left' ? 'flex-end' : 'flex-start'};
    }
  }

  h2 {
  }

  p {
    margin: 0;
    font-size: ${fontSizes.base};
    line-height: ${calcRem(36)};
  }
  img {
    width: 100%;
    max-height: ${calcRem(310)};
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
    <FullContainer>
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

            <Button mode="link" to="/get-a-quote">
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
    </FullContainer>
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
