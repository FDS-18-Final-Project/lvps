import React from 'react';
import { oneOf, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { calcInterval, calcRem, colors, device, fontSizes } from 'theme/theme';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

const FullContainer = styled.section`
  border-top: 1px solid ${colors.lightGray};
`;

const ServiceInfoContainer = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${calcInterval([75, 100, 75])};

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
    width: ${calcRem(294)};
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
  ${device.desktop} {
    padding: ${calcInterval([40, 50, 40])};
  }
  ${device.tablet} {
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
      max-width: 100%;
      width: 100%;
      justify-self: center;
      margin-top: ${calcRem(33)};
    }
  }

  ${device.mobile} {
    padding: ${calcInterval([70, 15, 55])};
  }
`;

const ServiceInfo = ({
  title,
  subTitle,
  imagePath,
  linkText,
  imageLabel,
  mode,
  to,
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
          <img src={imagePath} alt={imageLabel} />
        </div>

        <div className="gridParagraph">{children}</div>
        <div className="gridBtn">
          <Button mode="link" to={to} fullwidth>
            {linkText}
            <Icon title="right arrow" type="rightArrow" color={colors.white} />
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
  imageLabel: string,
  linkText: string.isRequired,
  to: string.isRequired,
  mode: oneOf(['left', 'right'])
};

ServiceInfo.defaultProps = {
  title: 'Ceramic Pro',
  subTitle: 'Meet Our Skilled Crew.',
  imagePath: 'assets/dummyCar.png',
  imageLabel: '',
  to: '/main-service',
  linkText: 'See more about this service',
  mode: 'right'
};

FullContainer.displayName = 'FullContainer';
ServiceInfoContainer.displayName = 'ServiceInfoWrapper';
export default ServiceInfo;
