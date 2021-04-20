import React from 'react';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import {
  Button,
  A11yHidden,
  Icon,
  HelmetPriceTable,
  PrimiumPriceTable
} from 'components';
import useModalSelected from 'hooks/useModalSelected';
import { ppfMultiToggleActive, ppfSingleToggleActive } from 'store/modal/ppf';
import { motion } from 'framer-motion';

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
    width: ${calcRem(10)};
  }
  & > div::-webkit-scrollbar-thumb {
    background-color: #${colors.black};
    border-radius: ${calcRem(10)};
    background-clip: padding-box;
    border: ${calcRem(2)} solid transparent;
  }
  & > div::-webkit-scrollbar-track {
    background-color: ${colors.lightGray};
    border-radius: ${calcRem(10)};
    box-shadow: inset 0 0 ${calcRem(5)} white;
  }
  .firstPackage > div {
    justify-content: initial;
    min-height: ${calcRem(520)};
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
    margin-bottom: ${calcRem(120)};
  }
  .firstPackage > div {
    justify-content: initial;
    padding: 1.4375rem 1.875rem ${calcRem(38)};
  }
  .firstPackage li > p {
    color: ${colors.white};
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
  }
`;
const PPFModalDialog = ({ onChange, confirmCheck, ...restProps }) => {
  const {
    modalData,
    onlyOneSelected,
    multiSelected,
    addServices,
    checkActive
  } = useModalSelected(
    'ppfModal',
    ppfSingleToggleActive,
    ppfMultiToggleActive,
    onChange,
    confirmCheck
  );
  const { label, title, firstPackage, secondPackage } = modalData;

  return (
    // <Portal id="modal-root">
    <StyledModalContainer>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        aria-describedby={label}
        tabIndex="0"
        {...restProps}
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
              {firstPackage.contents?.map(content => (
                <PrimiumPriceTable
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
          <StyledPackageContainer>
            <h4>{secondPackage.title}</h4>
            <StyledPackageListContainer
              numOfProd={secondPackage.contents?.length}
            >
              {secondPackage.contents?.map(content => (
                <HelmetPriceTable
                  key={content.id}
                  id={content.id}
                  data-name="secondPackage"
                  active={content.active}
                  onClick={multiSelected}
                  {...content}
                />
              ))}
            </StyledPackageListContainer>
          </StyledPackageContainer>
          <StyledButtonContainer>
            <Button
              disabled={checkActive(firstPackage, secondPackage)}
              mode="button"
              onClick={addServices('ppf', firstPackage, secondPackage)}
            >
              Confirm
            </Button>
          </StyledButtonContainer>
          <Button mode="button" aria-label="Modal 닫기" onClick={onChange}>
            <Icon type="close" />
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

export default React.memo(PPFModalDialog);
