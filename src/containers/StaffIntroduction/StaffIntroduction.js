import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, calcInterval, fontSizes, device } from 'theme/theme';

const FullContainer = styled.section`
  position: relative;
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
    background-image: url('assets/staff.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  ${device.desktop} {
    padding: ${calcInterval([0, 50])};
  }
  ${device.mobile} {
    padding: ${calcInterval([0, 15])};
  }
`;
const StaffIntroductionContainer = styled.div`
  max-width: ${calcRem(1200)};
  padding: ${calcInterval([75, 0, 90])};
  margin: 0 auto;
  display: grid;
  grid-template: repeat(1, 0.2fr 0.5fr 1fr) / repeat(1, 1fr 2fr 0.3fr);

  .gridTitle {
    font-size: ${fontSizes.titleBase};
    line-height: ${calcRem(67)};
    color: ${colors.white};
    grid-area: 1 / 1 / 2 / 2;
    margin-bottom: ${calcRem(75)};
    white-space: nowrap;
  }

  .gridBtn {
    grid-area: 1 / 3 / 2 / 4;
    min-width: ${calcRem(222)};
    a {
      width: 100%;
      padding: 0;
    }
  }

  .gridImage {
    color: ${colors.white};
    font-size: ${fontSizes.xl};
    font-weight: bold;
    line-height: 1.5;
    grid-area: 2 / 1 / 3 / 2;
    margin-right: ${calcRem(35)};

    img {
      width: 100%;
      height: 100%;
    }

    span {
      display: block;
      color: ${colors.lightGray};

      font-size: ${fontSizes.lg};
      line-height: 1.5;
    }
  }
  .gridDescription {
    background-color: ${colors.black};

    grid-area: 2 / 2 / 3 / 4;
    display: flex;
    flex-direction: column;
    padding: ${calcInterval([49, 43])};

    h3 {
      font-size: ${fontSizes.xl};
      font-weight: bold;
      line-height: ${calcRem(36)};
      color: ${colors.white};
      margin-bottom: ${calcRem(5)};
    }
    pre,
    span {
      color: ${colors.gray};
      line-height: ${calcRem(27)};
      white-space: pre-wrap;
    }
  }

  .gridSubDescription {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.xl};
    line-height: ${calcRem(36)};
    background-color: ${colors.white};
    padding: ${calcInterval([83, 104])};
    grid-area: 3 / 1 / 4 / 4;
    font-weight: bold;
    text-align: center;
    margin-top: ${calcRem(30)};

    .openQuote {
      margin-right: ${calcRem(60)};
    }

    .closeQuote {
      margin-left: ${calcRem(60)};
    }
  }

  ${device.tablet} {
    grid-template: repeat(1, 0.2fr 0.5fr 0.5fr 0.5fr) / repeat(1, 1fr);
    padding: ${calcInterval([75, 0, 0])};

    .gridTitle {
      grid-area: 1 / 1 / 2 / 2;
      font-size: ${fontSizes.xl};
      line-height: ${calcRem(36)};
      text-align: center;
    }

    .gridImage {
      position: absolute;
      top: 135px;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    .gridBtn {
      grid-area: 4 / 1 / 5 / 2;
      margin-top: ${calcRem(80)};
      min-height: ${calcRem(130)};
      margin-left: ${calcRem(-50)};
      a {
        border-top: 1px solid ${colors.lightGray};
        font-size: ${fontSizes.xl};
        line-height: ${calcRem(36)};
        width: 116%;
        height: 100%;
      }
    }

    .gridDescription {
      grid-area: 2 / 1 / 3 / 2;
      padding: ${calcInterval([60, 15, 25])};

      h3,
      span {
        text-align: center;
        font-size: ${calcRem(14)};
        line-height: ${calcRem(21)};
      }

      pre {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(21)};
      }
    }

    .gridSubDescription {
      grid-area: 3 / 1 / 4 / 2;
      padding: ${calcInterval([21, 12])};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(21)};
      margin: 0;
      .openQuote,
      .closeQuote {
        width: 20px;
        margin: 0;
      }
    }
  }
`;

const StaffIntroduction = () => {
  return (
    <FullContainer>
      <StaffIntroductionContainer>
        <h2 class="gridTitle">Staff Introduction</h2>
        <div className="gridBtn">
          <a href="https://www.instagram.com/lvps.ca/?hl=en">
            <Button styledmode="primary" height={40}>
              Visit Our Instagram
              <Icon
                title="instagram"
                type="instagram"
                color={colors.white}
                width={calcRem(25)}
              />
            </Button>
          </a>
        </div>
        <div className="gridImage">
          <img src="assets/staff.png" alt="owner profile" />
        </div>
        <p className="gridDescription">
          <h3>Maxim Malyshau</h3>
          <span>General Manager at LVPS</span>
          <pre>
            {` 
- 10+ Years of Experience in Automotive industry 
- Certified Ceramic Pro Installer 
- Professional at detailing, polishing, and paint correcting.`}
          </pre>
        </p>
        <blockquote className="gridSubDescription">
          <Icon
            title="open"
            className="openQuote"
            type="openQuote"
            width={47}
            height={47}
          />
          Our goal is to provide our customers with the highest quality service,
          convenient automotive experience possible.
          <Icon
            title="close"
            className="closeQuote"
            type="closeQuote"
            width={47}
            height={47}
          />
        </blockquote>
      </StaffIntroductionContainer>
    </FullContainer>
  );
};

FullContainer.displayName = 'FullContainer';
StaffIntroductionContainer.displayName = 'StaffIntroductionContainer';
export default StaffIntroduction;
