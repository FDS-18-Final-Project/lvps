import { Button, Icon } from 'components/';
import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, calcInterval, fontSizes } from 'theme/theme';

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
`;
const StaffIntroductionContainer = styled.div`
  max-width: ${calcRem(1200)};
  padding: ${calcInterval([75, 0, 90])};
  margin: 0 auto;
  display: grid;
  grid-template: repeat(1, 0.5fr, 1fr, 1fr) / repeat(1, 0.5fr, 2fr, 0.5fr);

  .gridTitle {
    font-size: ${fontSizes.titleBase};
    line-height: ${calcRem(67)};
    color: ${colors.white};
    grid-area: 1 / 1 / 2 / 2;
    margin-bottom: ${calcRem(75)};
  }

  .gridBtn {
    grid-area: 1 / 3 / 2 / 4;
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
    background-color: ${colors.white};
    font-size: ${fontSizes.xl};
    line-height: 1.5;
    padding: ${calcInterval([30, 91])};
    grid-area: 2 / 2 / 3 / 4;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bold;

    &::before,
    &::after {
      content: '"';
      width: 50px;
      height: 50px;
      display: block;
      line-height: 1;
      font-size: ${calcRem(100)};
      color: ${colors.lightGray};
      margin: 0 20px;
    }
  }

  .gridSubDescription {
    background-color: ${colors.black};
    color: ${colors.lightGray};
    font-size: ${fontSizes.lg};
    line-height: 1.5;
    margin-top: ${calcRem(15)};

    padding: ${calcInterval([24, 104, 36])};
    grid-area: 3 / 2 / 4 / 4;
  }
`;

const StaffIntroduction = () => {
  return (
    <FullContainer>
      <StaffIntroductionContainer>
        <h2 class="gridTitle">Staff Introduction</h2>
        <div className="gridBtn">
          <Button mode="link" to="/" styledmode="primary" height={40}>
            Visit Instagram
            <Icon type="instagram" color={colors.white} width={calcRem(25)} />
          </Button>
        </div>
        <figure className="gridImage">
          <img src="assets/staff.png" alt="staff" />
          <figcaption>
            Maxim Malyshau
            <span>General Manager</span>
          </figcaption>
        </figure>
        <blockquote className="gridDescription">
          Our goal is to provide our customers with the highest quality service,
          convenient automotive experience possible.
        </blockquote>
        <p className="gridSubDescription">
          Maxim has been in the automotive industry since high school because of
          his co-op at a car dealership. After his co-op he got a job as a lot
          attendant to help with moving, parking, organizing, cleaning cars.
          Thats when his passion for cars started. He has many years of
          experience in detailing, polishing cars. He is also certified by
          Ceramic Pro for ceramic coating applications. Maxim will make sure
          that every customer is happy with the services they get from LVCS.
        </p>
      </StaffIntroductionContainer>
    </FullContainer>
  );
};

export default StaffIntroduction;
