import React from 'react';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';

import styled from 'styled-components';
import { colors, calcRem, device, fontSizes, calcInterval } from 'theme/theme';
import { useModalSelected, useViewSize } from 'hooks/';
import {
  windowMultiToggleActive,
  windowSingleToggleActive
} from 'store/modal/window';
import { motion } from 'framer-motion';
import HelmetPriceTable from 'components/PriceTable/HelmetPriceTable';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Carousel from 'components/Carousel/Carousel';

const StyledModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  backdrop-filter: blur(4px);

  & > div {
    width: ${calcRem(1350)};
    height: 90vh;
    margin: ${calcRem(50)} auto 0;
    background: ${colors.gray_02};
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
  @media only screen and (max-width: 1350px) {
    & > div {
      width: 100%;
    }
  }
`;

const StyledModalBodyContainer = styled.div`
  width: 100%;
  padding-top: ${calcRem(30)};

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
  ${device.tablet} {
    & > button {
      top: ${calcRem(40)};
      right: ${calcRem(40)};
    }
    h4 {
      padding: 0 ${calcRem(20)};
      font-size: ${fontSizes.xl};
    }
  }
`;
const StyledPackageContainer = styled.div`
  border-bottom: ${calcRem(2.4)} solid ${colors.lightGray};

  &:nth-last-child(4) {
    border-bottom: 0;
  }

  &:nth-child(2) em {
    text-align: center;
    margin: 1.5rem 0rem 4rem;
  }
`;
const StyledPackageListContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ numOfProd }) =>
    numOfProd === 8 ? `repeat(4, 1fr)` : `repeat(${numOfProd}, 1fr)`};
  gap: ${calcRem(20)};
  padding: 0 ${({ numOfProd }) => (numOfProd <= 3 ? calcRem(160) : 0)} 3.75rem;

  & div {
    cursor: pointer;
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
  ${device.desktop} {
    grid-template-columns: ${({ numOfProd }) =>
      numOfProd === 8 ? `repeat(2, 1fr)` : `repeat(${numOfProd / 2}, 1fr)`};
    justify-items: center;
    padding: ${calcInterval([0, 50])};

    & > div {
      max-width: ${calcRem(320)};
    }
    & em {
      margin: 2.5rem 0rem 4rem;
    }
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
  ${device.tablet} {
    button {
      min-width: ${calcRem(320)};
    }
  }
`;
const StyledTotalPriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${calcRem(60)};
  margin-right: ${calcRem(100)};

  p {
    font-size: ${calcRem(30)};
    line-height: 150%;
    position: relative;
    top: 15px;
    margin-right: ${calcRem(20)};
  }

  span {
    color: ${colors.red_05};
    font-weight: 700;
    font-size: ${fontSizes.titleBase};
    min-width: ${calcRem(220)};
    text-align: center;
    line-height: 150%;
    border-bottom: ${calcRem(2)} solid ${colors.black};
  }

  ${device.tablet} {
    margin-right: ${calcRem(50)};
    p {
      top: 5px;
      font-size: ${calcRem(20)};
    }
    span {
      min-width: ${calcRem(150)};
      font-size: ${fontSizes.xl};
    }
  }
`;

const StyledCarouselContainer = styled.div`
  overflow-x: hidden;

  & > div:nth-child(1),
  & > div:nth-child(2) {
    text-align: center;
    margin-top: ${calcRem(50)};
  }

  .firstCarousel ul li > div {
    max-width: 320px;
    em {
      margin: 2.5rem 0rem 4rem;
    }
    strong {
      margin-top: 2rem;
    }
    p {
      text-align: start;
    }
  }
  h4 {
    margin-bottom: ${calcRem(0)};
  }
`;
const WindowModalDialog = ({ onChange, confirmCheck, ...restProps }) => {
  const {
    modalData,
    onlyOneSelected,
    addServices,
    checkActive,
    totalPrice
  } = useModalSelected(
    'windowModal',
    windowSingleToggleActive,
    windowMultiToggleActive,
    onChange,
    confirmCheck
  );
  const { label, title, firstPackage } = modalData;
  const { desktop } = useViewSize();

  const firstPackageContents = firstPackage.contents?.map(content => (
    <HelmetPriceTable
      key={content.id}
      id={content.id}
      data-name="firstPackage"
      active={content.active}
      onClick={onlyOneSelected}
      {...content}
    />
  ));
  return (
    // <Portal id="modal-root">
    <StyledModalContainer className="dim">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        aria-describedby={label}
        tabIndex={0}
        {...restProps}
      >
        <header id={label}>
          <A11yHidden as="h3">{title}</A11yHidden>
        </header>
        <StyledModalBodyContainer>
          {/* 카드 컨텐츠  */}
          {desktop ? (
            <>
              <StyledPackageContainer>
                <h4>{firstPackage.title}</h4>
                <StyledPackageListContainer
                  className="firstPackage"
                  numOfProd={firstPackage.contents?.length}
                >
                  {firstPackage.contents?.map(content => (
                    <HelmetPriceTable
                      key={content.id}
                      id={content.id}
                      data-name="firstPackage"
                      active={content.active}
                      onClick={onlyOneSelected}
                      {...content}
                    />
                  ))}
                </StyledPackageListContainer>
              </StyledPackageContainer>
            </>
          ) : (
            <StyledCarouselContainer>
              <h4>{firstPackage.title}</h4>
              <Carousel
                type="card"
                className="firstCarousel"
                contents={firstPackageContents}
              />
            </StyledCarouselContainer>
          )}

          <StyledTotalPriceContainer>
            <p>Total Price</p>
            <span>${totalPrice(firstPackage)}</span>
          </StyledTotalPriceContainer>
          <StyledButtonContainer>
            <Button
              disabled={checkActive(firstPackage)}
              mode="button"
              onClick={addServices('window', firstPackage)}
            >
              Confirm
            </Button>
          </StyledButtonContainer>
          <Button mode="button" aria-label="Modal 닫기" onClick={onChange}>
            <Icon type="close" title="close" />
          </Button>
        </StyledModalBodyContainer>
      </motion.div>
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
