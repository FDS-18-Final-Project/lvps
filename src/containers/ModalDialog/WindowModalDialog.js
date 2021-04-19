import React from 'react';

import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { Button, A11yHidden, Icon, HelmetPriceTable } from 'components';
import Portal from 'utils/portal';

const FromText = ({ title }) => {
  return (
    <>
      <span>{title}</span>
      <p style={{ textAlign: 'center', marginTop: calcRem(5) }}>From</p>
    </>
  );
};

const windowData = {
  label: 'Window Tinting Product Options',
  title: 'Window Tinting Film Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        color: 'red_05',
        title: <FromText title="PRIME CS ™" />,
        heading: 'CARBON FILM',
        price: '250',
        info: [
          'Non-Metal / Fading, Color Stable, Dyed',
          '5 Year Warranty',
          'Great solar performance with advanced UV protection',
          'No metal layers to cause interference with cell phone/radio'
        ]
      },
      {
        color: 'red_05',
        title: <FromText title="PRIME CS ™Hybrid Film" />,
        heading: 'CARBON FILM',
        price: '250',
        info: [
          'Non-Metal / Fading, Color Stable, Dyed',
          '5 Year Warranty',
          'Great solar performance with advanced UV protection',
          'No metal layers to cause interference with cell phone/radio'
        ]
      },
      {
        color: 'black',
        heading: 'CARBON FILM',
        title: <FromText title="PRIME XR" />,
        price: '400',
        info: [
          'Non-Metal, Maximum Heat Rejection',
          'Lifetime Warranty',
          'Proprietary non-metallized, nonconductive nano-ceramic technology maximizes heat and ultraviolet rejection, keeping you and your vehicle cool and helping to protect from the damaging effects of the sun.'
        ]
      },
      {
        color: 'black',
        heading: 'CARBON FILM',
        title: <FromText title="PRIME XR PLUS™" />,
        price: '600',
        info: [
          'Non-Metal, Maximum Heat Rejection',
          'Lifetime Warranty',
          'Proprietary non-metallized, nonconductive nano-ceramic technology maximizes heat and ultraviolet rejection, keeping you and your vehicle cool and helping to protect from the damaging effects of the sun.'
        ]
      }
    ]
  }
};

const StyledModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;

  & > div {
    margin-top: ${calcRem(170)};
    width: ${calcRem(1350)};
    height: 100vh;
    margin: 170px auto 0;
    background: ${colors.gray2};
    overflow: auto;
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    align-items: center;
  }
  /* 스크롤바 스타일  */
  & > div::-webkit-scrollbar {
    width: 10px;
  }
  & > div::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  & > div::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
  .firstPackage > div {
    justify-content: initial;
  }
`;

const StyledModalBodyContainer = styled.div`
  width: 100%;
  padding-top: ${calcRem(180)};

  h4 {
    font-size: ${calcRem(45)};
    text-align: center;
    font-weight: 700;
    font-family: Montserrat;
    margin-top: ${calcRem(60)};
    margin-bottom: ${calcRem(100)};
  }

  & > button {
    position: absolute;
    top: ${calcRem(60)};
    right: ${calcRem(60)};
    margin: 0;
    width: auto;
    background: transparent;
    color: ${colors.black};
    border: 0;
    font-size: ${calcRem(36)};

    &:hover {
      background: transparent;
      border: 0;
    }
    & div {
      margin: 0;
    }
    path {
      fill: black;
    }
  }
`;
const StyledPackageContainer = styled.div`
  border-bottom: ${calcRem(2.4)} solid ${colors.lightGray};

  &:nth-last-child(3) {
    border-bottom: 0;
  }

  &:nth-child(2) em {
    text-align: center;
    margin: 1.5rem 0rem 4rem;
  }
  &:nth-child(1) strong {
  }
`;
const StyledPackageListContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ numOfProd }) =>
    numOfProd === 8 ? `repeat(4, 1fr)` : `repeat(${numOfProd}, 1fr)`};
  gap: ${calcRem(20)};
  padding: 0 ${({ numOfProd }) => (numOfProd <= 3 ? calcRem(160) : 0)} 3.75rem;

  & div {
    margin: ${({ numOfProd }) => numOfProd === 1 && '0 auto'};
  }
  & em {
    margin: 2.5rem 0rem 3rem;
  }
  & strong {
    margin-top: 1.5rem !important;
  }
  & ul li p {
    line-height: 130%;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  padding: 200px 0;
  position: relative;
  button {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-weight: 700;
    font-size: ${calcRem(18)};
  }
`;
const WindowModalDialog = () => {
  const { label, title, firstPackage } = windowData;

  return (
    // <Portal id="modal-root">
    <StyledModalContainer>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        aria-describedby={label}
        tabIndex="0"
      >
        <header id={label}>
          <A11yHidden as="h3">{title}</A11yHidden>
        </header>
        <StyledModalBodyContainer>
          {/* 카드 컨텐츠  */}
          <StyledPackageContainer>
            <h4>{firstPackage.title}</h4>
            <StyledPackageListContainer
              className="firstPackage"
              numOfProd={firstPackage.contents?.length}
            >
              {firstPackage.contents?.map((content, idx) => (
                <HelmetPriceTable key={idx} {...content} />
              ))}
            </StyledPackageListContainer>
          </StyledPackageContainer>
          <StyledButtonContainer>
            <Button mode="button">Confirm</Button>
          </StyledButtonContainer>
          <Button mode="button" aria-label="Modal 닫기">
            <Icon type="close" />
          </Button>
        </StyledModalBodyContainer>
      </div>
    </StyledModalContainer>
    // </Portal>
  );
};

A11yHidden.displayName = 'Modal Title';
StyledModalContainer.displayName = 'Modal Container';
StyledModalBodyContainer.displayName = 'Modal Body Container';
StyledPackageContainer.displayName = 'Modal Product List Container';
StyledButtonContainer.displayName = 'Button Container';

export default React.memo(WindowModalDialog);
