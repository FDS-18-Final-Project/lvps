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
import Portal from 'utils/portal';

const detailAndPaintCorrectionData = {
  label: 'Detailing and Paint Correction Product Options',
  title: 'Detailing and Paint Correction Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        option: 'Gold',
        price: '499.99',
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          },
          {
            id: 9,
            description: 'Claybar & iron paint decontamination'
          },
          {
            id: 10,
            description: 'Compound and polish to remove scratches'
          },
          {
            id: 11,
            description: 'Polish to add gloss to paint'
          },
          {
            id: 12,
            description: 'Compound and polish to remove scratches'
          },
          {
            id: 13,
            description: 'Paint sealant'
          },
          {
            id: 14,
            description: 'Engine cleaning and dressing'
          },
          {
            id: 15,
            description: 'Headlights polish'
          }
        ]
      },
      {
        option: 'Silver',
        price: '399.99',
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          },
          {
            id: 9,
            description: 'Claybar & iron paint decontamination'
          },
          {
            id: 10,
            description: 'Polish to add gloss to paint'
          }
        ]
      },
      {
        option: 'Bronze',
        price: '199.99',
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Paint Correction',
    contents: [
      {
        color: 'black',
        price: '300',
        heading: 'PAINT CORRECTION',
        info: ['1 Stage Polish to correct minor scratches and swirls']
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
    margin: 3rem 0rem 6.5rem;
  }
  &:nth-child(2) strong {
    margin-bottom: ${calcRem(30)};
  }
  &:nth-child(2) ul {
    margin-top: ${calcRem(30)};
  }
  &:nth-child(1) strong {
    margin-bottom: ${calcRem(105)};
  }
  .firstPackage > div {
    justify-content: initial;
    padding: 1.4375rem 1.875rem ${calcRem(38)};
    background-size: ${calcRem(480)};
    position: relative;

    &:nth-child(2) strong {
      margin-bottom: 200px;
    }
    &:nth-child(3) strong {
      margin-bottom: 250px;
    }
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
  &.firstPackage ul li p {
    color: ${colors.white};
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
const DetailModalDialog = () => {
  const {
    label,
    title,
    firstPackage,
    secondPackage
  } = detailAndPaintCorrectionData;

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
                <PrimiumPriceTable key={idx} {...content} />
              ))}
            </StyledPackageListContainer>
          </StyledPackageContainer>
          <StyledPackageContainer>
            <h4>{secondPackage.title}</h4>
            <StyledPackageListContainer
              numOfProd={secondPackage.contents?.length}
            >
              {secondPackage.contents?.map((content, idx) => (
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

export default React.memo(DetailModalDialog);
