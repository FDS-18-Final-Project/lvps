import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { Button, A11yHidden, Icon, PriceTable } from 'components';
import Portal from 'utils/portal';

const modalType = {
  ceramic: {
    label: 'Ceramic Pro Product Options',
    title: 'Ceramic Pro Product ModalDialog',
    products: [
      {
        id: 1,
        title: 'Ceramic Pro Protection Packages',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Ceramic Pro Protection Additional Options',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'IGL Coatings',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 4,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      }
    ]
  },
  ppf: {
    label: 'Paint Protection Film Product Options',
    title: 'Paint Protection Film Product ModalDialog',
    products: [
      {
        id: 1,
        title: 'Packages',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Paint Protection OPTIONS',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 4,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 5,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 6,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 7,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 8,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      }
    ]
  },
  window: {
    label: 'Window Tinting Product Options',
    title: 'Window Tinting Product ModalDialog',
    products: [
      {
        id: 1,
        title: 'Package Options',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 4,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      }
    ]
  },
  detail: {
    label: 'Detailing and Paint Correction Product Options',
    title: 'Detailing and Paint Correction Product ModalDialog',
    products: [
      {
        id: 1,
        title: 'Package Options',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Paint Correction',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      }
    ]
  },
  wheel: {
    label: 'Wheels and Tires Product Options',
    title: 'Wheels and Tires Product ModalDialog',
    products: [
      {
        id: 1,
        title: 'Tire Brands We Offer',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 2,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          },
          {
            id: 3,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Wheel Brands We Offer',
        contents: [
          {
            id: 1,
            tagType: 'tagSilver',
            tagText: 'Gold',
            price: '400',
            nonSelectedIdx: 7,
            cardInfo: [
              'Complete exterior hand wash',
              'Complete interior vaccum',
              'Leather cleaning and conditioning',
              'Cleaning windows and mirrors',
              'Salt removal',
              'Cleaning door jams',
              'Wheel cleaning and tire dressing',
              'Removing bugs, tar, tree sap',
              'Claybar & iron paint decontamination',
              'Polish to add gloss to paint',
              'Compound and polish to remove scratches',
              'Paint sealant',
              'Engine cleaning and dressing',
              'Headlights polish'
            ]
          }
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
`;

const StyledModalBodyContainer = styled.div`
  width: 100%;
  padding-top: ${calcRem(180)};

  /* 각각 packag option 세션 (첫번째꺼 제외)*/
  & div + div {
    border-top: ${calcRem(2.4)} solid ${colors.lightGray};
    padding-top: ${calcRem(50)};
  }
  & div + div:nth-last-child(2) {
    border-top: 0;
    padding-top: 0;
  }
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

    & div {
      margin: 0;
    }
    path {
      fill: black;
    }
  }
`;

const StyledModalProductListContainer = styled.div`
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
  height: 155px;
  padding: 200px 0;
  position: relative;
  button {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
`;
const ModalDialog = ({ type }) => {
  const { label, title, products } = modalType[type];

  return (
    <Portal id="modal-root">
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
          {/* 카드 컨텐츠  */}
          <StyledModalBodyContainer>
            {products.map((product, i) => (
              <div>
                <h4>{product.title}</h4>
                <StyledModalProductListContainer
                  key={i}
                  numOfProd={product.contents?.length}
                >
                  {product.contents?.map((content, i) => (
                    <PriceTable
                      key={i}
                      type="title"
                      hover={false}
                      content={content}
                      modal
                    />
                  ))}
                </StyledModalProductListContainer>
              </div>
            ))}
            <StyledButtonContainer>
              <Button mode="button">Confirm</Button>
            </StyledButtonContainer>
            <Button mode="button" aria-label="Modal 닫기">
              <Icon type="close" />
            </Button>
          </StyledModalBodyContainer>
        </div>
      </StyledModalContainer>
    </Portal>
  );
};

ModalDialog.prototype = {
  type: string
};
ModalDialog.defaultProp = {
  type: 'ceramic'
};

export default React.memo(ModalDialog);
