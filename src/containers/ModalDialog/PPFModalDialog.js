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

const ppfData = {
  label: 'Paint Protection Film Product Options',
  title: 'Paint Protection Film Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        option: 'Platinum',
        price: '1499',
        info: [
          {
            id: 1,
            description: 'Full Front & Rear Bumpers'
          },
          {
            id: 2,
            description: 'Full Hood, Fenders, Roof, Trunk'
          },
          {
            id: 3,
            description: 'Full Door Panels'
          },
          {
            id: 4,
            description: 'Full Quarter & Pillar Panels'
          },
          {
            id: 5,
            description: 'Mirror Covers'
          },
          {
            id: 6,
            description: 'Headlights & Fog Lights'
          }
        ]
      },
      {
        option: 'Gold',
        price: '899',
        info: [
          {
            id: 1,
            description: 'Full Front Bumper'
          },
          {
            id: 2,
            description: 'Full Hood & Fenders'
          },
          {
            id: 3,
            description: 'Mirror Covers'
          },
          {
            id: 4,
            description: 'Headlights & Fog Lights'
          }
        ]
      },
      {
        option: 'Silver',
        price: '599',
        info: [
          {
            id: 1,
            description: 'Full Front Bumper'
          },
          {
            id: 2,
            description: 'Hood & Fenders 18″'
          },
          {
            id: 3,
            description: 'Mirror Covers'
          },
          {
            id: 4,
            description: 'Headlights & Fog Lights'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Paint Protection OPTIONS',
    contents: [
      {
        color: 'red_05',
        heading: '',
        price: '250',
        info: ["18'' HOOD AND FENDERS"]
      },
      {
        color: 'red_05',
        heading: '',
        price: '300',
        info: ["24'' HOOD AND FENDERS"]
      },
      {
        color: 'red_05',
        heading: '',
        price: '80',
        info: ['Trunk Strip Paint Protection Coverage']
      },
      {
        color: 'red_05',
        heading: '',
        price: '250',
        info: ['Rocker Panel Paint Protection coverage']
      },
      {
        color: 'red_05',
        heading: '',
        price: '150',
        info: ['Front Headlight Paint Protection Coverage']
      },
      {
        color: 'red_05',
        heading: '',
        price: '600',
        info: ['Full Bumper Paint Protection Coverage']
      },
      {
        color: 'red_05',
        heading: '',
        price: '600',
        info: ['Full Hood Paint Protection Coverage']
      },
      {
        color: 'red_05',
        heading: '',
        price: '300',
        info: ['Pillars Paint Protection Coverage(A-PILLARS AND FRONT OF ROOF)']
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
const PPFModalDialog = () => {
  const { label, title, firstPackage, secondPackage } = ppfData;

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

export default React.memo(PPFModalDialog);
