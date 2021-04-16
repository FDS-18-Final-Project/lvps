import React from 'react';
import { oneOf, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import { Button, Icon, Paragraph } from 'components/';

const FullContainer = styled.section`
  border-top: 1px solid ${colors.lightGray};
`;

const ServiceInfoContainer = styled.div`
  display: grid;
  grid-template: repeat(1, 0.2fr 0.3fr 0.25fr) / repeat(2, 1fr);
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${calcInterval([80, 200, 75])};

  .gridTitle {
    grid-area: 1 / 1 / 2 / 3;
    margin-bottom: ${calcRem(40)};
  }
  .gridImage {
    width: 100%;
    height: 100%;
    grid-area: 2 / 2 / 4 / 3;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .gridParagraph {
    font-size: ${fontSizes.lg};
    line-height: ${calcRem(27)};
    padding-right: ${calcRem(80)};
  }

  .gridBtn {
    max-width: ${calcRem(294)};
    margin-top: ${calcRem(70)};

    align-self: flex-end;
  }

  ${({ mode }) =>
    mode === 'right' &&
    css`
      .gridImage {
        grid-area: 2 / 1 / 4 / 2;
      }

      .gridParagraph {
        padding-right: 0;
        padding-left: ${calcRem(80)};
      }
      .gridBtn {
        justify-self: flex-end;
      }
    `}

  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([38, 27, 58])};
    grid-template: repeat(1, 0.2fr 0.2fr 0.25fr 0.2fr) / repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    .gridTitle {
      grid-area: 1 / 1 / 2 / 1;
      text-align: center;
      margin-bottom: 0;
      h2 {
        font-size: ${fontSizes.xxxl};
        font-weight: bold;
      }

      p {
        font-size: ${calcRem(10)};
        margin-bottom: ${calcRem(18)};
      }
    }
    .gridImage {
      grid-area: 2 / 1/ 3 / 1;
    }
    .gridParagraph {
      padding: 0;
      font-size: ${fontSizes.small};
      line-height: ${calcRem(21)};
      margin-top: ${calcRem(33)};
    }
    .gridBtn {
      width: 83%;
      justify-self: center;
      margin-top: ${calcRem(33)};
    }
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
          className="gridTitle"
          title={title}
          size={24}
          headingNum={2}
          colors={{ main: colors.black, sub: colors.redMain }}
        >
          {subTitle}
        </Paragraph>

        <div className="gridImage">
          <img src={imagePath} alt="dummyimage" />
        </div>

        <div className="gridParagraph" as="p">
          {children}
        </div>
        <div className="gridBtn">
          <Button mode="link" to="/get-a-quote" fullwidth>
            {linkText}
            <Icon type="rightArrow" color={colors.white} />
          </Button>
        </div>
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
  linkText: 'See more about this service',
  mode: 'right'
};

FullContainer.displayName = 'FullContainer';
ServiceInfoContainer.displayName = 'ServiceInfoWrapper';
export default ServiceInfo;
